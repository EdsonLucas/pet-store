import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Subtitle } from '~/styles/global/general';

// pages
import Home from '../pages/Dashboard/Home';
import Signature from '../pages/Dashboard/Signature';
import Search from '../pages/Dashboard/Search/Search';
import Orders from '../pages/Dashboard/Orders';
import Profile from '../pages/Dashboard/Profile/Profile';
import QuicklySearch from '../pages/Dashboard/Search/QuicklySearch';
import ListSearch from '../pages/Dashboard/Search/ListSearch';
import PreCart from '../pages/Dashboard/Cart/PreCart';
import Cart from '../pages/Dashboard/Cart/Cart';
import OrderPlaced from '~/pages/Dashboard/OrderPlaced';
import PageStore from '~/pages/Dashboard/Product/PageStore';
import Product from '~/pages/Dashboard/Product/Product';
import About from '~/pages/Dashboard/Profile/About';
import PaymentForm from '~/pages/Dashboard/PaymentForm';
import StoreSignature from '~/pages/Dashboard/Signature/StoreSignature';
import SignatureDetails from '~/pages/Dashboard/Signature/SignatureDetails';
import CreateSignature from '~/pages/Dashboard/Signature/CreateSignature';
import AddressPage from '~/pages/Dashboard/AddressPage';
import UserInfo from '~/pages/Dashboard/Profile/UserInfo';
import ChoosePet from '~/pages/Dashboard/Profile/ChoosePet';
import ForYouStore from '~/pages/Dashboard/ForYouStore';
import SelectedProductsStore from '~/pages/Dashboard/SelectedProductsStore';

// icons
import HomeIcon from '~/assets/icons/home.svg';
import SignatureIcon from '~/assets/icons/signature.svg';
import SearchIcon from '~/assets/icons/search.svg';
import OrdersIcon from '~/assets/icons/orders.svg';
import ProfileIcon from '~/assets/icons/profile.svg';

// helpers
import { colors } from '~/styles/global';
import CartModal from '~/components/Modal/CartModal';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => (
  <>
    <CartModal />

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.grayLight,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 65,
          paddingTop: Platform.OS === 'ios' ? 15 : 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderLeftColor: colors.red,
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarIconStyle: {
          marginBottom: Platform.OS === 'ios' ? 8 : 3,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === 'ios' ? 4 : 8,
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
  </>
);

const CartVisiblePages = () => (
  <>
    <CartModal modalBottomPosition={0.1} height={70} internalPage />

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='product' component={Product} />
      <Stack.Screen name='page-store' component={PageStore} />
      <Stack.Screen name='store-signature' component={StoreSignature} />
    </Stack.Navigator>
  </>
);

const App = () => (
  <Stack.Navigator
    initialRouteName='dashboard'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='dashboard' component={Dashboard} />
    <Stack.Screen name='cart-visible-pages' component={CartVisiblePages} />
    <Stack.Screen name='quickly-search' component={QuicklySearch} />
    <Stack.Screen name='list-search' component={ListSearch} />
    <Stack.Screen name='pre-cart' component={PreCart} />
    <Stack.Screen name='cart' component={Cart} />
    <Stack.Screen name='order-placed' component={OrderPlaced} />
    <Stack.Screen name='about' component={About} />
    <Stack.Screen name='user-info' component={UserInfo} />
    <Stack.Screen name='address-page' component={AddressPage} />
    <Stack.Screen name='payment-form' component={PaymentForm} />
    <Stack.Screen name='signature-details' component={SignatureDetails} />
    <Stack.Screen name='create-signature' component={CreateSignature} />
    <Stack.Screen name='choose-pet' component={ChoosePet} />
    <Stack.Screen name='for-you-store' component={ForYouStore} />
    <Stack.Screen
      name='selected-products-store'
      component={SelectedProductsStore}
    />
  </Stack.Navigator>
);

export default App;
