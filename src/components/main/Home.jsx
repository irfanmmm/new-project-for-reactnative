import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from 'react-native-vector-icons/SimpleLineIcons';
import Bag from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Product from '../product/Product';
import {useDispatch, useSelector} from 'react-redux';
import LeftMenu from './LeftMenu';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

export default function Home() {
  const navigation = useNavigation();
  const Despatch = useDispatch();
  const [middle, setMiddle] = useState(0);
  const [items, setItems] = useState();

  const [press, setPress] = useState(false);

  const data = useSelector(item => item.product);
  // setItems(data);

  const catogory = [
    {
      catogory: 'All',
      id: 1,
    },
    {
      catogory: 'For Men',
      id: 2,
    },
    {
      catogory: 'For Woman',
      id: 3,
    },
    {
      catogory: 'For Men',
      id: 4,
    },
    {
      catogory: 'For Woman',
      id: 5,
    },
  ];

  // Despatch({
  //   type: 'items',
  //   payload: PRODUCT,
  // });

  return (
    <View style={styles.contaner}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
        hidden={false}
      />
      <View
        style={styles.top_section}
        onLayout={e => {
          const {x, y, width, height} = e.nativeEvent.layout;

          setMiddle(height);
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu name="menu" style={styles.icons} />
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#020024', '#090979']}
          style={styles.top_middle}>
          <View style={styles.top_middle_content}>
            <Text style={styles.hedding}>{'Trending \n items'}</Text>

            <Text style={[styles.hedding, {color: '#090979'}]}>
              Coll<Text style={styles.hedding}>ections For</Text>You
            </Text>

            <Image
              source={require('../../assets/images/shue.png')}
              style={styles.shue_image}
            />
          </View>
        </LinearGradient>
        <Bag name="bag-handle-outline" style={styles.icons} />
      </View>
      <ScrollView
        horizontal
        style={styles.horizontel_scroll}
        showsHorizontalScrollIndicator={false}>
        {catogory.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setPress(item.id === press ? null : item.id)}
            style={[
              styles.catogory_container,
              item.id !== press && {
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: 'blue',
              },
            ]}
            activeOpacity={0.8}>
            <Text
              style={[
                styles.catogory_text,
                item.id !== press && {
                  color: 'blue',
                },
              ]}>
              {item.catogory}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.content_hedding_sction}>
        <Text style={styles.main_hedding}>Most Popular</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.view_all_text}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        columnWrapperStyle={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 50}}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <Product
            value={item}
            onPress={() => {
              Despatch({
                type: 'data',
                payload: item,
              });
              navigation.navigate('SingleProduct');
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  top_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top_middle: {
    width: '54%',
    height: 300,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  top_middle_content: {
    position: 'absolute',
    top: 20,
    zIndex: 2,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hedding: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
  },
  shue_image: {
    width: 170,
    height: 150,
  },
  icons: {
    fontSize: 30,
    color: '#000',
  },
  horizontel_scroll: {
    marginTop: 40,
    height: 100,
  },
  catogory_container: {
    backgroundColor: '#090979',
    paddingHorizontal: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
  },
  catogory_text: {
    color: '#fff',
    fontSize: 20,
  },
  content_hedding_sction: {
    position: 'relative',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -30,
    width: '100%',
  },
  main_hedding: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
  },

  view_all_text: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '500',
  },
});
