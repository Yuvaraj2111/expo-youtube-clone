import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin'

import MyComponents from './screen/Home'
import Trending from './screen/Trending'
import Notification from './screen/Notification'
import Subscription from './screen/Subscription'
import Library from './screen/Library'
import VidShow from './screen/VidShow'
import Login from './screen/Login'


export default class My extends Component {

  render() {

    return (

      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    )
  }
}

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Home"
        component={MyComponents}
        options={{ title: 'Home' }}
      />

      <Stack.Screen
        name="Trending"
        component={Trending}
        options={{ title: 'Trending' }}
      />

      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{ title: 'Subscription' }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ title: 'Notification' }}
      />

      <Stack.Screen
        name="Library"
        component={Library}
        options={{ title: 'Library' }}
      />

      <Stack.Screen
        name="VidShow"
        component={VidShow}
        options={{ title: 'VidShow' }}
      />

    </Stack.Navigator>
  );
}
