import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/navigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <MyTabs/>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
export default App;