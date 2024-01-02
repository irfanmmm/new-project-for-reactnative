import React from 'react';

import {Dimensions, Easing, Text, LogBox} from 'react-native';
import Welcom from './src/components/auth/Welcom';
import Login from './src/components/auth/Login';
import SplashScreen from './src/components/main/SplashScreen';
import Home from './src/components/main/Home';
import SingleProduct from './src/components/main/SingleProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './src/components/product/Product';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Favorate from './src/components/main/Favorate';
import Notifications from './src/components/main/Notifications';
import Profile from './src/components/main/Profile';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// ICONES
import CommonIcon from 'react-native-vector-icons/AntDesign';
import BellIcone from 'react-native-vector-icons/Feather';
import ActiveHomeIcone from 'react-native-vector-icons/Entypo';
import ActiveBell from 'react-native-vector-icons/Entypo';
import ProifleIcone from 'react-native-vector-icons/FontAwesome';
import CameraComponent from './src/components/camera/Camera';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LeftMenu from './src/components/main/LeftMenu';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const config = {
//   animation: 'timing',
//   config: {
//     duration: 200,
//     easing: Easing.linear,
//   },
// };

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 30,
    overshootClamping: true,
    restDisplacementThreshold: 5,
    restSpeedThreshold: 5,
  },
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SplashScreen}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcom" component={Welcom} />
      <Stack.Screen name="Camera" component={CameraComponent} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        // headerStyle: {
        //   backgroundColor: 'red',
        // },
        headerShown: false,
        headerTintColor: '#000',
        drawerActiveBackgroundColor: 'blue',
        drawerInactiveBackgroundColor: 'grey',
        drawerLabelStyle: {
          color: '#fff',
          fontSize: 16,
          fontWeight: '700',
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LikeCount" component={LeftMenu} />
    </Drawer.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#fff',
        borderTopColor: 'grey',
        borderTopWidth: 1,
      }}
      activeColor="#000">
      <Tab.Screen
        name="Home"
        component={AppNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <ActiveHomeIcone name="home" color={color} size={26} />
            ) : (
              <CommonIcon name="home" color={color} size={26} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorate"
        component={Favorate}
        options={{
          tabBarLabel: 'Favorate',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <CommonIcon name="heart" color={color} size={24} />
            ) : (
              <CommonIcon name="hearto" color={color} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <ActiveBell name="bell" color={color} size={26} />
            ) : (
              <BellIcone name="bell" color={color} size={26} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <ProifleIcone name="user" color={'#000'} size={30} />
            ) : (
              <ProifleIcone name="user-o" color={color} size={26} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
