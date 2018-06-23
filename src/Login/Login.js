import React from "react";
import { View, TextInput, TouchableOpacity,StyleSheet, Image, Dimensions, ImageBackground, Platform, ScrollView,Alert, AsyncStorage} from 'react-native';

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
const mark = require("../img/logo_with_white_bg.png");
const lockIcon = require("../img/icon/locked_32.png");
const mailIcon = require("../img/icon/mail_32.png");
const fbicon = require("../img/icon/facebook.png");
const googleicon = require("../img/icon/Google_32.png");

export default class Login extends React.Component {

  static navigationOptions = {
        header: null
    }
  constructor(props) {
    super(props);
    this.state = {
      EmailAddress: '',
      password: '',
      isLoggingIn: false,
      message: ''
    };
  }

  componentDidMount() {
    // if (this.props.navigation.state.params !== undefined) {
    //   Alert.alert("USER found", this.props.navigation.state.params.name);
    // }
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
    _userLogin = () => {
    if (!this.state.EmailAddress || !this.state.password) return;
      // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
      fetch('https://beta.vegmantra.net/listing/api/auth/SignInMob/', {
       method: 'POST',
       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
       body: JSON.stringify({
         EmailAddress: this.state.EmailAddress,
         Password: this.state.password,
       })
      })
      .then((response) => response.json())
      .then((responseData) => {
       this.saveItem('authToken', responseData.TokenID),
       this.saveItem('SmsToken', responseData.TokenSMS),
       Alert.alert( 'Signup Success!', responseData.Message),
       this.props.navigation.navigate("HomeScreen")
      })
      .catch((error) =>{
        console.error(error);
      });
     }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.logo}>
              <Image source={mark} style={styles.mark} resizeMode="contain" />
             </View>
             <View>
               <View style={styles.inputWrap}>
                  <View style={styles.iconWrap}>
                    <Image source={mailIcon} style={styles.icon} resizeMode="contain" />
                  </View>
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#FFF"
                    editable={true}
                    onChangeText={(EmailAddress) => this.setState({EmailAddress})}
                    ref='Email Address'
                    returnKeyType='next'
                    style={styles.input}
                  />
              </View>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput
                  placeholderTextColor="#FFF"
                  placeholder="Password"
                  editable={true}
                  onChangeText={(password) => this.setState({password})}
                  style={styles.input}
                  secureTextEntry
                />
                {!!this.state.message && (
                  <Text
                          style={{fontSize: 14, color: 'red', padding: 5}}>
                          {this.state.message}
                      </Text>
                  )}
              </View>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1}>
                <Button
                  full
                  primary
                  style={{ margin: 10 }}
                  style={styles.button}
                  onPress={this._userLogin}>
                  <Text style={styles.buttonloginText}>LOGIN </Text>
                </Button>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={.5}>
               <View>
                 <Text style={styles.newText}> New on Vegmantra ? Sign up!</Text>
               </View>
             </TouchableOpacity>

              <TouchableOpacity activeOpacity={.5}>
                <Button
                  full
                  primary
                  style={{ margin: 10 }}
                 style={styles.signupWrap} onPress={() => this.props.navigation.navigate("Signup")}>
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
                  style={styles.signInWithFacebookButton} >
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
          </View>
          </ScrollView>
          <View><Text style={styles.footer}>By registering you agree to the <Text style={styles.termsText}>Terms of use.</Text></Text></View>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        top:3,
        left:0,
        width: 350,
        height: 100,
        alignItems: 'center',
    },
    mark: {
      width: 400,
      height: 150,
      flex: 1,
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
    paddingHorizontal: 8,
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
    color:'#fff',
  },
  button: {
    backgroundColor: "#a7c740",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  buttonloginText: {
    color: "#000000",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  newText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
    fontSize:17,
    marginTop:10,
  },
  textRegister:{
        color:'white',
        margin:12,
    },
  social: {
    flexDirection: 'row',
  },
  signupWrap: {
      //backgroundColor: "transparent",
      backgroundColor: "black",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
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
      fontSize: 16, flex: 1, textAlign: 'center'
    },
    signInText: {
      color: 'white',
      marginLeft: 5,
      fontSize: 16, flex: 1, textAlign: 'center', color: 'black'
    },
    footer: {
        color: 'white',
        textAlign: "center",
        fontSize: 12,
        marginBottom: 10,
    },
    termsText: {
      color: 'white',
      fontSize: 12,
      textDecorationLine: 'underline',
    }
});
