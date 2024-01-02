import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BackButton from 'react-native-vector-icons/AntDesign';
import Bag from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SingleProduct({navigation}) {
  const sizes = [9, 9.5, 10, 10.5, 11];

  const colors = ['red', 'green', 'yellow', 'blue'];

  const data = useSelector(value => {
    return value;
  });

  const {value} = data;

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={styles.top_section}>
        <View style={styles.top_left}>
          <BackButton name="arrowleft" style={styles.icons} />
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#020024', '#090979']}
          style={styles.top_middle}>
          <View style={styles.top_middle_content}>
            <Image
              source={require('../../assets/images/shue.png')}
              style={styles.shue_image}
            />
          </View>
        </LinearGradient>
        <View style={styles.top_right}>
          <Bag name="bag-handle-outline" style={styles.icons} />
        </View>
      </View>
      <View style={styles.sizes_left_section}>
        <Text style={styles.size_hedding}>Size</Text>
        <View style={styles.size_parent}>
          {sizes.map(size => (
            <View style={styles.size_container}>
              <Text style={styles.size_text}>{size}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.color_right_section}>
        <Text style={styles.color_hedding}>Color</Text>
        <View style={styles.color_parent}>
          {colors.map(item => (
            <View style={styles.color_container}>
              <View
                style={[styles.inner_color, {backgroundColor: item}]}></View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.Bottom_name_price}>
        <Text style={styles.name_price}>{value.name}</Text>
        <Text style={styles.catogory}>{value.name}</Text>
        <Text style={styles.name_price}>${value.price}</Text>
      </View>
      <TouchableOpacity
        style={[styles.shop_addtocart, {borderWidth: 0}]}
        activeOpacity={0.8}>
        <Text style={styles.button_text}>Shop Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.shop_addtocart, {backgroundColor: '#fff'}]}>
        <Text style={[styles.button_text, {color: 'blue'}]}>
          Add to catogory
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  top_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top_left: {
    marginTop: 30,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    fontSize: 30,
    color: '#000',
  },
  top_middle: {
    width: '54%',
    height: windowHeight - 200,
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    zIndex: 5,
  },
  top_middle_content: {
    position: 'relative',
    top: 200,
    zIndex: 2,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shue_image: {
    width: 350,
    height: 310,
  },
  hedding: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
  },
  top_right: {
    marginTop: 30,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizes_left_section: {
    position: 'absolute',
    top: 150,
    left: 20,
  },
  size_parent: {},
  size_hedding: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  size_container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  size_text: {
    color: 'grey',
    fontSize: 16,
  },
  color_right_section: {
    position: 'absolute',
    right: 20,
    top: windowHeight / 2,
  },
  color_hedding: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  color_parent: {},
  color_container: {
    width: 40,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  inner_color: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  Bottom_name_price: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name_price: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  catogory: {
    color: 'grey',
    fontSize: 16,
  },
  shop_addtocart: {
    height: 40,
    marginBottom: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',
  },
  button_text: {
    color: '#fff',
    fontWeight: '500',
  },
});
