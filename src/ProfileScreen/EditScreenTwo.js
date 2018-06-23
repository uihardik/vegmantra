import React from "react";
import { AppRegistry, Alert, StyleSheet, Image, View, Platform,  Animated, Keyboard } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DatePicker from 'react-native-datepicker';

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
  H1,Form, Item, Input,Label
} from "native-base";

const user = require("../img/avatar_circle_blue_512dp.png");
const backIcon = require("../img/icon/left-arrow_32.png");

export default class EditScreenOne extends React.Component {

 constructor(props) {
    super(props);
    this.state = {date:"2016-05-15"}
    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
              <Image source={backIcon} resizeMode="contain"/><Text> Back </Text>
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
    )
  });
  render() {
    let data = [{
     value: 'Banana',
   }, {
     value: 'Mango',
   }, {
     value: 'Pear',
   }];
    return (
      <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>
      <Container  style={styles.container}>
      <H1>Edit Profile</H1>
      <View style={{flexDirection: 'row',marginBottom:10,}}>
        <View style={{width: 40, flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={user} style={styles.user} resizeMode="contain"/>
        </View>

        <View style={{flex: 1,marginTop:15,marginLeft:10}}>
          <Text> Edit Photo </Text>
        </View>
      </View>
      <Content>
          <Form>
            <Label>Name *</Label>
            <Input placeholder="Name" />
            <Dropdown
              label='Veg status*'
              data={data}
            />
            <View style={styles.Birthbox}>
            <Label> Birth </Label>
            <DatePicker
            style={{width: 200,borderBottomWidth:0}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 0,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 0,
                borderWidth:0,
              },
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          </View>
          <View style={styles.locationbox}>
          <Label>Location *</Label>
          <GooglePlacesAutocomplete
              placeholder='Search'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}

              getDefaultValue={() => ''}

              query={{
                key: 'AIzaSyDTZtBvfEjtd9OOCLfVW_Kn9ziI_t1DTec',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
              }}

              styles={{
                textInputContainer: {
                  width: '100%',
                  backgroundColor:'transparent',
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 'auto',
                  color: '#5d5d5d',
                  fontSize: 16,
                  backgroundColor:'transparent',
                },
                description: {
                  fontWeight: 'normal'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}

              currentLocation={false}
               renderRightButton={() => <Text>Change location</Text>}
            />
            </View>
          </Form>
        </Content>
      </Container>
      <View style={{ height: 60 }} />
    </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      padding: (Platform.OS) === 'ios' ? 20 : 0,
  },
  proTitle:{
    fontSize:30
  },
  user:{
    width:50,
    height:50,
  },
  userlevel:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBottom:10,
    marginTop:10,
  },
  clm:{
    marginTop:10,
  },
  Birthbox: {
    backgroundColor:'gray',
  },
  locationbox: {
    marginTop:10,
  }
});
