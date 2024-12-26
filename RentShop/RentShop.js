import { StatusBar } from 'expo-status-bar';
import React, { useState, Suspense } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Header from '../component/Header';
import Menubar from '../component/Menubar';
import YangRent from './YangRent';
import GoRent from './GoRent.js';
import JeRent from './JeRent';
import PoRent from './PoRent';
import PuRent from './PuRent';
import SeoRent from './SeoRent.js';



export default function RentShop({ navigation }) {
  const [selectedLocaIndex, setSelectedLocaIndex] = useState(0);

  const locaNames = ['양양', '부산', '제주', '고성/속초', '포항/울산', '서해/남해'];
  handleLocaChange = (index) => {
    setSelectedLocaIndex(index);
  };

  const getPageComponent = () => {
    switch (selectedLocaIndex) {
      case 0:
        return <YangRent />;
      case 1:
        return <PuRent />;
      case 2:
        return <JeRent />;
      case 3:
        return <GoRent />;
      case 4:
        return <PoRent />;
      case 5:
        return <SeoRent />;
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
          <Text style={styles.mainname}>랜탈샵</Text>
        </View>
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
  main: {
    flex: 8,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "gray"
  },
  mainname: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    paddingLeft: "2%",
    paddingTop: "5%"
  },
  locaMenu: {
    textAlign: "center",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
    marginBottom: -60
  },
  loca: {
    color: "#616161",
    fontSize: 23,
    marginLeft: 25, marginRight: 10,
  },
  selectedLoca: {
    color: "blue",
    fontWeight: "800"
  },
  touch: {
    TouchableOpacity: 1,
  },
})
