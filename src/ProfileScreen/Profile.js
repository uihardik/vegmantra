import React from "react";
import { AppRegistry, Alert, StyleSheet, Image, View } from "react-native";

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
  H1,
  Picker, Form, Item as FormItem
} from "native-base";

const Item = Picker.Item;
import { StackNavigator } from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import HomeScreen from "../HomeScreen/index.js";

const user = require("../img/avatar_circle_blue_512dp.png");
const location = require("../img/icon/Map_32.png");
const level = require("../img/icon/level_32.png");
const dinner = require("../img/icon/dinner_64.png");
const backIcon = require("../img/icon/left-arrow_32.png");
const editIcon = require("../img/icon/edit_32.png");
const itemValue = ''

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {language: 'All',profileDta:''};
  }

  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
    this.ProfileData();
  }

  ProfileData(){
    fetch('https://beta.vegmantra.net/listing/api/auth/ProfileDetails/',{method: 'POST'})
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          let obj = JSON.parse(response)
          this.setState({
            profileDta: response,
          });
        }
      })
      .done();
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.userTitle}>
            <Image source={user} style={styles.user} resizeMode="contain"/>
            <Text> Kumar Pratik </Text>
            <View style={styles.userlevel}>
              <Text style={styles.clm}> <Image source={location} style={styles.icon} resizeMode="contain"/> {this.state.profileDta} </Text>
              <Text style={styles.clm}> <Image source={level} style={styles.icon} resizeMode="contain"/> Level 1 </Text>
            </View>
          </View>
          <Card>
            <CardItem>
              <Left>
                <View>
                  <Text>Favorite</Text>
                  <Text style={styles.count}>0</Text>
                </View>
              </Left>
              <Right>
                <View>
                  <Text>BEEN THERE</Text>
                  <View>
                    <Text style={styles.count}>0</Text>
                  </View>
                </View>
              </Right>
            </CardItem>
          </Card>
          <Text style={styles.review}> My Reviews</Text>
          <Content style={styles.posts}>
            <View style={{flexDirection: 'row'}}>
              <Picker
              iosHeader="Select one"
              mode="dropdown"
              textStyle={[styles.pickerText]}
						  itemStyle={{ backgroundColor: '#fafafa', marginLeft: 0, paddingLeft: 30 }}
              style={styles.valuepost}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: 'All'})}>
                <Picker.Item label="All Posts" value="All" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              <Icon name='arrow-down'/>
            </View>
          </Content>
          <View style={styles.noData}>
            <Image source={dinner} style={styles.nodata} resizeMode="contain"/>
            <Text note>Nothing here yet</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header style={{backgroundColor:'white'}}>
        <Left>
          <Button primary transparent onPress={() => navigation.navigate("Home")}>
            <Image source={backIcon} resizeMode="contain"/>
          </Button>
        </Left>
        <Body>
        </Body>
        <Right>
        <Button transparent onPress={() => navigation.navigate("EditScreenTwo")}>
          <Image source={editIcon} resizeMode="contain"/>
        </Button>
        </Right>
      </Header>
    )
  };
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f8f8f8',
    },
    userTitle: {
      alignItems: "center",
      backgroundColor:'white',
    },
    userlevel:{
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection:'row',
      marginBottom:10,
      marginTop:10,
    },
    clm:{
      flexDirection:'column',
      width:125
    },
    user:{
      width:100,
      height:100,
    },
    count:{
      alignItems: "center",
      justifyContent: "center",
      color:'green',
    },
    review:{
      fontSize:20,
      marginBottom:20,
      marginTop:20,
    },
    noData:{
      backgroundColor:'white',
      alignItems: "center",
      justifyContent: "center",
    },
    posts:{
      height:100,
      backgroundColor:'white',
    },
    nodata:{
      width:70,
      height:70
    },
    icon :{
      width:45,
      height:24
    },
    pickerText:{fontSize: 18,color:'green',paddingLeft:10},
    lefticon: {
      width:45,
      height:24,
    }
});
