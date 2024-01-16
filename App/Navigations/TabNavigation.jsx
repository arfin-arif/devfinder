import { Text, View } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home/HomeScreen";
import Login from "../Screens/Login/Login";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ color }) => {
              return (
                <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                  Home
                </Text>
              );
            },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="login"
          component={Login}
          options={{
            tabBarLabel: ({ color }) => {
              return (
                <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
                  Login
                </Text>
              );
            },
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="login" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
