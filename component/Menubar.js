import { StyleSheet, Text, View, } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Foundation } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Menubar() {

  const navigation = useNavigation();
  return (
    <View style={styles.stickBar}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('RentShop')}>
          <MaterialCommunityIcons name="waves" size={26} color="#4D4D4D" style={styles.store} />
          <Text style={styles.iconText}>랜탈샵</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon} >
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <MaterialCommunityIcons name="shopping-outline" size={26} color="#4D4D4D" style={styles.shop} />
          <Text style={styles.iconText}>마 켓</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="alpha-t-circle-outline" size={60} color="#454545" style={styles.change} />
          <Text style={styles.iconText}>  </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Foundation name="clipboard-pencil" size={26} color="#4D4D4D" style={styles.comm} />
          <Text style={styles.iconText}>게시판</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <Ionicons name="ios-partly-sunny-outline" size={26} color="#4D4D4D" style={styles.weather} />
          <Text style={{ ...styles.iconText, marginTop: 2 }}>날 씨</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stickBar: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },
  iconText: {
    fontSize: 13,
    marginTop: 5
  },
  store: {
    marginTop: 15,
  },
  shop: {
    marginTop: 15,
  },
  change: {
    marginTop: 4,
  },
  comm: {
    marginTop: 15,
    width: 30.3,
    paddingLeft: 4.3
  },
  weather: {
    marginTop: 12,
    height: 30,
  },
})