import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../component/Header';
import Menubar from '../component/Menubar';
import Svg, { Line } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
//const API_KEY = "9dc6c1ac0ac5658a1d971d4e063c873e";


export default function Home({ navigation }) {
  const [locations, setLocations] = useState([
    { name: '양양', latitude: 38.05, longitude: 128.65 },
    { name: '부산', latitude: 35.17, longitude: 129.07 },
    { name: '제주', latitude: 33.50, longitude: 126.48 },
    { name: '고성', latitude: 34.97, longitude: 128.32 },
    { name: '속초', latitude: 38.20, longitude: 128.59 },
    { name: '포항', latitude: 36.01, longitude: 129.34 },
    { name: '울산', latitude: 35.59, longitude: 129.35 },
    { name: '태안', latitude: 36.74, longitude: 126.29 },
    { name: '고흥', latitude: 36.74, longitude: 126.29 },
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
        weather: json.current.weather[0],
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

  const renderWeatherImage = (weatherMain) => {
    let imageSource;

    if (weatherMain === "01d" || weatherMain === "01n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/01d@2x.png' }
    } else if (weatherMain === "02d" || weatherMain === "02n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/02d@2x.png' }
    } else if (weatherMain === "03d" || weatherMain === "03n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/03d@2x.png' }
    } else if (weatherMain === "04d" || weatherMain === "04n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/04d@2x.png' }
    } else if (weatherMain === "09d" || weatherMain === "09n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/09d@2x.png' }
    } else if (weatherMain === "10d" || weatherMain === "10n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/10d@2x.png' }
    } else if (weatherMain === "11d" || weatherMain === "11n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/11d@2x.png' }
    } else if (weatherMain === "13d" || weatherMain === "13n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/13d@2x.png' }
    } else if (weatherMain === "50d" || weatherMain === "50n") {
      imageSource = { uri: 'https://openweathermap.org/img/wn/50d@2x.png' }
    }

    return <Image source={imageSource} style={styles.weatherImg} resizeMode="contain" />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <ScrollView style={{ flex: 8, backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          <Image source={require("../assets/001.png")} style={styles.cardNews} />
          <Image source={require("../assets/002.png")} style={styles.cardNews} />
          <Image source={require("../assets/003.png")} style={styles.cardNews} />
          <Image source={require("../assets/004.png")} style={styles.cardNews} />
          <Image source={require("../assets/005.png")} style={styles.cardNews} />
          <Image source={require("../assets/006.png")} style={styles.cardNews} />
          <Image source={require("../assets/007.png")} style={styles.cardNews} />
        </ScrollView>
        <View style={{alignItems:'flex-end', marginRight: 12, marginBottom: 40, marginTop: -20}}>
          <Text style={styles.moreView} onPress={() => navigation.navigate('Survey')}> 나에게 맞는 서핑알아보기 &gt; </Text>
        </View>
        <View>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>랜탈샵</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView} onPress={() => navigation.navigate('RentShop')}>더보기 &gt; </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 45 }}>
            <View style={styles.rentEle}>
              <Image source={require("../assets/lastwave.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>라스트웨이브 송정</Text>
              <Text>부산 해운대구 송정동</Text>
              <Text>051-701-7922</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("../assets/surfroad.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>서프로드 송정</Text>
              <Text>부산 해운대구 송정동</Text>
              <Text>070-4121-2222</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("../assets/moon.png")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>문서프 제주</Text>
              <Text>제주 제주시 애월읍</Text>
              <Text>0507-1416-3332</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("../assets/드리프터.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>드리프터 양양</Text>
              <Text>강원 양양군 현남면</Text>
              <Text>0507-1457-0910</Text>
            </View>
            <View style={styles.rentEle}>
              <Image source={require("../assets/tyler.jpg")} style={styles.rentImg} resizeMode='contain' />
              <Text style={{ fontSize: 20, fontWeight: 800 }}>타일러서프 양양</Text>
              <Text>강원 양양군 현남면</Text>
              <Text>033-672-8993</Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>마    켓</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView} onPress={() => navigation.navigate('RentShop')}> 더보기 &gt; </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", marginRight: 20 }}>
                <Image source={require("../assets/S1MN30100.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>모던 서핑보드 7.4</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>1,260,000원</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image source={require("../assets/S13G204WH.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>그라나무 소프트보드 9.0</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>550,000원</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <View style={{ alignItems: "center", marginLeft: 20 }}>
                <Image source={require("../assets/리시코드.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>서핑 리시코드 발목 스트랩</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>21,340원</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Image source={require("../assets/패들보드.jpg")} style={styles.marketImg} resizeMode='contain' />
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 5 }}>패들 보드 물놀이 스탠딩 서핑보드</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: 5 }}>214,160원</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 55 }}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>게시판</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView} onPress={() => navigation.navigate('Post')}> 더보기 &gt; </Text>
          </View>
          <View>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
            <Text style={styles.commText}>테스트입니다.</Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.mainTitle}>
            <Text style={styles.mainText}>날    씨</Text>
            <Svg height="100%" width="60%">
              <Line x1="3%" y1="70%" x2="100%" y2="70%" stroke="#5E5E5E" strokeWidth="1.5"></Line>
            </Svg>
            <Text style={styles.moreView} onPress={() => navigation.navigate('Weather')}> 더보기 &gt; </Text>
          </View>
          <View>
            <View style={styles.imgContainer}>
              {isLoading ? (
                <View>
                  <ActivityIndicator color="black" size="large" style={{ marginTop: 20, alignItems: "center" }} />
                </View>
              ) : (
                <><ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                  {weatherData.map((locationData, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Weather')}>
                      {renderWeatherImage(locationData.current.weather[0].icon)}
                      <View style={styles.textContainer}>
                        <Text style={styles.locationName}>{locationData.name}</Text>
                        <Text style={styles.temp}>{parseFloat(locationData.current.temp).toFixed(1)}<Text style={{ fontSize: 15 }}> ° C</Text></Text>
                        <Text style={styles.wind}>{locationData.current.wind_speed} <Text style={{ fontSize: 15 }}> m/s</Text></Text>
                        <Text style={styles.rain}>{locationData.daily[0].rain !== undefined ? `${locationData.daily[0].rain}` : "0"} 
                        <Text style={{ fontSize: 15 }}> mm/h</Text></Text>
                      </View>
                    </TouchableOpacity>))}
                </ScrollView></>)}
            </View>
          </View>
        </View>
      </ScrollView>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardNews: {
    width: SCREEN_WIDTH, height: SCREEN_WIDTH
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
  },
  moreView: {
    color: "#5E5E5E",
    fontSize: 16,
    marginTop: "2%",
    marginLeft: 10,
  },
  rentEle: {
    alignItems: "center",
    marginLeft: 20
  },
  rentImg: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  marketImg: {
    width: 180, height: 190
  },
  commText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  weatherImg: {
    marginLeft: 20,
    width: 150, height: 150,
    opacity: 0.5,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 55,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  locationName: {
    fontSize: 45,
    marginBottom: 10, marginTop: 18,
    fontWeight: "bold",
    letterSpacing: 15,
  },
  temp: {
    fontSize: 20,
    marginBottom: 5,
  },
  wind: {
    fontSize: 20,
    marginBottom: 5,
  },
  rain: {
    fontSize: 20,
  },
  moreView: {
    fontSize: 20,
  }
})
