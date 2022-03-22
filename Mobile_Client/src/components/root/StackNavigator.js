import React from "react";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Register from "../register/register";
import Login from "../login/login";
import Profil from "../profile/Profile";
import Dashboard from "../dashboard/dashboard";
import Welcome from "../welcome/welcome";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [Google, setGoogle] = useState('true');

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
