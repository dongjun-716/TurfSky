import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function YangRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.rentMenu} onPress={() => Linking.openURL('https://www.instagram.com/_surfsalon')}>
          <View>
            <Text style={styles.rentTitle}>서  프  살  롱</Text>
            <Image source={require("../assets/surfsalon.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>강원 양양군 강현면 물치1길 11</Text>
            <Text style={styles.tel}>0507-1308-8165</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑</Text>
              <Text style={styles.hashtag}>#양양서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#속초여행</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rentMenu} onPress={() => Linking.openURL('https://www.instagram.com/byeol_surf')}>
          <View>
            <Text style={styles.rentTitle}> 별    서    프</Text>
            <Image source={require("../assets/star.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 17}}>강원 양양군 강현면 뒷나루2길 13</Text>
            <Text style={styles.tel}>010-2428-2494</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#별게스트하우스</Text>
              <Text style={styles.hashtag}>#양양서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#설악해수욕장</Text>
              <Text style={styles.hashtag}>#설악해변</Text>
              <Text style={styles.hashtag}>#설악서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rentMenu} onPress={() => Linking.openURL('https://www.instagram.com/yangyangsurfingschool/')}>
          <View>
            <Text style={styles.rentTitle}>양양서핑학교</Text>
            <Image source={require("../assets/surfschool.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>강원 양양군 양양읍 일출로 159-12</Text>
            <Text style={styles.tel}>010-5788-1824</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#낙산해수욕장</Text>
              <Text style={styles.hashtag}>#양양서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑스쿨</Text>
              <Text style={styles.hashtag}>#속초서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#8A836B"}} onPress={() => Linking.openURL('https://www.instagram.com/drifter.kr')}>
          <View>
            <Text style={styles.rentTitle}>드  리  프  터</Text>
            <Image source={require("../assets/drifter.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15}}>강원 양양군 현남면 인구중앙길 89</Text>
            <Text style={styles.tel}>0507-1457-9310</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑</Text>
              <Text style={styles.hashtag}>#양양서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑샵</Text>
              <Text style={styles.hashtag}>#양양서핑대여</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#89B4DF"}} onPress={() => Linking.openURL('https://www.instagram.com/surfwon/')}>
          <View>
            <Text style={styles.rentTitle}> 서    프    원</Text>
            <Image source={require("../assets/surfwon.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>강원 양양군 현북면 기사문길 19-2</Text>
            <Text style={styles.tel}>0507-1369-8258</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑</Text>
              <Text style={styles.hashtag}>#서핑배우기</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑강습</Text>
              <Text style={styles.hashtag}>#강원도서핑</Text>
              <Text style={styles.hashtag}>#기사문</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#E2DEC7"}} onPress={() => Linking.openURL('https://www.instagram.com/surfnery/')}>
          <View>
            <Text style={styles.rentTitle}>서  프  너  리</Text>
            <Image source={require("../assets/surfnery.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15}}>강원 양양군 현남면 인구중앙길 91-1</Text>
            <Text style={styles.tel}>0507-1308-9217</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑강습</Text>
              <Text style={styles.hashtag}>#양양서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양게스트하우스</Text>
              <Text style={styles.hashtag}>#양양팬션</Text>
              <Text style={styles.hashtag}>#서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rentMenu} onPress={() => Linking.openURL('https://www.instagram.com/littlecove__/')}>
          <View>
            <Text style={styles.rentTitle}>리  틀  코  브</Text>
            <Image source={require("../assets/littlecove.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>강원 양양군 현남면 인구길 56-2  </Text>
            <Text style={styles.tel}>0507-1330-4045</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑</Text>
              <Text style={styles.hashtag}>#인구해변서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#양양서핑강습</Text>
              <Text style={styles.hashtag}>#인구서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#8A8A8C"}} onPress={() => Linking.openURL('https://jakesurfkorea.creatorlink.net/')}>
          <View>
            <Text style={styles.rentTitle}>제 이 크 서 프</Text>
            <Image source={require("../assets/jakesurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>강원 양양군 현남면 매바위길 159</Text>
            <Text style={styles.tel}>010-9941-0688</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제이크서프</Text>
              <Text style={styles.hashtag}>#양양서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#강릉서핑</Text>
              <Text style={styles.hashtag}>#인구해변</Text>
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
