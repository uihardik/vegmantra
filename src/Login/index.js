import React, { Component } from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
  },
  {
    initialRouteName: "Login"
  }
));
