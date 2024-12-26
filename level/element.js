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
      name: '초보자를 위한 강습 추천',
      description: '처음 접하시는 분들에게 추천드립니다.',
      price : '혼자가 부담스러우면 여러명도 좋아요',
      link: 'https://blog.naver.com/kkdaykr/222022681536',
    },
    {
      id: 2,
      name: '서핑 고수가 알려주는 꿀팁!',
      description: '다양한 정보가 많아요',
      price: '초보자라면 한번씩 읽어보아요!',
      link: 'https://3hoursahead.com/contents/478',
    },
    {
      id: 3,
      name: '서핑 하기 전 주의 사항',
      description: '혼자서는 위험해',
      price: '안전이 최고',
      link: 'https://surflab.co.kr/doordonot2/',
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
