import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import Home from '../pages/Dashboard/Home';
import Signature from '../pages/Dashboard/Signature';
import Search from '../pages/Dashboard/Search';
import Orders from '../pages/Dashboard/Orders';
import Profile from '../pages/Dashboard/Profile';

// import HomeIconfrom '~/assets/icons/home.svg';
// import SignatureIcon from '~/assets/icons/signature.svg';
// import SearchIcon from '~/assets/icons/search.svg';
// import OrdersIcon from '~/assets/icons/orders.svg';
// import ProfileIcon from '~/assets/icons/profile.svg';

// helpers
import { colors } from '../styles/global';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.black,
      tabBarInactiveTintColor: colors.grayLight,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name='home'
      component={Home}
      // options={{
      //   tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
      //   headerShown: false,
      // }}
    />
    <Tab.Screen
      name='signature'
      component={Signature}
      // options={{
      //   tabBarIcon: ({ color }) => <SignatureIcon fill={color} />,
      //   headerShown: false,
      // }}
    />
    <Tab.Screen
      name='search'
      component={Search}
      // options={{
      //   tabBarIcon: ({ color }) => <SearchIcon fill={color} />,
      //   headerShown: false,
      // }}
    />
    <Tab.Screen
      name='orders'
      component={Orders}
      // options={{
      //   tabBarIcon: ({ color }) => <OrdersIcon fill={color} />,
      // }}
    />
    <Tab.Screen
      name='profile'
      component={Profile}
      // options={{
      //   tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
      // }}
    />
  </Tab.Navigator>
);

const App = () => (
  <Stack.Navigator
    initialRouteName='dashboard'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='dashboard' component={Dashboard} />
  </Stack.Navigator>
);

export default App;
