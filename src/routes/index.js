import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";

const tab = createBottomTabNavigator();

export function Routes() {
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
      }}
    >
      <tab.Screen name="HomeTab" component={Home}></tab.Screen>
      <tab.Screen name="Favorites" component={Favorites}></tab.Screen>
    </tab.Navigator>
  );
}
