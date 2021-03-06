import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Container,
  Header,
  Body,
  Right,
  Left,Button,Icon,Title
} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

import flagBlueImg from '../img/icon/Map_compressed/Bakery_64.png';
import flagPinkImg from '../img/icon/Map_compressed/cafe_64.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class MapsTabs extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        marker1: true,
        marker2: true,
      };
    }
    render() {
      return (
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            zoomControlEnabled={false}
            zoomEnabled={false}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker
              onPress={() => this.setState({ marker1: !this.state.marker1 })}
              coordinate={{
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE + SPACE,
              }}
              centerOffset={{ x: -18, y: -60 }}
              anchor={{ x: 0.69, y: 1 }}
              image={this.state.marker1 ? flagPinkImg : flagBlueImg}
            >
              <Text style={styles.marker}>X</Text>
            </Marker>
            <Marker
              onPress={() => this.setState({ marker2: !this.state.marker2 })}
              coordinate={{
                latitude: LATITUDE - SPACE,
                longitude: LONGITUDE - SPACE,
              }}
              centerOffset={{ x: -42, y: -60 }}
              anchor={{ x: 0.84, y: 1 }}
              image={this.state.marker2 ? flagBlueImg : flagPinkImg}
            />
            <Marker
              onPress={() => this.setState({ marker2: !this.state.marker2 })}
              coordinate={{
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE - SPACE,
              }}
              centerOffset={{ x: -42, y: -60 }}
              anchor={{ x: 0.84, y: 1 }}
              opacity={0.6}
              image={this.state.marker2 ? flagPinkImg : flagBlueImg}
            />
          </MapView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    marker: {
      marginLeft: 46,
      marginTop: 33,
      fontWeight: 'bold',
    },
  });
