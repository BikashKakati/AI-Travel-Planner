import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";
import { Text, View } from "react-native";


const TabLayout = () => {
  return (
    <Tabs initialRouteName="index" screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor: '#FF3243',
      tabBarInactiveTintColor: '#333',
    }}>
      <Tabs.Screen
        name="my-trips"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} color={color} name="home" title="Home"/>
          ),
        }}
      />
      <Tabs.Screen
        name="create-trip"
        options={{
          headerShown: false,
          title: "Create New",
          tabBarIcon: ({color, focused }) => (
            <TabIcon focused={focused} color={color} name="plus-circle" title="New"/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({color, focused }) => (
            <TabIcon focused={focused} color={color} name="user-circle" title="Profile"/>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const TabIcon = ({
  focused,
  color,
  name,
  title
}: {
  focused: boolean,
  color: string,
  name: ComponentProps<typeof FontAwesome>["name"],
  title:string
}) => {
  return (
    <View className="flex items-center">
      <FontAwesome size={28} name={name} color={color} className=""/>
      <Text className="-mt-1 font-semibold text-xs">{title}</Text>
    </View>
  );
};