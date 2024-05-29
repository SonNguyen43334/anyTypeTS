// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from './src/screens/HomeScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import DetailScreen from './src/screens/DetailScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {createStackNavigator} from '@react-navigation/stack';

// type RootStackParamList = {
//   Home : undefined,
//   Welcome : undefined,
// }

// const Stack = createStackNavigator<RootStackParamList>();

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName='Welcome'>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }
// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
