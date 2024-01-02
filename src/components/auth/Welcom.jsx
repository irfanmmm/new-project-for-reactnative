import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import GoogleIcone from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default function Welcom({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumbnail}>
        <Image
          source={require('../../assets/images/thumbnail.png')}
          style={styles.image_icone}
        />
      </View>
      <View>
        <Text style={styles.hedding}>Hello</Text>
      </View>
      <View style={styles.discription_section}>
        <Text style={styles.discriptions}>
          Welcome To Little Drop, where you manage you daily tasks
        </Text>
      </View>
      <View style={styles.login_signupbuttons}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() =>
            navigation.navigate('Login', {
              type: 'Login',
            })
          }>
          <Text style={styles.button_text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttons,
            {backgroundColor: '#fff', borderColor: 'blue', borderWidth: 2},
          ]}
          onPress={() =>
            navigation.navigate('Login', {
              type: 'Sign Up',
            })
          }>
          <Text style={[styles.button_text, {color: 'blue'}]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.bottom_text}>Sign up using</Text>
        <View style={styles.bottom_icons}>
          <Text style={styles.icones}>
            <Icon
              color="blue"
              name="facebook-with-circle"
              style={styles.bottom_icone}
            />
          </Text>
          <Text style={styles.icones}>
            <GoogleIcone
              name="google-plus-circle"
              color="red"
              style={styles.bottom_icone}
            />
          </Text>
          <Text style={[styles.icones, {marginRight: 0}]}>
            <Icon
              color="blue"
              name="linkedin-with-circle"
              style={styles.bottom_icone}
            />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_icone: {
    width: '100%',
    height: '100%',
  },
  hedding: {
    color: '#000',
    fontSize: 30,
    fontWeight: '800',
  },
  discription_section: {
    width: '75%',
  },
  discriptions: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 18,
    fontWeight: '600',
  },
  login_signupbuttons: {
    width: '75%',
  },
  buttons: {
    backgroundColor: 'blue',
    height: 50,
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button_text: {
    color: '#fff',
  },
  bottom_text: {
    color: 'grey',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  bottom_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottom_icone: {
    fontSize: 40,
  },
  icones: {
    marginRight: 20,
  },
});
