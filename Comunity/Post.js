import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { get, ref, push, set, remove } from 'firebase/database';
import { AntDesign,EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../component/Header';
import Menubar from '../component/Menubar';
import { db, storage } from '../Comunity/Config'; // Firebase 구성 파일을 임포트합니다.


function Post({navigation}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null); // 이미지 상태 추가


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    if(!result.canceled){
      setImage(result.uri);
    }
  }

  // Firebase에서 게시물 가져오기
  const loadPosts = () => {
    const dbRef = ref(db, 'posts');
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const postList = Object.values(data);

        const filteredPosts = postList.filter((post)=>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setPosts(filteredPosts);
      }
    });
  };

// 게시물 삭제하기
  const deletePost = (postId) => {
    const postRef = ref(db, `posts/${postId}`);
    remove(postRef).then(() => {
      loadPosts(); // 게시물이 삭제되면 목록을 다시 로드합니다.
    });
  };

  // 처음 렌더링 시 게시물 불러오기
  useEffect(() => {
    loadPosts();
  }, [searchTerm]);

  const toggleDetails = (index) => {
    if (selectedItemIndex === index) {
      setSelectedItemIndex(null);
    } else {
      setSelectedItemIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View>
        <View style={{ flexDirection: "row", marginLeft: "4%", marginBottom: "1%" }}>
          <Text style={styles.mainname}>게시판</Text>
        </View>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder='검색'
          value={searchTerm}
          onChangeText={(text)=> setSearchTerm(text)}
        />
        <AntDesign name="search1" size={18} color="black" />
      </View>
      <View style={styles.main}>
        <View style={styles.menu}>
          <Text style={{ ...styles.listTitle, flex: 0.5 }}>번호</Text>
          <Text style={{ ...styles.listTitle, flex: 3.6 }}>제목</Text>
          <Text style={{ ...styles.listTitle, flex: 1 }}>작성자</Text>
        </View>
        <FlatList
            data={posts}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => toggleDetails(index)}>
                <View style={styles.row}>
                  <Text style={{ ...styles.cell, flex: 0.5 }}>{item.no}</Text>
                  <Text style={{ ...styles.cell, flex: 3.5 }}>{item.title}</Text>
                  <Text style={{ ...styles.cell, flex: 1 }}>{item.writer}</Text>
                </View>
                {selectedItemIndex === index && (
                  <View style={styles.details}>
                    
                    <Text style={styles.detailsText}>{item.body}</Text>
                    <Text
                    style={styles.editbtn}
                    onPress={() =>
                      navigation.navigate('EditPost', {
                        postId: item.title,
                        title: item.title,
                        body: item.body,
                      })
                    }
                  > 수정</Text>
                    <Text style={styles.deletebtn} onPress={() => deletePost(item.title)} >삭제</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
        />
        <View>
          <TouchableOpacity onPress={loadPosts}>
            <View style={styles.write}>
              <View style={{ flexDirection: "row", borderWidth: 2, borderRadius: 4 }}>
                <AntDesign name="reload1" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Input')}>
            <View style={styles.write}>
              <View style={{ flexDirection: "row", borderWidth: 2, borderRadius: 4 }}>
                <EvilIcons name="pencil" size={24} color="black" style={{ marginLeft: 3, marginTop: 2 }} />
                <Text style={styles.writeText}>글쓰기</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
};

export default Post;

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
    paddingTop: "5%",
  },
  menu: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderTopWidth: 2,
    borderTopColor: "black",
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  cell: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  search: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 20,
  },
  input: {
    width: 100,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 5,
  },
  details: {
    padding: 10,
    backgroundColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
  },
  detailsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 100, height: 100,
  },
  write: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 20,
    marginBottom: 15
  },
  writeText: {
    textAlign: "center",
    width: 50, height: 25,
    paddingTop: 5
  },
  editbtn: {
    borderWidth: 2,
    width: 70,
    marginLeft: 240,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
    textAlign:'center'
  },
  deletebtn: {
    borderWidth: 2,
    width: 70,
    marginLeft: 240,
    marginBottom: 5,
    padding: 6,
    borderRadius: 5,
    textAlign:'center'
  }
});