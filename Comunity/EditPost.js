import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList,ScrollView,TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ref, update } from 'firebase/database';
import Menubar from '../component/Menubar';
import Header from '../component/Header';
import { db } from '../Comunity/Config';

const EditPost = ({ route, navigation }) => {
  const { postId, title: initialTitle, body: initialBody } = route.params;
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  

  const handleUpdatePost = () => {
    const postRef = ref(db, `posts/${postId}`);
    update(postRef, {
      title,
      body,
    }).then(() => {
      navigation.navigate('Post'); // 수정 후 목록으로 돌아가기
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.main}>
        <View style={styles.titleView}>
          <Text style={styles.title}>제목</Text>
          <TextInput style={styles.titleInput} 
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>내용</Text>
          <TextInput multiline ={true} style={styles.textInput}  
            value={body}
            onChangeText={(text) => setBody(text)}
          />
        </View>
        <View style={styles.itemView}>
          <Text style={styles.item}>첨부파일</Text>
          <Ionicons name="images" size={50} color="black" style={{ marginRight: 20 }} />
        </View>
        <View>
            <Text style={styles.btn} onPress={handleUpdatePost}>수정하기</Text>
        </View>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>  
  );
};

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
      },
      btn: {
        borderWidth: 2,
        width: 70,
        marginLeft: 260,
        marginTop: 20,
        padding: 6,
        borderRadius: 5,
        textAlign:'center'
      }
});

export default EditPost;