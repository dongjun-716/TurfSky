import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../component/Header';
import Menubar from '../component/Menubar';
import { AntDesign } from '@expo/vector-icons';

export default function Review({ navigation }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [newReplies, setNewReplies] = useState([]);

  // 화면이 로드될 때 저장된 리뷰 불러오기
  useEffect(() => {
    loadReviews();
  }, []);

  // 초기 상태 설정 함수
  const initializeReviews = (reviews) => {
    const initializedReviews = reviews.map((review) => ({
      ...review,
      showReply: false,
      replies: [],
    }));
    const initializedNewReplies = reviews.map(() => '');
    setReviews(initializedReviews);
    setNewReplies(initializedNewReplies);
  };

  // 저장된 리뷰 불러오기
  const loadReviews = async () => {
    try {
      const savedReviews = await AsyncStorage.getItem('reviews');
      if (savedReviews !== null) {
        const parsedReviews = JSON.parse(savedReviews);
        initializeReviews(parsedReviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    }
  };

  // 리뷰를 추가하고 저장
  const addReview = async () => {
    if (newReview.trim() !== '') {
      const updatedReviews = [...reviews, { text: newReview, liked: 0, disliked: 0, replies: [] }];
      setReviews(updatedReviews);
      setNewReview('');

      try {
        await AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
      } catch (error) {
        console.error('Error saving reviews:', error);
      }
    }
  };

  // 리뷰 삭제
  const deleteReview = async (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);

    try {
      await AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } catch (error) {
      console.error('Error saving reviews after deletion:', error);
    }
  };

  // 리뷰 좋아요 또는 싫어요
  const likeReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].liked += 1;
    setReviews(updatedReviews);

    try {
      AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } catch (error) {
      console.error('Error saving reviews after liking:', error);
    }
  };

  const dislikeReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].disliked += 1;
    setReviews(updatedReviews);

    try {
      AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } catch (error) {
      console.error('Error saving reviews after disliking:', error);
    }
  };

  // 리뷰에 대한 답글 토글
  const toggleReply = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].showReply = !updatedReviews[index].showReply;
    setReviews(updatedReviews);
  };

  // 새로운 답글 입력 업데이트
  const updateNewReplies = (reviewIndex, text) => {
    const updatedNewReplies = [...newReplies];
    updatedNewReplies[reviewIndex] = text;
    setNewReplies(updatedNewReplies);
  };

  // 리뷰에 대한 답글 추가
  const addReply = (reviewIndex) => {
    if (newReplies[reviewIndex].trim() !== '') {
      const updatedReviews = [...reviews];
      updatedReviews[reviewIndex].replies.push(newReplies[reviewIndex]);
      setReviews(updatedReviews);

      try {
        AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
      } catch (error) {
        console.error('Error saving reviews after replying:', error);
      }

      // 답글 입력 초기화
      const updatedNewReplies = [...newReplies];
      updatedNewReplies[reviewIndex] = '';
      setNewReplies(updatedNewReplies);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={{ flex: 8 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            // 리뷰 선택 취소
            setSelectedReviews([]);
          }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>리뷰작성</Text>
              <Text style={styles.smallTitle}>TurfSky에 대해 한줄평을 남겨주세요!</Text>
            </View>
            <ScrollView style={styles.reviewContainer}>
              {reviews.map((review, index) => (
                <View key={index}>
                  <View style={styles.review}>
                    <Text style={styles.reviewText}>{review.text}</Text>
                    <View style={styles.actions}>
                      <TouchableOpacity style={styles.likeButton} onPress={() => likeReview(index)}>
                        <Text><AntDesign name="like2" size={20} color="black" /> {review.liked}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.replyButton} onPress={() => toggleReply(index)}>
                        <Text>댓글</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dislikeButton} onPress={() => dislikeReview(index)}>
                        <Text><AntDesign name="dislike2" size={18} color="black"/> {review.disliked}</Text>
                      </TouchableOpacity>
                    </View>
                    {review.replies.map((reply, replyIndex) => (
                      <View style={styles.reply} key={replyIndex}>
                        <Text style={styles.replyText}>{reply}</Text>
                      </View>
                    ))}
                    {review.showReply && (
                      <View style={styles.replyContainer}>
                        <TextInput
                          style={styles.replyInput}
                          placeholder="댓글 작성"
                          value={newReplies[index]}
                          onChangeText={(text) => updateNewReplies(index, text)}
                        />
                        <TouchableOpacity
                          style={styles.replyAddButton}
                          onPress={() => addReply(index)}
                        >
                          <Text style={{color: 'white'}}>추가</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>

                </View>
              ))}
            </ScrollView>

            <KeyboardAvoidingView
              behavior="padding"
              style={styles.inputContainer}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
              <TextInput
                style={styles.input}
                placeholder="리뷰 작성"
                value={newReview}
                onChangeText={(text) => setNewReview(text)}
              />
              <TouchableOpacity style={styles.addButton} onPress={addReview}>
                <Text style={styles.addButtonText}>추가</Text>
              </TouchableOpacity>
              {selectedReviews.length > 0 && (
                <TouchableOpacity style={styles.deleteButton} onPress={deleteSelectedReviews}>
                  <Text style={styles.deleteButtonText}>선택 삭제</Text>
                </TouchableOpacity>
              )}
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Menubar style={{ flex: 1.4 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20, marginLeft: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  },
  smallTitle: {

  },
  reviewContainer: {
    flex: 1,
    padding: 20,
  },
  review: {
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  reply: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
    // 추가: 그림자
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  reviewText: {
    fontSize: 16,
    color: 'black',
  },
  replyText: {
    fontSize: 16,
    color: 'black',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15, // 버튼과 리뷰 사이 간격 증가
  },

  likeButton: {
    padding: 10,
    backgroundColor: '#00FFF4', // 하늘색 계열로 변경
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center'
  },
  dislikeButton: {
    padding: 10,
    backgroundColor: '#FFAEC9', // 하늘색 계열로 변경
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center'
  },
  replyButton: {
    padding: 10,
    width: 150,
    backgroundColor: '#90FF21', // 하늘색 계열로 변경
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  replyContainer: {
    padding: 10,
    borderRadius: 8,
    // 추가: 그림자
    shadowColor: 'rgba(0, 1, 1, 0.6)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  replyInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 10,
  },
  replyAddButton: {
    marginTop: 10,
    height: 25,
    backgroundColor: '#363535', // 하늘색 계열로 변경
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#363535',
    borderTopColor: '#363535',
  },
  input: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10
  },
  addButton: {
    width: 80,
    backgroundColor: '#363535',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 2
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  deleteButtonText: {
    color: 'white',
  },
});