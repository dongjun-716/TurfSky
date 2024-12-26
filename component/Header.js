import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <StatusBar style="black" />
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <FontAwesome5 name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoname}>
        <Image source={require("../assets/logoname.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 6
  },
  bar: {
    flex: 1,
    marginLeft: "6%"
  },
  logoname: {
    flex: 2,
  },
})