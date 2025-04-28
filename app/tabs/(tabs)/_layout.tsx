import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}
import { HeartIcon, HouseIcon, ShoppingBagIcon } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#f29461",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HouseIcon color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => <HeartIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <ShoppingBagIcon color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
