import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ImagenScreen from "./screens/ImagenScreen";
import logo from './assets/logo.png'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerLeft: () => <Image source={logo} style={styles.logo}/>,
          title: "DevproGallery App"
        }}/>
        <Stack.Screen name="ImageScreen" component={ImagenScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  logo:{
    width: 37,
    height: 37,
    marginEnd: -10,
    borderRadius: 5,
    marginStart: 5
    
  }
})
