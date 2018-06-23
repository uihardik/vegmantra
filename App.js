import React, { Component } from "react";
import { View,AsyncStorage } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";


import HomeScreen from "./src/HomeScreen/index.js";
import Login from "./src/Login/index.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: true,
       isLoggedIn: true
    };
  }
  async componentWillMount() {
    this.setState({ isReady: true });
    AsyncStorage.getItem('authToken').then((token) => {
      this.setState({ isLoggedIn: token !== null })
    })
  }
  render() {
    if (this.state.isReady) {
      if (this.state.isLoggedIn)
       return <HomeScreen/>;
     else
       return <Login />;
    }


  }
}
