import React from "react";
import { View, TextInput, TouchableOpacity,StyleSheet, Image, Dimensions, ImageBackground, Platform, ScrollView} from 'react-native';

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,Footer,
} from "native-base";

import { StackNavigator } from "react-navigation";
import Signup from "./Signup.js";
import HomeScreen from "../HomeScreen/index.js";

const { width, height } = Dimensions.get("window");

const background = require("../img/BGwithmask.jpg");

export default class SplashScreen extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
});
