import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeScreen } from "../components/05_pages/Home";
import { FavoriteScreen } from "../components/05_pages/Favorite";
import { SearchScreen } from "../components/05_pages/SearchScreen";
import { LicensesScreen } from "../components/05_pages/Licenses";

import { Colors } from "../styles/Colors";

import { CustomDrawerComponent } from "./CustomDrawerComponent";

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  const homeHeaderOption = {
    title: "app template",
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.background,
    headerTitleStyle: {
      fontSize: 16,
    },
  };
  return (
    <Drawer.Navigator
      screenOptions={homeHeaderOption}
      drawerContent={CustomDrawerComponent}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function MainStack() {
  const headerOption = {
    headerShown: false,
  };
  const licenseHeaderOption = {
    title: "Licenses",
    headerTintColor: Colors.background,
    headerTitleStyle: {
      fontSize: 16,
    },
    headerBackTitleVisible: false,
    headerStyle: { backgroundColor: Colors.primary },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={headerOption}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Licenses"
        component={LicensesScreen}
        options={licenseHeaderOption}
      />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  const headerOption = {};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function MainNavigationComponent() {
  const tabBarOptions = {
    headerShown: false,
    tabBarActiveTintColor: Colors.text,
    tabBarInactiveTintColor: Colors.text,
    tabBarActiveBackgroundColor: Colors.primary,
    tabBarInactiveBackgroundColor: Colors.white,
    tabBarStyle: { backgroundColor: Colors.primary },
  };

  const TabBarIcon = (props: { name: string; focused: boolean }) => {
    const { name, focused } = props;
    return (
      <MaterialIcons
        name={name}
        size={26}
        color={focused ? Colors.white : Colors.secondary}
      />
    );
  };
  const homeIcon = (props: { focused: boolean }) => {
    return <TabBarIcon focused={props.focused} name="home" />;
  };
  const favoriteIcon = (props: { focused: boolean }) => {
    return <TabBarIcon focused={props.focused} name="star" />;
  };

  return (
    <Tab.Navigator initialRouteName="MainStack" screenOptions={tabBarOptions}>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: "ホーム",
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarLabel: "お気に入り",
          tabBarIcon: favoriteIcon,
        }}
      />
    </Tab.Navigator>
  );
}
