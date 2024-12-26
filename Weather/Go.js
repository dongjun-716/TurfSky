import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

//const API_KEY = "7208ad002bfd6bd8a6545238c8bae0e1";

export default function Go({navigation}) {
  const [locations, setLocations] = useState([
    { name: '송지호', latitude: 38.33, longitude: 128.52 },
    { name: '천진해변', latitude: 38.25, longitude: 128.56 },
    { name: '속초해변', latitude: 38.19, longitude: 128.60 },
  ]);

  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    const updatedWeatherData = [];

    for (const location of locations) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
      );
      const json = await response.json();
      updatedWeatherData.push({
        name: location.name,
        daily: json.daily,
        current: json.current,
      });
      console.log(json);
    }
    console.log(updatedWeatherData);
    setWeatherData(updatedWeatherData);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getBackgroundColor = (windSpeed) => {
    if (windSpeed >= 0 && windSpeed <= 5.4) {
      return '#77F2B5';
    } else if (windSpeed >= 5.5 && windSpeed <= 10.7) {
      return '#ECF277';
    } else if (windSpeed >= 10.8 && windSpeed <= 17.1) {
      return '#F27779';
    } else {
      return '#9189FF';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {isLoading ? (
        <View style={styles.active}>
          <ActivityIndicator color="black" size="large" style={{ marginTop: 20, alignItems: "center"}} />
        </View>
      ) : (
        <><View style={styles.notice}>
          <View style={styles.green}><Text style={{ fontSize: 17, fontWeight: "500" }}>초보자용</Text></View>
          <View style={styles.yellow}><Text style={{ fontSize: 17, fontWeight: "500" }}>중급자용</Text></View>
          <View style={styles.red}><Text style={{ fontSize: 17, fontWeight: "500" }}>숙련자용</Text></View>
          <View style={styles.blue}><Text style={{ fontSize: 17, fontWeight: "500" }}>서핑불가</Text></View>
        </View>
          <View>
            {weatherData.map((locationData, index) => (
              <View key={index} style={[
                styles.eleme,
                { backgroundColor: getBackgroundColor(locationData.current.wind_speed) },
              ]}>
                <Text style={styles.cityName}>{locationData.name}</Text>
                <View>
                  <Text style={styles.temp}>온도 {parseFloat(locationData.current.temp).toFixed(1)}° C</Text>
                  <Text style={styles.wind}>풍속 {locationData.current.wind_speed} m/s</Text>
                  <Text style={styles.rain}>강수량 {locationData.daily[0].rain !== undefined ? `${locationData.daily[0].rain}` : "0"} mm/h</Text>
                </View>
              </View>
            ))}
          </View></>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10, paddingLeft: 24, paddingRight: 15
  },
  active:{
    alignItems: "center",
    marginTop : "50%",
  },
  notice: {
    flexDirection: "row",
    height: 30,
    marginBottom: 7,
  },
  green: {
    flex: 1,
    backgroundColor: "#77F2B5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
  },
  yellow: {
    flex: 1,
    backgroundColor: "#ECF277",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2, marginRight: 2,
  },
  red: {
    flex: 1,
    backgroundColor: "#F27779",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2, marginRight: 2,
  },
  blue: {
    flex: 1,
    backgroundColor: "#9189FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  eleme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    marginBottom: 1, marginTop: 3,
    paddingRight: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  cityName: {
    fontSize: 26,
    fontWeight: "600",
    marginLeft: 15
  },
  temp: {
    fontSize: 20,
    fontWeight: "600"
  },
  wind: {
    marginTop: 4,
  },
  rain: {
    marginTop: 4,
  }
});
