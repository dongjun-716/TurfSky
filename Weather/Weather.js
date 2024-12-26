import { StatusBar } from 'expo-status-bar';
import React, { useState, Suspense } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Yang from './Yang';
import Go from './Go';
import Je from './Je';
import Po from './Po';
import Pu from './Pu';
import Seo from './Seo';
import Header from '../component/Header';
import Menubar from '../component/Menubar';


export default function Weather({ navigation }) {
  const [selectedLocaIndex, setSelectedLocaIndex] = useState(0);

  const locaNames = ['양양', '부산', '제주', '고성/속초', '포항/울산', '서해/남해'];
  handleLocaChange = (index) => {
    setSelectedLocaIndex(index);
  };

  const getPageComponent = () => {
    switch (selectedLocaIndex) {
      case 0:
        return <Yang />;
      case 1:
        return <Pu />;
      case 2:
        return <Je />;
      case 3:
        return <Go />;
      case 4:
        return <Po />;
      case 5:
        return <Seo />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.menu}>
        <View style={{ flexDirection: "row", marginLeft: "4%", marginBottom: "1%" }}>
          <Text style={styles.mainname}>날씨</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Feather name="map" size={24} color="black" style={styles.map} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.locaMenu}>
          {locaNames.map((locaName, index) => (
            <TouchableOpacity
              enabled={true}
              key={index}
              style={[styles.touch, index === selectedLocaIndex ? styles.selectedLoca : null]}
              onPress={() => handleLocaChange(index)}
            >
              <Text style={[styles.loca, index === selectedLocaIndex ? styles.selectedLoca : null]}>{locaName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <Suspense fallback={<Text>Loading...</Text>}>
            {getPageComponent()}
          </Suspense>
        </ScrollView>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    paddingTop: Constants.statusBarHeight,
    flex: 0.7,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
  },
  map: {
    marginTop: 25,
    marginRight: "5%"
  },
  bar: {
    flex: 1,
    marginLeft: "6%"
  },
  logoname: {
    flex: 2,
  },
  main: {
    flex: 8,
    backgroundColor: "white",
  },
  stickBar: {
    flex: 1.4,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },
  iconText: {
    fontSize: 13,
    marginTop: 5
  },
  store: {
    marginTop: 15,
  },
  shop: {
    marginTop: 15,
  },
  change: {
    marginTop: 4,
  },
  comm: {
    marginTop: 15,
    width: 30.3,
    paddingLeft: 4.3
  },
  weather: {
    marginTop: 12,
    height: 30,
  },
  mainname: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    paddingLeft: "2%",
    paddingTop: "5%"
  },
  plus: {
    color: "gray",
    fontSize: 20,
    marginTop: "5%"
  },
  locaMenu: {
    textAlign: "center",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
  },
  loca: {
    color: "#616161",
    fontSize: 21,
    marginLeft: 25, marginRight: 10, marginBottom: 10,
  },
  touch: {
    TouchableOpacity: 1,
  },
  selectedLoca: {
    color: "blue",
    fontWeight: "800"
  }
})
