import * as React from 'react';

import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Services from './pages/Services';
import Service from './pages/Service';
import Login from './pages/Login';
import Company from './pages/Company';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
    return (
      <Tab.Navigator
        activeColor="#930000"//"#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#181818', padding: 15 }}
      >
        <Tab.Screen name="Services" component={Services}/>
        <Tab.Screen name="Company" component={Company} />
      </Tab.Navigator>
    );
  }
  
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Services" component={HomeTabs} options={{headerShown:false}} />
            <Stack.Screen name="Service" component={Service} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabs: {
        padding: 15,
    }
})