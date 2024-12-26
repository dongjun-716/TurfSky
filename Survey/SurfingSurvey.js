import { StatusBar } from 'expo-status-bar';
import React, { useState, Suspense } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../component/Header';
import Menubar from '../component/Menubar';


export default function SurfingSurvey() {
  
  const [survey, setSurvey] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
  });

  const navigation = useNavigation();

  const calculateTotalScore = () => {
    return survey.q1 + survey.q2 + survey.q3 + survey.q4 + survey.q5 + survey.q6 + survey.q7 + survey.q8 + survey.q9 + survey.q10;
  };

  const handleRatingPress = (question, rating) => {
    setSurvey({ ...survey, [question]: rating });
  };

  const handleSurveySubmit = () => {
    const totalScore = calculateTotalScore();
    navigation.navigate('Result', { totalScore });
  };

  const questions = [
    '서핑을 몇년째 타고 있는지 년수 별로 체크해주시고, 5년 이상은 5번을 체크해주세요',
    '서핑을 탈 때 5번중 넘어지는 횟수는?',
    '서핑에 대한 관심을 어떻게 평가하십니까?',
    '파도타기를 얼마나 해보셨나요?',
    '왼쪽이나 오른쪽으로 꺠지는 파도를 구분할 수 있는 정도는?',
    '서핑 장비는 어느정도 가지고 계신가요?',
    '서핑 장비 및 기술에 대한 자신감을 어떻게 느끼십니까?',
    '파도 선택 및 위치선정을 얼마나 하실 수 있나요?',
    '안전사고에 대한 대처할 정보를 숙지하고 있나요?',
    '어느정도의 위험도에 따라 중단하거나 안전을 위한 조치를 취하나요?'
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="black" />
      <Header style={{ flex: 0.7 }} />
      <View style={styles.main}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>서핑 레벨 설문</Text>
            {questions.map((question, index) => (
              <View style={styles.question} key={index}>
                <View style={styles.questionBox}>
                  <Text style={styles.questionText}>{`질문 ${index + 1}:`}</Text>
                  <Text style={styles.questionText}>{question}</Text>
                </View>
                <View style={styles.rating}>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <TouchableOpacity
                      key={rating}
                      style={[
                        styles.ratingButton,
                        survey[`q${index + 1}`] === rating ? styles.selectedRating : null,
                      ]}
                      onPress={() => handleRatingPress(`q${index + 1}`, rating)}
                    >
                      <Text>{rating}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
            <View style={styles.submitButtonContainer}>
            <Text style={styles.totalScore}>현재 총 점수: {calculateTotalScore()}</Text>
            <TouchableOpacity style={styles.submitButton} onPress={handleSurveySubmit}>
              <Text style={styles.submitText}>제출</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </LinearGradient>
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
    marginRight: 20
  },
  mainname: {
    flex: 1,
    fontSize: 40,
    fontWeight: "600",
    paddingLeft: "2%",
    paddingTop: "5%"
  },
  scrollContent: {
    flexGrow: 1, // 스크롤 가능하도록 함
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  question: {
    marginBottom: 20,
  },
  questionBox: {
    backgroundColor: '#C7F8FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  questionText: {
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
  },
  ratingButton: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  selectedRating: {
    backgroundColor: '#FCCFEE',
  },
  totalScore: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#DF7FC2',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    width: 200,
  },
  submitText: {
    color: 'black',
    fontSize: 18,
  },
})
