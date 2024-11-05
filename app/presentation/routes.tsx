import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { GetItem } from "./hooks/useStorage";
import Home from "./screens/Auth/Home";
import Profile from './screens/Auth/Profile';
import Workouts from './screens/Auth/Workouts';
import Login from "./screens/Public/Login";
import SignUp from './screens/Public/SignUp';
import { Slider } from "./screens/Public/Slider/Slide";
import { colors } from './theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number
) => {
  const icons: Record<string, { component: React.ElementType; name: string }> =
    {
      Inicio: { component: AntDesign, name: "home" },
      Perfil: { component: MaterialIcons, name: "person" },
      Treinos: { component: FontAwesome5, name: "dumbbell" },
    };

  const IconComponent = icons[routeName]?.component;
  const iconName = icons[routeName]?.name;

  if (!IconComponent || !iconName) return null; 

  return <IconComponent name={iconName} size={size} color={color} />;
};


function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Inicio'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: colors.primaryAction,
        tabBarInactiveTintColor: "gray",
        headerShown: false
      })}
    >
      <Tab.Screen name="Treinos" component={Workouts} />
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Routes() {
   const [initialRoute, setInitialRoute] = useState<string | null>(null);

   const checkIsOnboarded = async () => {
     const onboardStatus = await GetItem("@isOnboarded");
     const loginStatus = await GetItem("@isLogged")

     if (loginStatus === "true") {
      setInitialRoute("Main");
     } else if (onboardStatus === "true") {
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
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
