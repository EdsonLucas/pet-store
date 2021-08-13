import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '~/pages/SignIn/Welcome';
import Login from '~/pages/SignIn/Login';
import Register from '~/pages/SignUp/Register';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name='welcome' component={Welcome} />
    <Auth.Screen name='login' component={Login} />
    <Auth.Screen name='register' component={Register} />
  </Auth.Navigator>
);

export default AuthRoutes;
