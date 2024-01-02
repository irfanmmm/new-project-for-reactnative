import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Product from '../product/Product';
import {useDispatch, useSelector} from 'react-redux';

export default function LeftMenu({navigation}) {
  const data = useSelector(value => {
    const likeddata = value.product.filter(item => item.like === true);
    return likeddata;
  });

  const Despatch = useDispatch();

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'red',
          fontSize: 20,
          fontWeight: '500',
        }}>
        Liked Products
      </Text>

      <FlatList
        columnWrapperStyle={{
          flex: 1,

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
            invisiblelikeicone={true}
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
