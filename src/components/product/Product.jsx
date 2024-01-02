import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Heart from 'react-native-vector-icons/AntDesign';
import AciveHart from 'react-native-vector-icons/AntDesign';

import {useDispatch, useSelector} from 'react-redux';

export default function Product({value, invisiblelikeicone, onPress}) {
  const [clicked, setClicked] = useState(false);

  const Despatch = useDispatch();

  const addLike = () => {
    setClicked(!clicked);

    Despatch({
      type: clicked ? 'dislike' : 'like', // Use a ternary operator to toggle between 'like' and 'dislike'
      payload: {
        id: value.id,
      },
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.mainproduct}>
          <Image style={styles.main_img} source={value?.img} />
        </View>

        {!invisiblelikeicone && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.hart_simpel}
            onPress={addLike}>
            {!clicked ? (
              <Heart name="hearto" style={styles.hart_icone} />
            ) : (
              <Heart name="heart" style={styles.hart_icone} />
            )}
          </TouchableOpacity>
        )}

        <View style={styles.product_bottom}>
          <Text style={styles.name_product} numberOfLines={1}>
            {value?.name}
          </Text>
          <Text style={styles.price}>${value?.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 220,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  mainproduct: {
    width: '100%',
    height: 140,
  },
  main_img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  hart_simpel: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  hart_icone: {
    fontSize: 20,
  },
  product_bottom: {
    width: '100%',
  },
  name_product: {
    width: '100%',
    overflow: 'hidden',

    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
});
