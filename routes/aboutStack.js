import { createStackNavigator } from "react-navigation-stack";
import About from "./../screens/about";
import ReviewDetails from "./../screens/reviewDetails";
import Header from "./../shared/header";
import React from "react";

const screens = {
 About: {
  screen: About,
  // navigationOptions: {
  //  headerTitle: () => <Header />
  // }
  navigationOptions: ({ navigation }) => {
   return {
    headerTitle: () => <Header navigation={navigation} title="About GameZone" />
   };
  }
 }
};

const AboutStack = createStackNavigator(screens, {
 defaultNavigationOptions: {
  headerTintColor: "#555",
  headerStyle: {
   backgroundColor: "#ddd",
   height: 80
  }
 }
});

export default AboutStack;
