import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Make sure to import Ionicons from '@expo/vector-icons'
import COLORS from '../constants/colors';
import MyRideShares from '../screens/MyRideShares';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function App_nav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MyRideShares') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false, 
        activeTintColor: COLORS.primary, 
        inactiveTintColor: COLORS.secondary, 
      }}
    >
      <Tab.Screen name="MyRideShares" component={MyRideShares} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
