import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Navigate } from 'react-router-dom';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 기본적인 유효성 검사
    if (!email.trim() || !password.trim()) {
      Alert.alert('유효성 검사 오류', '이메일과 비밀번호를 모두 입력하세요.');
      return;
    }

    // 필요한 경우 추가적인 유효성 검사 로직을 여기에 추가(예: 이메일 형식 확인)

    // 로그인 로직을 계속 진행 (Firebase, 서버 API 호출 등).
  };

  return (
    <LinearGradient
      colors={['#045FB4', '#81DAF5', '#ECF6CE']}
      style={styles.container}
    >
      <KeyboardAvoidingView       // 키보드가 입력창 가리지 않도록 함
        behavior="padding"
        style={styles.container}
        enabled
      >

        {/*스크롤*/}
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.content}>
              <Text style={styles.Text}>Surfing & Ski Platform</Text>
              <Text style={styles.title} onPress={() => navigation.navigate('Shop')}>
                TURFSKY
              </Text>

              {/* 입력창 그룹 */}
              <View style={styles.inputBox}>

                {/* 이메일 입력칸 */}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="이메일"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>

                {/* 비밀번호 입력칸 */}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="비밀번호"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholderTextColor="rgba(0, 0, 0, 0.44)"
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.7}>
                <Text style={styles.buttontext}>로그인</Text>
              </TouchableOpacity>

              <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
                계정이 없으신가요? 회원 가입하기
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {              // 스크롤기능
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 44,
    color: 'white',
    textShadowColor: '#F2F2F2',
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowOffset: { width: -2, height: -2 },
  },
  Text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 15,
    paddingTop: 35,
    paddingBottom: 20,
    borderRadius: 20,
    marginBottom: 10,
    alignContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    shadowColor: 'rgba(131, 209, 255, 0.32)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 4,
  },
  buttontext: {
    color: 'rgba(0, 0, 0, 0.44)',
    fontSize: 18,
  },
  link: {
    color: 'rgba(0, 0, 0, 0.44)',
    fontSize: 13,
  },
});