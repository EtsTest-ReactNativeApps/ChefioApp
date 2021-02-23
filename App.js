
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="On Board" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    );
}

const styles = StyleSheet.create({

});
