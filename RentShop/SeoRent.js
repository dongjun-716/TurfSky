import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function SeoRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FC89B4"}} onPress={() => Linking.openURL('https://www.instagram.com/mlpsurf/')}>
          <View>
            <Text style={styles.rentTitle}>M  L  P 서 프</Text>
            <Image source={require("../assets/mlp.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 14}}>충남 태안군 소원면 만리포2길 172  </Text>
            <Text style={styles.tel}>0507-1305-5199</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#만리포서핑</Text>
              <Text style={styles.hashtag}>#만리포서핑스쿨</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#태안서핑</Text>
              <Text style={styles.hashtag}>#서해서핑</Text>
              <Text style={styles.hashtag}>#만리포서프샵</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/arsurf_manlipo')}>
          <View>
            <Text style={styles.rentTitle}> A  R  서  프</Text>
            <Image source={require("../assets/arsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>충남 태안군 소원면 만리포1길 108-16  </Text>
            <Text style={styles.tel}>010-9667-0132</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#만리포서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#만리포서핑샵</Text>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#서해서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#F80120"}} onPress={() => Linking.openURL('http://www.wavemake.co.kr')}>
          <View>
            <Text style={styles.rentTitle}>웨이브메이크</Text>
            <Image source={require("../assets/wavemake.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>경기 고양시 일산동구 무궁화로 20-38  </Text>
            <Text style={styles.tel}>1670-9415</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#인공서핑</Text>
              <Text style={styles.hashtag}>#서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑머신</Text>
              <Text style={styles.hashtag}>#인공파도</Text>
              <Text style={styles.hashtag}>#실내서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#CCCDDF"}} onPress={() => Linking.openURL('https://www.instagram.com/surferland_hengnam/')}>
          <View>
            <Text style={styles.rentTitle}>서  퍼  랜  드</Text>
            <Image source={require("../assets/surfland.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>경남 거제시 장목면 흥남길 37</Text>
            <Text style={styles.tel}>0507-1302-7128</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑</Text>
              <Text style={styles.hashtag}>#거제레포츠</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#거제여행</Text>
              <Text style={styles.hashtag}>#거제액티비티</Text>
              <Text style={styles.hashtag}>#거제서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}}>
          <View>
            <Text style={styles.rentTitle}>말 라 끼 서 프</Text>
            <Image source={require("../assets/malakki.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 16}}>경남 남해군 미조면 미송로 483   </Text>
            <Text style={styles.tel}>010-4556-0023</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#남해서핑</Text>
              <Text style={styles.hashtag}>#남해레포츠</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#남해여행</Text>
              <Text style={styles.hashtag}>#남해액티비티</Text>
              <Text style={styles.hashtag}>#남해체험</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#00656F"}} onPress={() => Linking.openURL('https://www.instagram.com/surfing.koos/')}>
          <View>
            <Text style={styles.rentTitle}>서  핑  쿠  스</Text>
            <Image source={require("../assets/surfingkoos.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15}}>전남 고흥군 영남면 해맞이로 684-7</Text>
            <Text style={styles.tel}>0507-1351-2174</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#고흥서핑</Text>
              <Text style={styles.hashtag}>#여수서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#전남서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#서핑캠프</Text>
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
