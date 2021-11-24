import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
      return(
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen  
                  name = "Ride"
                  component = {RideScreen}
                  options={{
                    tabBarLabel: 'Ride',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }}
                  />
                  <Tab.Screen 
                  name = "Ride History"
                  component = {RideHistoryScreen}
                  options={{
                    tabBarLabel: 'Ride History',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="history" color={color} size={26} />
                    ),
                  }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
  )
}
}
