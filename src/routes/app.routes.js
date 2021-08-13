import React, { useState } from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import Home from '../pages/Dashboard/Home';
import Signature from '../pages/Dashboard/Signature';
import Search from '../pages/Dashboard/Search';
import Orders from '../pages/Dashboard/Orders';
import Profile from '../pages/Dashboard/Profile';

// icons
import HomeIcon from '~/assets/icons/home.svg';
import SignatureIcon from '~/assets/icons/signature.svg';
import SearchIcon from '~/assets/icons/search.svg';
import OrdersIcon from '~/assets/icons/orders.svg';
import ProfileIcon from '~/assets/icons/profile.svg';

// helpers
import { colors } from '~/styles/global';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.grayLight,
      headerShown: false,
      tabBarStyle: {
        height: Platform.OS === 'ios' ? 58 : 65,
        paddingTop: Platform.OS === 'ios' ? 15 : 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOpacity: 0,
        elevation: 0,
      },
      tabBarIconStyle: {
        marginBottom: Platform.OS === 'ios' ? 8 : 3,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: Platform.OS === 'ios' ? 0 : 8,
      },
    }}
  >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Assinatura'
      component={Signature}
      options={{
        tabBarIcon: ({ color }) => <SignatureIcon color={color} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Pesquisa'
      component={Search}
      options={{
        tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name='Pedidos'
      component={Orders}
      options={{
        tabBarIcon: ({ color }) => <OrdersIcon color={color} />,
      }}
    />
    <Tab.Screen
      name='Perfil'
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
      }}
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
