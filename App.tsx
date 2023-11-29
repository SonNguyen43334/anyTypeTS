import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './src/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './src/navigation';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
