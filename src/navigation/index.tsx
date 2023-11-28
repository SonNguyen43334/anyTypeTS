import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}> 
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Detail" component={DetailScreen}/>
    </Tab.Navigator>
  );
}

export default MyTabs