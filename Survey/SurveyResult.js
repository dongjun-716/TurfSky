import { StatusBar } from 'expo-status-bar';
import React, { useState, Suspense } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Header from '../component/Header';
import Menubar from '../component/Menubar';


export default function SurveyResult({ route, navigation }) {
  const totalScore = route.params.totalScore;

  let userLevel = '';
  let recommendedEquipment = '';

  if (totalScore >= 35) {
    userLevel = '고급';
    recommendedEquipment = '고급자를 위한 보드와 장비를 추천합니다.';
  } else if (totalScore >= 20) {
    userLevel = '중급';
    recommendedEquipment = '중급자를 위한 보드와 장비를 추천합니다.';
  } else {
    userLevel = '초급';
    recommendedEquipment = '초급자를 위한 보드와 장비를 추천합니다.';
  }

  const handleRecommendation = () => {
    if (userLevel === '초급') {
      // 초급 서퍼용 추천 페이지로 이동
      navigation.navigate('element');
    } else if (userLevel === '중급') {
      // 중급 서퍼용 추천 페이지로 이동
      navigation.navigate('Low');
    } else if (userLevel === '고급') {
      // 고급 서퍼용 추천 페이지로 이동
      navigation.navigate('high');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.main}>
        <ImageBackground source={require('../assets/Surf.png')} style={styles.image}>
          <View style={styles.contentContainer}>
            <Text style={styles.resultText}>당신은 {userLevel} 서퍼입니다.</Text>
            <Text style={styles.recommendedText}>{recommendedEquipment}</Text>
          </View>
          <TouchableOpacity style={styles.recommendButton} onPress={handleRecommendation}>
            <Text style={styles.recommendText}>장비 추천 보기</Text>
          </TouchableOpacity>
        </ImageBackground>
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
  },
  mainname: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    paddingLeft: "2%",
    paddingTop: "5%"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: "100%",
    height: "70%",
    opacity: 0.7,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end', // 텍스트를 아래로 내립니다.
    alignItems: 'center',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  recommendedText: {
    fontSize: 18,
  },
  recommendButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 60,
  },
  recommendText: {
    color: 'white',
    fontSize: 18,
  },
})
