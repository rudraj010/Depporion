import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import AddMember from '../Screens/AddMember/AddMember';
import DeviceDetails from '../Screens/DeviceDetails/DeviceDetails';
import TotalEmployees from '../Screens/TotalEmployees/TotalEmployees';
import SingleUserDetails from '../Screens/SingleUserDetails/SingleUserDetails';
import LogIn from '../Screens/Auth/LogIn/LogIn'
import SignUp from '../Screens/Auth/SignUp/SignUp'

const Stack =createStackNavigator()
 
export default function AuthStack() {
  return (
     <Stack.Navigator
       screenOptions={{
        headerShown:false
       }}
     >
        <Stack.Screen  name='LogIn' component={LogIn}/>
        <Stack.Screen  name='SignUp' component={SignUp}/>
        <Stack.Screen  name='Home' component={Home}/>
        <Stack.Screen  name='AddMemeber' component={AddMember}/>
        <Stack.Screen  name='DeviceDetails' component={DeviceDetails}/>
        <Stack.Screen  name='TotalEmployees' component={TotalEmployees}/>
        <Stack.Screen  name='SingleUserDetails' component={SingleUserDetails}/>
     </Stack.Navigator>
  )
}
