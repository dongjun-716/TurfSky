import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList,ScrollView,TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Menubar from '../component/Menubar';
import Header from '../component/Header';
import { get, ref, push, set } from 'firebase/database';
import { db } from '../Comunity/Config'; // Firebase 구성 파일을 임포트합니다.

function Input({navigation}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [writer, setwriter] = useState('');
  const [no, setno] = useState('');
  const [posts, setPosts] = useState([]);

  // 게시물 추가
  const dataAddOn = () =>{
    set(ref(db,'posts/'+title),{
        title:title,
        body:body,
        writer:writer,
    });
    setTitle('')
    setBody('')
    setwriter('');
}

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.main}>
        <View style={styles.titleView}>
          <Text style={styles.title}>제목</Text>
          <TextInput style={styles.titleInput} 
            placeholder='제목을 입력하세요.' 
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.userView}>
          <Text style={styles.texts}>작성자</Text>
          <TextInput style={styles.titleInput} 
            placeholder='닉네임을 입력해주세요.' 
            value={writer}
            onChangeText={(text) => setwriter(text)}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>내용</Text>
          <TextInput multiline ={true} style={styles.textInput} 
            placeholder='내용을 입력하세요.' 
            value={body}
            onChangeText={(text) => setBody(text)}
          />
        </View>
        <View style={styles.itemView}>
          <Text style={styles.item}>첨부파일</Text>
          <Ionicons name="images" size={50} color="black" style={{ marginRight: 20 }} />
        </View>
        <View>
          <TouchableOpacity  onPress={() => navigation.navigate('Post')}>
            <View style={styles.complete}>
              <View style={{ flexDirection: "row", borderWidth: 2, borderRadius: 4 }}>
                <AntDesign name="upload" size={20} color="black" style={{ marginTop: 3, marginLeft: 3 }} />
                <Text style={styles.completeText} onPress={dataAddOn}>올리기</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 8,
    backgroundColor: "white",
    paddingLeft: 20, paddingRight: 20
  },
  titleView: {
    marginTop: 30,
    flexDirection: "row",
    borderTopWidth: 3,
    paddingTop: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 60
  },
  titleInput: {
    width: "70%",
    height: 30,
    borderWidth: 1,

    paddingLeft: 10
  },
  userView:{
    marginTop: 15,
    flexDirection: "row",
  },
  textView: {
    marginTop: 15,
    flexDirection: "row",
    height: "50%"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 60
  },
  texts:{
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 46
  },
  textInput: {
    width: "70%",
    height: "100%",
    borderWidth: 1,
    paddingLeft: 10,
    flexShrink:1
  },
  itemView: {
    marginTop: 15,
    flexDirection: "row",
    borderBottomWidth: 3,
    paddingBottom: 30
  },
  item: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 30
  },
  complete: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 15
  },
  completeText: {
    textAlign: "center",
    width: 50, height: 25,
    paddingTop: 5
  }
})