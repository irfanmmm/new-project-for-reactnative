import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const windowWidth = Dimensions.get('window').width;

export default function Login({
  navigation,
  route: {
    params: {type},
  },
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signupTrigger, setsignupTrigger] = useState(false);

  const [error, setError] = useState('');

  const handleNaviget = () => {
    if (type === 'Sign Up') {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        navigation.navigate('DraWnavigator');
      } else {
        setError('Please Fill The Columns');
      }
    } else {
      if (email.length > 0 && password.length > 0) {
        navigation.navigate('BottomTabNavigator');
      } else {
        setError('Please Fill The Columns');
      }
    }
  };

  console.log('====================================');
  console.log(error);
  console.log('====================================');

  return (
    <SafeAreaView
      style={styles.container}
      onStartShouldSetResponder={e => Keyboard.dismiss()}>
      <View style={styles.thumnail_image}>
        <Image
          style={styles.image}
          source={require('../../assets/images/thumbnail.png')}
        />
      </View>
      <Text style={styles.hedding}>Login</Text>
      <KeyboardAwareScrollView style={styles.scroll_form}>
        {type === 'Sign Up' && (
          <View style={styles.forms}>
            <Text style={styles.form_hedding}>Name</Text>
            <TextInput
              onChangeText={e => {
                setName(e), setError('');
              }}
              style={styles.form}
              keyboardType="text"
              value={name}
            />
          </View>
        )}
        <View style={styles.forms}>
          <Text style={styles.form_hedding}>Email</Text>
          <TextInput
            onChangeText={e => {
              setEmail(e), setError('');
            }}
            style={styles.form}
            keyboardType="text"
            value={email}
          />
        </View>
        <View style={styles.forms}>
          <Text style={styles.form_hedding}>Password</Text>
          <TextInput
            secureTextEntry
            onChangeText={e => {
              setPassword(e), setError('');
            }}
            style={styles.form}
            keyboardType="text"
            value={password}
          />
          <Text style={styles.forgot_password}>Fogot password</Text>
        </View>
        {error.length > 0 && <Text style={styles.error_message}>{error}</Text>}
        <TouchableOpacity
          style={styles.sigunp_button}
          activeOpacity={0.8}
          onPress={() => handleNaviget()}>
          <Text style={styles.signup_text}>{type}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  thumnail_image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  hedding: {
    fontSize: 40,
    lineHeight: 40 * 1.2,
    fontWeight: '900',
    color: '#000',
  },
  scroll_form: {
    width: windowWidth,

    paddingHorizontal: 20,
  },
  forms: {
    marginTop: 20,
    width: '100%',
  },
  form_hedding: {},
  form: {
    marginTop: 5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 20,
  },
  forgot_password: {
    marginTop: 10,
    textAlign: 'right',
  },
  error_message: {
    color: 'red',
    fontSize: 16,
    position: 'relative',
    top: -20,
  },
  sigunp_button: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
  },
  signup_text: {
    fontWeight: '800',
    color: '#fff',
  },
});
