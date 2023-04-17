import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Community from '../screens/Community';
import MyPage from '../screens/MyPage';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}>
    <BottomTab.Screen
      name="커뮤니티"
      component={Community}
      options={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarIcon: ({focused}) =>
          focused ? (
            <Icon size={30} name="comment-text" color="black" />
          ) : (
            <Icon size={30} name="comment-text" color="gray" />
          ),
      }}
    />
    <BottomTab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        tabBarIcon: ({focused}) =>
          focused ? (
            <Icon
              size={35}
              name="home-variant"
              color="black"
              backgroundColor="white"
            />
          ) : (
            <Icon size={35} name="home-variant" color="gray" />
          ),
      }}
    />
    <BottomTab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarIcon: ({focused}) =>
          focused ? (
            <Icon size={32} name="account" color="black" />
          ) : (
            <Icon size={32} name="account" color="gray" />
          ),
      }}
    />
  </BottomTab.Navigator>
);

export default HomeTab;
