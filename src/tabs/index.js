import React, { Component } from "react";
import { StatusBar, StyleSheet, Image, Platform } from "react-native";
import HomeTabs from "./HomeTabs.js";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import VeganTabs from "./VeganTab.js";
import { TabNavigator, TabBarTop,TabView } from 'react-navigation';
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

const homeIcon = require("../img/icon/Home_64.png");
const veganIcon = require("../img/icon/vegan_64.png");
const vegetarianIcon = require("../img/icon/vegetarian_64.png");
const veg_friendlyIcon = require("../img/icon/veg_friendly_64.png");
const storesIcon = require("../img/icon/stores+_64.png");
const cafeIcon = require("../img/icon/cafe_64.png");
const bakeryIcon = require("../img/icon/Bakery_64.png");
const cateringIcon = require("../img/icon/catering_32.png");
const otherIcon = require("../img/icon/other_64.png");

const TabsScreenNavigator = TabNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Home",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={homeIcon} />)
     })
  },
  Vegan: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Vegan",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={veganIcon} />)
     })
   },
  Vegentarian: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Vegfriendly",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={veg_friendlyIcon} />)
     })
  },
  Tab4: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Stores+",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={storesIcon} />)
     })
  },
  Tab5: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Cafe",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={cafeIcon} />)
     })
  },
  Tab6: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Bakery",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={bakeryIcon} />)
     })
  },
  Tab7: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Catering",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={cateringIcon} />)
     })
  },
  Tab8: {
    screen: VeganTabs,
    navigationOptions: ({ navigation }) => ({
       title: "Other",
       tabBarIcon: ({ tintColor }) => (<Image style={styles.icon} source={otherIcon} />)
     })
  },
}, {
  initalRouteName: 'Tab1',
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: '#FEFEFE',
    },
    labelStyle: {
      fontSize: 11,
    },
    indicatorStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 3,
    },
    upperCaseLabel: false,
    activeTintColor:'black',
    inactiveTintColor:'gray',
    scrollEnabled: true,
    showIcon: true,
    showLabel: true,
    tabStyle: { width: 95,padding:2 },
  }
})

const styles = StyleSheet.create({
  tab: {
  padding: 2
},
icon: {
  width: 30,
  height: 30,
},
tabBar: {
  backgroundColor: 'gray',
}
});
export default TabsScreenNavigator;
