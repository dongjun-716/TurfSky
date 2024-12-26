import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function JeRent({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/root_surf')}>
          <View>
            <Text style={styles.rentTitle}>루  트  서  프</Text>
            <Image source={require("../assets/rootsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15.5}}>제주 제주시 한림읍 한림로 329-8</Text>
            <Text style={styles.tel}>0507-1469-8226</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#협재서핑</Text>
              <Text style={styles.hashtag}>#협재해수욕장서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주서핑</Text>
              <Text style={styles.hashtag}>#어린이서핑</Text>
              <Text style={styles.hashtag}>#패들보드</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{...styles.rentMenu, backgroundColor:"#8B6036"}} onPress={() => Linking.openURL('https://instagram.com/vigorsurf')}>
          <View>
            <Text style={styles.rentTitle}>  비   고   르</Text>
            <Image source={require("../assets/vigor.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 15}}>제주 서귀포시 안덕면 형제해안로 70</Text>
            <Text style={styles.tel}>0507-1446-4801</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#제주서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#서핑강습</Text>
              <Text style={styles.hashtag}>#서핑스쿨</Text>
              <Text style={styles.hashtag}>#서핑입문</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/kimsurf_jeju/')}>
          <View>
            <Text style={styles.rentTitle}>김 서 프 제 주</Text>
            <Image source={require("../assets/kimsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>제주 서귀포시 중문관광로 97</Text>
            <Text style={styles.tel}>0507-1309-6353</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#제주도서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#중문서핑</Text>
              <Text style={styles.hashtag}>#액티비티</Text>
              <Text style={styles.hashtag}>#서핑스쿨</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#FFFFFF"}} onPress={() => Linking.openURL('https://www.instagram.com/akiasurf/')}>
          <View>
            <Text style={styles.rentTitle}>아 키 아 서 프</Text>
            <Image source={require("../assets/aka.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 11}}>제주 서귀포시 표선면 일주동로5661번길 37</Text>
            <Text style={styles.tel}>0507-1407-1869</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#제주도서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주서핑</Text>
              <Text style={styles.hashtag}>#표선서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#343334"}} onPress={() => Linking.openURL('https://www.instagram.com/onnonsurf/')}>
          <View>
            <Text style={styles.rentTitle}>온 앤 온 서 프</Text>
            <Image source={require("../assets/on.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 14}}>제주 서귀포시 성산읍 고성리 186-1</Text>
            <Text style={styles.tel}>0507-1314-2804</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#제주도서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#액티비티</Text>
              <Text style={styles.hashtag}>#성산서핑</Text>
              <Text style={styles.hashtag}>#제주서핑</Text>
            </View>
          </View>
        </TouchableOpacity><TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#D69D14"}} onPress={() => Linking.openURL('https://www.instagram.com/carrotsurf/')}>
          <View>
            <Text style={styles.rentTitle}>캐  럿  서  프</Text>
            <Image source={require("../assets/carrot.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>제주 제주시 구좌읍 해맞이해안로 480-1</Text>
            <Text style={styles.tel}>0507-1322-3838</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#월정리서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주서핑</Text>
              <Text style={styles.hashtag}>#캐럿서프</Text>
              <Text style={styles.hashtag}>#서핑</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#0047AB"}} onPress={() => Linking.openURL('https://www.instagram.com/surfpoint__hado/')}>
          <View>
            <Text style={styles.rentTitle}>서 프 포 인 트</Text>
            <Image source={require("../assets/surfpoint.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 13}}>제주 제주시 구좌읍 해맞이해안로 1950</Text>
            <Text style={styles.tel}>0507-1436-1082</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#어린이서핑</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주서핑</Text>
              <Text style={styles.hashtag}>#성산서핑</Text>
              <Text style={styles.hashtag}>#서핑강습</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.rentMenu, backgroundColor:"#584E4F"}} onPress={() => Linking.openURL('https://www.instagram.com/bumsurf/')}>
          <View>
            <Text style={styles.rentTitle}>  범   서   프</Text>
            <Image source={require("../assets/bumsurf.png")} style={styles.rentImg}></Image>
          </View>
          <View style={styles.detail}>
            <Text style={{...styles.address, fontSize: 18}}>제주 제주시 선사로8길 11      </Text>
            <Text style={styles.tel}>0507-1422-2281</Text>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주도서핑</Text>
              <Text style={styles.hashtag}>#제주도서핑강습</Text>
            </View>
            <View style={styles.hashView}>
              <Text style={styles.hashtag}>#제주패들보드</Text>
              <Text style={styles.hashtag}>#서핑체험</Text>
              <Text style={styles.hashtag}>#서핑샵</Text>
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
