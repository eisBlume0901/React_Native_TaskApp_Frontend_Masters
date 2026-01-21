import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      {/*Passing the parameters color and size will allow the icon properties to match the active and inactive state and sizing of the tab*/}
      <Tabs.Screen name="index" options={{
        title: "Shopping List",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-circle" size={size} color={color} />
        ),
      }} />
      <Tabs.Screen name="counter" options={{
        title: "Counter",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="time" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="idea" options={{
        title: "Idea",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="bulb" size={size} color={color} />
        )
      }} />
    </Tabs>
  );
}