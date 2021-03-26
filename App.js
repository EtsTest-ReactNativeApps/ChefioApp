import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import SignInScreen from './src/screens/OS/SignInScreen'
import SignUpScreen from './src/screens/OS/SignUpScreen'
import VerificationCodeScreen from './src/screens/OS/VerificationCodeScreen'
import PasswordRecoveryScreen from './src/screens/OS/PasswordRecoveryScreen'
import NewPasswordScreen from './src/screens/OS/NewPasswordScreen'
import HomeScreen from './src/screens/TS/HomeScreen'
import ProfileScreen from './src/screens/TS/ProfileScreen'
import UploadScreen from './src/screens/TS/UploadScreen'
import ScanScreen from './src/screens/TS/ScanScreen'
import NotificationScreen from './src/screens/TS/NotificationScreen'
import CameraPicker from './src/hooks/CameraPicker'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const AppTabsScreen = () => {
  const [openCamera, cameraImage] = CameraPicker()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              return <Ionicons name={iconName} size={size} color={color} />

            case 'Upload':
              return <Feather name='edit-3' size={size} color={color} />

            case 'Scan':
              return (
                <View style={styles.ScanStyle}>
                  <AntDesign name='scan1' size={size} color={'white'} />
                </View>
              )

            case 'Notification':
              return <Ionicons name='notifications' size={size} color={color} />

            case 'Profile':
              iconName = focused ? 'user-alt' : 'user'
              return <FontAwesome5 name={iconName} size={size} color={color} />

            default:
              break
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1FCC79',
        inactiveTintColor: '#9FA5C0',
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Upload' component={UploadScreen} />
      <Tab.Screen name='Scan' component={ScanScreen} />
      <Tab.Screen name='Notification' component={NotificationScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='PasswordRecovery' component={PasswordRecoveryScreen} />
        <Stack.Screen name='VerificationCode' component={VerificationCodeScreen} />
        <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
        <Stack.Screen name='Tabs' component={AppTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  ScanStyle: {
    backgroundColor: '#1FCC79',
    height: 50,
    width: 50,
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
})
