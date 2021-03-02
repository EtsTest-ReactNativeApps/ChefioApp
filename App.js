
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SignInScreen from './src/screens/OS/SignInScreen'
import SignUpScreen from './src/screens/OS/SignUpScreen'
import VerificationCodeScreen from './src/screens/OS/VerificationCodeScreen'
import PasswordRecoveryScreen from './src/screens/OS/PasswordRecoveryScreen'
import NewPasswordScreen from './src/screens/OS/NewPasswordScreen'
import HomeScreen from './src/screens/TS/HomeScreen'
import ProfileScreen from './src/screens/TS/ProfileScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppTabsScreen = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: props =>(
       <Entypo name="home" size={24} color="black" />
      )}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: props =>(
       <Ionicons name="person" size={24} color="black" />
      )}} />
  </Tab.Navigator>

  )
  }
export default function App() {
  return (
   
      
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }}>
    
     <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
    <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
    <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    <Stack.Screen name="Tabs" component={AppTabsScreen} />    
    
      </Stack.Navigator>

    </NavigationContainer>

    );
}

const styles = StyleSheet.create({

});
