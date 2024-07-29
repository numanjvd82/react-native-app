import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const ICON_SIZE = 24;

const TabBar = ({
  color,
  name,
  focused,
  icon,
}: {
  color: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center gap-1">
      <Ionicons name={icon} size={ICON_SIZE} color={color} />
      <Text className={`text-sm ${focused ? "text-white" : "text-gray-500"}`}>
        {name}
      </Text>
    </View>
  );
};

export default function HomeLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#6b7280",
          tabBarActiveTintColor: "#fff",

          tabBarStyle: {
            backgroundColor: "#1a1a1a",
            borderTopWidth: 0,
            paddingBottom: 5,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBar color={color} icon="home" focused={focused} name="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, focused }) => (
              <TabBar
                icon="search"
                name="Search"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            tabBarLabel: "Playlists",
            tabBarIcon: ({ color, focused }) => (
              <TabBar
                icon="musical-note"
                name="Playlists"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <TabBar
                icon="settings"
                name="Settings"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
