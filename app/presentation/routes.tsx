import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { GetItem } from "./hooks/useStorage";

import Home from "@/presentation/screens/Auth/Home";
import { ActivityIndicator, View } from "react-native";
import Login from "./screens/Public/Login";
import { Slider } from "./screens/Public/Slider/Slide";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default function Routes() {
   const [initialRoute, setInitialRoute] = useState<string | null>(null);

   const checkIsOnboarded = async () => {
     const onboardStatus = await GetItem("@isOnboarded");
     if (onboardStatus === "true") {
       setInitialRoute("Login");
     } else {
       setInitialRoute("Slide");
     }
   };

   useEffect(() => {
     checkIsOnboarded();
   }, []);

   if (!initialRoute) {
     return (
       <View
         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
         <ActivityIndicator size="large" />
       </View>
     );
   }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Slide" component={Slider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
