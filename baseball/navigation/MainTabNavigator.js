import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ViewPages from "../screens/ViewPages";
import Quiz from "../screens/Quiz";
import Help from "../screens/LinksScreen";
import Lesson from "../screens/Lesson";

const HomeStack = createStackNavigator({
  Home: ViewPages
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LessonStack = createStackNavigator({
  Lesson: Lesson
});

LessonStack.navigationOptions = {
  tabBarLabel: "Lesson",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-help"}
    />
  )
};

const HelpStack = createStackNavigator({
  Help: Help
});

HelpStack.navigationOptions = {
  tabBarLabel: "Help",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LessonStack,
  HelpStack
});
