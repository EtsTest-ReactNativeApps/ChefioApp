
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/OS/SignInScreen'
import SignUpScreen from './src/screens/OS/SignUpScreen'
import VerificationCodeScreen from './src/screens/OS/VerificationCodeScreen'
import PasswordRecoveryScreen from './src/screens/OS/PasswordRecoveryScreen'
import NewPasswordScreen from './src/screens/OS/NewPasswordScreen'

const Stack = createStackNavigator();


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
       
        
      </Stack.Navigator>
    </NavigationContainer>

    );
}

const styles = StyleSheet.create({

});
