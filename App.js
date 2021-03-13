import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Icons
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

// Screens
// Tab
import Search from "./src/screens/search";
import Settings from "./src/screens/settings";
import Add from "./src/screens/add";
import Favorites from "./src/screens/favorites";
// Stack
import Details from "./src/screens/details";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000",
      }}
      headerMode="none"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
        name="BUSCAR"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={30} color="black" />
          ),
        }}
        name="ADICIONAR"
        component={Add}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
        }}
        name="FAVORITOS"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
        name="CONFIGURAÇÕES"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Detalhe" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
