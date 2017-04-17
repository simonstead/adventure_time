import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Finn extends Component {
  render() {
    const pic = {
      uri: "https://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png"
    }
    return (
      <Image source={pic} style={{width: 250, height: 400}}></Image>
    )
  }
}
