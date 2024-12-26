import 'react-native-gesture-handler'; // 반드시 추가
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SurfingSurvey from './Survey/SurfingSurvey';
import SurveyResult from './Survey/SurveyResult';
import { RefreshControlBase } from 'react-native';
import element from './level/element';
import Low from './level/Low';
import high from './level/high';
import ReviewScreen from './Comunity/ReviewScreen';
import Home from './Home/Home';
import Weather from './Weather/Weather';
import Map from './Weather/Map';
import Post from './Comunity/Post';
import Input from './Comunity/Input';
import EditPost from './Comunity/EditPost';
import RentShop from './RentShop/RentShop';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Shop from './Shop/Shop';
import Best from './Shop/Best';
import Wishlist from './Shop/WishList';
// 나머지 import 문들...

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Survey" component={SurfingSurvey} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={SurveyResult} options={{ headerShown: false }} />
        <Stack.Screen name="element" component={element} options={{ headerShown: false }}/>
        <Stack.Screen name="Low" component={Low} options={{ headerShown: false }} />
        <Stack.Screen name="high" component={high} options={{ headerShown: false }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }}/>
        <Stack.Screen name="Map" component={Map} options={{ headerShown: false }}/>
        <Stack.Screen name="Input" component={Input} options={{ headerShown: false}}/>
        <Stack.Screen name="EditPost" component={EditPost} options={{ headerShown: false}}/>
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
        <Stack.Screen name="RentShop" component={RentShop} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}}/>
        <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false}}/>
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false}}/>
        <Stack.Screen name="Best" component={Best} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}