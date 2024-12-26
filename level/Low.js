import { StatusBar } from 'expo-status-bar';
import React, { useState, Suspense } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Header from '../component/Header';
import Menubar from '../component/Menubar';


export default function Low({ navigation }) {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const recommendedItems = [
    {
      id: 1,
      name: '중급에서 고수로',
      description: '위험하지 않은 파도를 고르는 꿀팁',
      price: ' ',
      link: 'https://post.naver.com/viewer/postView.naver?volumeNo=21081534&memberNo=24656565',
    },
    {
      id: 2,
      name: '수트',
      description: '날씨에 따라 다른 서핑 슈트',
      price: '600,000',
      link: 'https://hjwake.co.kr/category/%EC%9B%BB%EC%8A%88%ED%8A%B8/287/',
    },
    {
      id: 3,
      name: '서핑 왁스',
      description: '서핑 보드에 바르는 왁스',
      price: '20,000',
      link: 'https://minossurf.com/category/%EC%99%81%EC%8A%A4/143/',
    },
    {
      id: 4,
      name: '썬크림',
      description: '서핑 시작 전 필수 아이템',
      price: '20,000',
      link: 'https://example.com/surf-suncream',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.main}>
        <StatusBar style="black" />
        <View style={styles.mainTitle}>
          <Text style={styles.title}>서핑 아이템</Text>
          <ScrollView>
            {recommendedItems.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => openLink(item.link)}
                >
                  <Text style={styles.linkText}>사이트 및 제품 보기</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              style={styles.reviewButton}
              onPress={() => navigation.navigate('Review')}
            >
              <Text style={styles.reviewText}>리뷰 작성하기</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    marginLeft: 20,
    marginRight:20
  },
  mainTitle:{
    marginTop: 20,
  },
  mainname: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    paddingLeft: "2%",
    paddingTop: "5%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
  linkButton: {
    backgroundColor: '#FF91FD',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
  },
  reviewButton: {
    backgroundColor: '#3399FF', // 버튼 배경색
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  reviewText: {
    color: 'white',
    fontSize: 16,
  }
})
