import React from "react";
import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import Home from "./../screens/home";
import ReviewDetails from "./../screens/reviewDetails";
import Header from "./../shared/header";

const screens = {
 Home: {
  screen: Home,
  // navigationOptions: {
  //  //  title: "GameZone"
  //  headerTitle: () => <Header />
  // }
  navigationOptions: ({ navigation }) => {
   return {
    headerTitle: () => <Header navigation={navigation} title="GameZone" />
   };
  }
 },
 ReviewDetails: {
  screen: ReviewDetails
 }
};

const HomeStack = createStackNavigator(screens, {
 defaultNavigationOptions: {
  headerTintColor: "#555",
  headerStyle: { backgroundColor: "#ddd", height: 80 }
 }
});

export default HomeStack;
// export default createAppContainer(HomeStack);
