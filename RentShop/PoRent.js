import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function PoRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#E3C9A7"}} onPress={() => Linking.openURL('http://www.instagram.com/wolpo_steepsurf')}>
          <View>
            <Text style={styles.rentTitle}>  스   티   프</Text>
            <Image source={require("../assets/steep.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 14}}>경북 포항시 북구 청하면 월포로 171 </Text>
            <Text style={styles.tel}>0507-1382-0480</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#포항서핑</Text>
              <Text style={styles.hashtag}>#월포서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#월포카페</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#월포서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/pohang_nunasurf/')}>
          <View>
            <Text style={styles.rentTitle}>누  나  서  프</Text>
            <Image source={require("../assets/nuna.jpg")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>강원 고성군 죽왕면 백도해변길 78</Text>
            <Text style={styles.tel}>010-2328-7901</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#대구서핑</Text>
              <Text style={styles.hashtag}>#경북서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#포항서핑</Text>
              <Text style={styles.hashtag}>#월포서핑</Text>
              <Text style={styles.hashtag}>#누나서프</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#A6CADB"}} onPress={() => Linking.openURL('https://surfbox.modoo.at/')}>
          <View>
            <Text style={styles.rentTitle}>서  프  박  스</Text>
            <Image source={require("../assets/surfbox.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>경북 포항시 북구 흥해읍 영일만항로 111 </Text>
            <Text style={styles.tel}>0507-1454-1788</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#레져</Text>
              <Text style={styles.hashtag}>#윈드서핑</Text>
              <Text style={styles.hashtag}>#무제한서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#E1DCD8"}} onPress={() => Linking.openURL('https://www.instagram.com/surf__mate')}>
          <View>
            <Text style={styles.rentTitle}>서 프 메 이 트</Text>
            <Image source={require("../assets/surfmate.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>경북 포항시 북구 양덕남로 151</Text>
            <Text style={styles.tel}>0507-1416-7029</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#포항서핑</Text>
              <Text style={styles.hashtag}>#포항서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#숏보드강습</Text>
              <Text style={styles.hashtag}>#서핑입문</Text>
              <Text style={styles.hashtag}>#경주서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('http://www.instagram.com/surflounge_kr')}>
          <View>
            <Text style={styles.rentTitle}>서 프 라 운 지</Text>
            <Image source={require("../assets/surflounge.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>울산 울주군 서생면 진하해변길 40 </Text>
            <Text style={styles.tel}>010-8495-8978</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#울산서핑</Text>
              <Text style={styles.hashtag}>#진하해수욕장서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#진하서핑</Text>
              <Text style={styles.hashtag}>#햄버거</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#5F5852"}} onPress={() => Linking.openURL('https://www.instagram.com/surfholic_ulsan/')}>
          <View>
            <Text style={styles.rentTitle}>파 티 웨 이 브</Text>
            <Image source={require("../assets/partywave.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>울산 울주군 서생면 진하해변길 40 </Text>
            <Text style={styles.tel}>0507-1395-1504</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#울산서핑</Text>
              <Text style={styles.hashtag}>#진하서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#송정서핑</Text>
              <Text style={styles.hashtag}>#부산서핑</Text>
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
