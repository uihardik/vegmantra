import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
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
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class VeganTabs extends React.Component {
  render() {
    return (
      <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Chat App to talk some awesome people!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("Chat")}
        >
          <Text>Chat With People</Text>
        </Button>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        >
          <Text>Goto Profiles</Text>
        </Button>
      </Content>
      </Container>
    );
  }
}
