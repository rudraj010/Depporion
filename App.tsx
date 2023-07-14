import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AppContainer from './src/Navigation/Index';
import { store } from './src/Redux/Store';
import {Provider} from 'react-redux'
 
export default function App() {
  return (
    <Provider store={store}>

      <AppContainer/>
    </Provider>
  )
}