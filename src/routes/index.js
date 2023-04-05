import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";

import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

export function Routes() {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
        },
      }}
    >
      <tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size}></Ionicons>;
            }

            return (
              <Ionicons
                name="home-outline"
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></tab.Screen>
      <tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="heart" color="#FF4141" size={size}></Ionicons>
              );
            }

            return (
              <Ionicons
                name="heart-outline"
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></tab.Screen>
    </tab.Navigator>
  );
}
