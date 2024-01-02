import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useRef} from 'react';
import CameraBackArrow from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/EvilIcons';
import Bag from 'react-native-vector-icons/Ionicons';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {useSelector} from 'react-redux';

export default function Profile({navigation}) {
  const data = useSelector(value => {
    return value;
  });

  return (
    <View style={styles.container}>
      <View style={styles.hedder}>
        <View>
          <CameraBackArrow
            name="arrowleft"
            style={{fontSize: 25, color: '#000'}}
          />
        </View>
        <View>
          <Text style={{fontSize: 20, color: '#000', fontWeight: '700'}}>
            Profile
          </Text>
        </View>
        <View>
          <Bag
            style={{fontSize: 25, color: '#000'}}
            name="bag-handle-outline"
          />
        </View>
      </View>
      <View style={styles.profile_section}>
        <Image
          source={{uri: `file://${data.image}`}}
          style={styles.profile_image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          style={styles.camera_icone_parent}>
          <Location style={styles.camer_icone} name="camera" />
        </TouchableOpacity>
      </View>
      <View style={styles.content_section}>
        <Text style={styles.hedding}>User Information</Text>
        <View style={styles.first_row_form}>
          <View style={styles.input_left}>
            <Text style={styles.first_row_form_label}>First Name</Text>
            <TextInput style={styles.input_container} />
          </View>
          <View style={styles.input_right}>
            <Text style={styles.first_row_form_label}>Last Name</Text>
            <TextInput style={styles.input_container} />
          </View>
        </View>
        <Text style={styles.first_row_form_label}>Email</Text>
        <TextInput style={styles.input_fullwidth_container} />
        <View style={styles.terd_row_form}>
          <View style={styles.input_left}>
            <Text style={styles.first_row_form_label}>First Name</Text>
            <TextInput style={styles.input_container} />
          </View>
          <View style={styles.input_right}>
            <Text style={styles.first_row_form_label}>Last Name</Text>
            <TextInput style={styles.input_container} />
          </View>
        </View>
        <View style={styles.address_hedding}>
          <Text style={styles.address_hedding_left}>Address</Text>
          <Text style={styles.address_hedding_right}>Add more</Text>
        </View>
        <View style={styles.address_section}>
          <View style={styles.address_left}>
            <Location style={styles.location} name="location" />
          </View>
          <View style={styles.address_right}>
            <Text style={styles.address_main}>
              370 lexington avenue suite 1414
            </Text>
            <Text style={styles.address_discriptions}>
              370 lexington avenue suite 1414 New Year
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.save_button}>
          <Text style={styles.button_text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  hedder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: 30,
  },
  profile_section: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  camera_icone_parent: {
    backgroundColor: 'green',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'relative',
    top: -30,
    right: -30,
  },
  camer_icone: {
    color: '#fff',
    fontSize: 30,
  },
  content_section: {},
  hedding: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '600',
  },
  first_row_form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  first_row_form_label: {
    color: 'grey',
    fontSize: 16,
  },
  input_right: {
    width: '45%',
  },
  input_left: {
    width: '45%',
  },
  input_container: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingBottom: 0,
  },
  input_fullwidth_container: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingBottom: 0,
    marginBottom: 20,
  },
  terd_row_form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address_hedding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  address_hedding_left: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '500',
  },
  address_hedding_right: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
  address_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    paddingBottom: 10,
  },
  address_left: {},
  address_right: {},
  address_main: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  address_discriptions: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },

  location: {
    color: '#000',
    fontSize: 40,
  },
  save_button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
