import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function PuRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#C8CDCF"}} onPress={() => Linking.openURL('https://surfroad.modoo.at/')}>
          <View>
            <Text style={styles.rentTitle}>서  프  로  드</Text>
            <Image source={require("../assets/surfroad.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>부산 해운대구 송정중앙로36번길 43</Text>
            <Text style={styles.tel}>070-4121-2222</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산서핑</Text>
              <Text style={styles.hashtag}>#송정서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#부산서핑강습</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rentMenu} onPress={() => Linking.openURL('https://www.instagram.com/surfbay051/')}>
          <View>
            <Text style={styles.rentTitle}>서  프  베  이</Text>
            <Image source={require("../assets/surfbay.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>부산 해운대구 송정광어골로 55</Text>
            <Text style={styles.tel}>0507-1414-5550</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산서핑</Text>
              <Text style={styles.hashtag}>#송정서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산송정서핑</Text>
              <Text style={styles.hashtag}>#애견동반</Text>
              <Text style={styles.hashtag}>#서프베이</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#A07661"}} onPress={() => Linking.openURL('https://www.instagram.com/surfholic_kr/')}>
          <View>
            <Text style={styles.rentTitle}>서  프  홀  릭</Text>
            <Image source={require("../assets/surfholic.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 19}}>부산 해운대구 송정해변로 50</Text>
            <Text style={styles.tel}>051-701-4851</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#송정서핑</Text>
              <Text style={styles.hashtag}>#부산서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑배우기</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#송정서핑샵</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#C4D4E0"}} onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <View>
            <Text style={styles.rentTitle}>바  인  서  프</Text>
            <Image source={require("../assets/vinesurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>부산 해운대구 송정광어골로82번길 144</Text>
            <Text style={styles.tel}>010-8343-7996</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#송정서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산서핑</Text>
              <Text style={styles.hashtag}>#부산서핑강습</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/mellowsurfkorea/')}>
          <View>
            <Text style={styles.rentTitle}>멜 로 우 서 프</Text>
            <Image source={require("../assets/mellow.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>부산 해운대구 송정광어골로 19-1</Text>
            <Text style={styles.tel}>0507-1444-7373</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#송정서핑</Text>
              <Text style={styles.hashtag}>#부산서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산송정서핑</Text>
              <Text style={styles.hashtag}>#부산서핑샵</Text>
              <Text style={styles.hashtag}>#서핑샵</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#F8C013"}} onPress={() => Linking.openURL('https://www.instagram.com/surfysurfy.co.kr/')}>
          <View>
            <Text style={styles.rentTitle}>서  피  서  피</Text>
            <Image source={require("../assets/surfysurfy.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 17}}>부산 해운대구 송정해변로 48   </Text>
            <Text style={styles.tel}>0507-1479-9282</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산서핑</Text>
              <Text style={styles.hashtag}>#송정서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#송정서핑강습</Text>
              <Text style={styles.hashtag}>#서핑초보</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#D8DAE1"}} onPress={() => Linking.openURL('https://www.instagram.com/gaerilla_songjeong/')}>
          <View>
            <Text style={styles.rentTitle}>  개   릴   라</Text>
            <Image source={require("../assets/gaerillasurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16.3}}>부산 해운대구 송정광어골로 29    </Text>
            <Text style={styles.tel}>010-5883-9323</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#패들보드</Text>
              <Text style={styles.hashtag}>#송정해수욕장</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#부산패들보드</Text>
              <Text style={styles.hashtag}>#부산서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#AAB3B2"}} onPress={() => Linking.openURL('http://www.catchwave.co.kr/')}>
          <View>
            <Text style={styles.rentTitle}>케 치 웨 이 브</Text>
            <Image source={require("../assets/catchwave.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>부산 해운대구 송정중앙로36번길 36-9</Text>
            <Text style={styles.tel}>010-2584-2144</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#송정서핑</Text>
              <Text style={styles.hashtag}>#송정서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#부산서핑</Text>
              <Text style={styles.hashtag}>#서핑패키지</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
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
