import { NavigatorScreenParams } from "@react-navigation/native";
import Home from "./BottomTab/Home";
import Screen1 from "./BottomTab/Screen1";
import Screen2 from "./BottomTab/Screen2";
import Screen3 from "./BottomTab/Screen3";
import Screen4 from "./BottomTab/Screen4";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Define types for the navigation parameters
export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabStackParamList>;
}

export type BottomTabStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
}

// Create the stack navigators
const RootStack = createNativeStackNavigator<RootStackParamList>();
const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

// Define the BottomTabNavigator
const BottomTabNavigator = () => {
  return (
    <BottomTabStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveBackgroundColor: 'orange',
        tabBarInactiveBackgroundColor: 'white',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      
      <BottomTabStack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle" color={color} size={size} />
          ),
        }}
      />
    </BottomTabStack.Navigator>
  )
}

// Define the RootNavigator
export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }} />
    </RootStack.Navigator>
  )
}
