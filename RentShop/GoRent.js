import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function GoRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#6494A0"}} onPress={() => Linking.openURL('https://www.instagram.com/surfstay_/')}>
          <View>
            <Text style={styles.rentTitle}>서 프 스 테 이</Text>
            <Image source={require("../assets/surfstay.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>강원 고성군 죽왕면 문암항2길 11 </Text>
            <Text style={styles.tel}>0507-1412-0522</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#고성서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#동해서핑</Text>
              <Text style={styles.hashtag}>#서핑랜탈</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{...styles.rentMenu, backgroundColor:"#CED1F0"}} onPress={() => Linking.openURL('http://cafe.naver.com/peachsurf')}>
          <View>
            <Text style={styles.rentTitle}>피  치  서  프</Text>
            <Image source={require("../assets/peachsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>강원 고성군 죽왕면 백도해변길 78</Text>
            <Text style={styles.tel}>0507-1493-7707</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#고성서핑</Text>
              <Text style={styles.hashtag}>#백도서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#강원도서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/bk_surf/')}>
          <View>
            <Text style={styles.rentTitle}> B  K  서  프</Text>
            <Image source={require("../assets/bksurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15}}>강원 고성군 죽왕면 자작도선사길 110</Text>
            <Text style={styles.tel}>0507-1353-6217</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#고성서핑</Text>
              <Text style={styles.hashtag}>#삼포해수욕장서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#강원도고성서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#6AC7CF"}} onPress={() => Linking.openURL('https://www.instagram.com/winnersurf/')}>
          <View>
            <Text style={styles.rentTitle}>위  너  서  프</Text>
            <Image source={require("../assets/winnersurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 17}}>강원 고성군 죽왕면 오호천길 23 </Text>
            <Text style={styles.tel}>0507-1309-6336</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#고성서핑</Text>
              <Text style={styles.hashtag}>#강원도고성서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#송지호서핑</Text>
              <Text style={styles.hashtag}>#속초서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#B7BCC4"}} onPress={() => Linking.openURL('http://www.instagram.com/badasurf')}>
          <View>
            <Text style={styles.rentTitle}>바  다  서  프</Text>
            <Image source={require("../assets/badasurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>강원 속초시 새마을길 66 바다서프 </Text>
            <Text style={styles.tel}>0507-1321-1611</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#속초해수욕장</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초여행</Text>
              <Text style={styles.hashtag}>#속초서핑강습</Text>
              <Text style={styles.hashtag}>#속초해변</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#EC6D7A"}} onPress={() => Linking.openURL('https://www.instagram.com/coralsurf_somang/  ')}>
          <View>
            <Text style={styles.rentTitle}>코  랄  서  프</Text>
            <Image source={require("../assets/coralsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>강원 속초시 새마을13길 15     </Text>
            <Text style={styles.tel}>0507-1341-1983</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#속초바다서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초서핑강습</Text>
              <Text style={styles.hashtag}>#속초바다서핑</Text>
              <Text style={styles.hashtag}>#서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10, paddingLeft: 24, paddingRight: 15
  },
  rentMenu: {
    width: 350,
    height: 100,
    flexDirection: "row",
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10
  },
  rentTitle: {
    fontSize: 25,
    fontWeight: "900",
    marginRight: 20, marginLeft: 10, marginTop: 5
  },
  rentImg: {
    justifyContent: "center",
    width: 80,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 17, marginTop: 7,
  },
  detail:{
    marginRight: 10,
    marginTop: 10
  },
  address:{
    fontWeight: "600"
  },
  tel:{
    fontSize: 17,
    fontWeight: "600",
    color:"blue",
    marginTop: 5
  },
  hashView:{
    flexDirection:"row"
  },
  hashtag:{
    color: "gray",
    marginTop: 5,
    backgroundColor: "black",
    color: "white"
  }
});
