import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export default function SplashScreen({navigation}) {
  const carouselRef = useRef(null);
  const [items, setItems] = useState(0);

  const carouselItems = [
    {
      img: require('../../assets/images/baground.webp'),
    },
    {
      img: require('../../assets/images/baground.webp'),
    },
    {
      img: require('../../assets/images/baground.webp'),
    },
    {
      img: require('../../assets/images/baground.webp'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={require('../../assets/images/baground.webp')}
        style={styles.constiner}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
          hidden={false}
        />
        <View
          style={styles.contents}
          onLayout={event => {
            const {x, y, width, height} = event.nativeEvent.layout;
          }}>
          <Text style={styles.content}>Make</Text>
          <Text style={styles.content}>Your Style</Text>
          <View style={styles.text_image}>
            <Text style={styles.content}>Come</Text>
            <View style={styles.circle_with_image}>
              <Image
                style={styles.image}
                source={require('../../assets/images/shue.png')}
              />
            </View>
          </View>
          <Text style={styles.content}>True Here</Text>
        </View>
        <View style={styles.main}>
          <Image
            style={styles.main_image}
            source={require('../../assets/images/shue.png')}
          />
        </View>
      </ImageBackground>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <Carousel
        layout={'defult'}
        loop={true}
        ref={carouselRef}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={index => setItems(index)}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={items}
          dotStyle={{
            width: 30,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}
          inactiveDotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <TouchableOpacity
        style={styles.next_botton}
        onPress={() => navigation.navigate('Welcom')}>
        <Text style={styles.botton_text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: 'center',
  },
  contents: {
    width: windowWidth,
    position: 'absolute',
    left: windowWidth - 200,
    top: 50,
  },
  content: {
    color: '#fff',
    fontSize: 30,
    marginVertical: 5,
  },
  text_image: {
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle_with_image: {
    width: 80,
    borderColor: '#fff',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
  },
  image: {
    position: 'relative',
    top: -15,
    right: -20,
    width: 60,
    height: 50,
  },
  main: {
    position: 'absolute',
    right: -100,
  },
  main_image: {
    width: windowWidth - 20,
    height: windowWidth - 70,
  },

  next_botton: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  botton_text: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
});
