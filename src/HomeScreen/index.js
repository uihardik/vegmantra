import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MapsTabs from "./mapsTabs.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Login from "../Login/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import TabsScreenNavigator from "../tabs/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },
    MapsScreen: { screen: MapsTabs },
    Login: { screen: Login },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
