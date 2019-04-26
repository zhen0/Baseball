import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ViewPages from "../screens/ViewPages";
import Quiz from "../screens/Quiz";

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

const HelpStack = createStackNavigator({
  Help: Lesson
});

HelpStack.navigationOptions = {
  tabBarLabel: "Story",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const QuizStack = createStackNavigator({
  Quiz: Quiz
});

QuizStack.navigationOptions = {
  tabBarLabel: "Quiz",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  HelpStack,
  QuizStack
});
