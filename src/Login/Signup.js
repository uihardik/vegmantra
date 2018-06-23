import React from "react";
import { View, TextInput, TouchableOpacity,StyleSheet, Image, Dimensions, Platform, Footer,ScrollView, Alert} from 'react-native';

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
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
import Login from "./Login.js";

const { width, height } = Dimensions.get("window");

const background = require("../img/BGwithmask.jpg");
const nameIcon = require("../img/icon/name_32.png");
const lockIcon = require("../img/icon/locked_back_64.png");
const mailIcon = require("../img/icon/mail_black_32.png");
const fbicon = require("../img/icon/facebook.png");
const googleicon = require("../img/icon/Google_32.png");

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      EmailAddress: '',
      password: ''
    };
  }

  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
    _userSignup = () => {
      // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
      Alert.alert( 'Signup Success!', 'inn')
      fetch('https://beta.vegmantra.net/listing/api/signup/signup/', {
       method: 'POST',
       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
       body: JSON.stringify({
         EmailAddress: this.state.EmailAddress,
         password: this.state.password,
         RetypePassword: this.state.password,
       })
      })
      .then((response) => response.json())
      .then((responseData) => {
       Alert.alert( 'Signup Success!', 'Click the button to get a Chuck Norris quote!')
      })
      .catch((error) =>{
        Alert.alert( 'Signup Success!',error);
      });
     }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{backgroundColor:'orange'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>SIGN UP</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
            <View style={styles.inputWrap}>
               <View style={styles.iconWrap}>
                 <Image source={nameIcon} style={styles.icon} resizeMode="contain" />
               </View>
               <TextInput
                 placeholder="Name"
                 placeholderTextColor="black"
                 style={styles.input}
                 onChangeText={(Name) => this.setState({Name})}
                 ref='Name'
               />
             </View>
             <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                <Image source={mailIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="black"
                  style={styles.input}
                  onChangeText={(EmailAddress) => this.setState({EmailAddress})}
                  ref='Email Address'
                />
              </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholderTextColor="black"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                onChangeText={(Password) => this.setState({Password})}
                ref='Password'
              />
            </View>
            <View>
              <TouchableOpacity activeOpacity={.5}>
                <Button
                  full
                  primary
                  style={{ marginTop: 10 }}
                  style={styles.button}
                  onPress={this._userSignup}>
                  <Text style={styles.buttonText}>SIGN UP</Text>
                </Button>
              </TouchableOpacity>
            </View>
                <View>
                  <Text style={styles.textRegister}> ─────── Or sign up with ─────── </Text>
                </View>
              <View style={styles.social}>
                  <Button
                    iconLeft
                    activeOpacity={0.5}
                    style={styles.signInWithFacebookButton}>
                    <Image source={fbicon} style={styles.signInWithFacebookIcon}/>
                    <Text uppercase={false} style={styles.signInfbText}>Facebook</Text>
                  </Button>
                  <Button
                    iconLeft
                    activeOpacity={0.5}
                    style={styles.signInWithGoogleButton}>
                    <Image source={googleicon} style={styles.signInWithFacebookIcon}/>
                    <Text uppercase={false} style={styles.signInText}> Google </Text>
                  </Button>
              </View>
              <View>
                <Text style={styles.newText}> Already a member ? Log in</Text>
              </View>
            </View>
        </View>
        </ScrollView>
         <View><Text style={styles.footer}>By registering you agree to the <Text style={styles.termsText}>Terms of use.</Text></Text></View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor:'#f1f1f1',
    },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
    paddingLeft:20,
    paddingRight:20,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize:20,
  },
  button: {
    backgroundColor: "#a7c740",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 1,
  },
  fbBtn: {
      width: (width * 37) / 100,
      height: height / 14,
      backgroundColor:'#475992',
      marginLeft: width / 13,
  },
  googleBtn:{
    width: (width * 37) / 100,
    height: height / 14,
    marginLeft: width / 13,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
  },
  newText: {
    color: "black",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
    fontSize:17,
    marginTop:30
  },
  signupWrap: {
    backgroundColor: "black",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textRegister:{
        margin:10,
    },
    signInWithFacebookButton: {
      backgroundColor: '#3b5998',
      width: (width * 41) / 100,
      height: height / 14,
      padding: 0,
      marginTop: 10,
      borderRadius: 0 ,
      marginLeft: 0,
    },
    signInWithGoogleButton: {
      backgroundColor: '#fff',
      width: (width * 41) / 100,
      height: height / 14,
      padding: 0,
      marginTop: 10,
      borderRadius: 0 ,
      marginLeft: width / 13,
    },
    signInWithFacebookIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        backgroundColor:'white',
      },
    signInfbText: {
      color: 'white',
      marginLeft: 5,
      //fontFamily: 'HelveticaNeue-Medium',
      fontSize: 16, flex: 1, textAlign: 'center'
    },
    signInText: {
      color: 'white',
      marginLeft: 5,
      //fontFamily: 'HelveticaNeue-Medium',
      fontSize: 16, flex: 1, textAlign: 'center', color: 'black'
    },
    footer: {
        textAlign: "center",
        fontSize: 12,
        marginBottom: 10,
    },
    termsText: {
      fontSize: 12,
      textDecorationLine: 'underline',
    }
});
