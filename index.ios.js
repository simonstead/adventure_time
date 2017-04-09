/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';
import Finn from './components/finn';



export default class adventure_time extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finnHeight: 1,
      active_page: 0
    }
    this.onPress = this.press_me.bind(this);
    this.reset = this.reset.bind(this);
    this.pressHeaderButton = this.pressHeaderButton.bind(this);
  }
  press_me = () => {
    console.log(this.state.finnHeight);
    this.setState({finnHeight: this.state.finnHeight + 1})
    console.log(this.state.finnHeight);
  };
  reset = () => this.setState({ finnHeight: 1 });
  pressHeaderButton = (active_page) => {
    console.log(active_page);
    this.setState({active_page: active_page})
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      //   <Finn></Finn>
      // </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: "row", justifyContent: 'center', paddingTop: '5%'}}>
          <Button title="Page 1" onPress={() => this.pressHeaderButton('PAGE_ONE')}></Button>
          <Button title="Page 2" onPress={() => this.pressHeaderButton('PAGE_TWO')}></Button>
          <Button title="Page 3" onPress={() => this.pressHeaderButton('PAGE_THREE')}></Button>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <Text>{this.state.finnHeight}</Text>
          <Text>{this.state.active_page}</Text>
        </View>
        <View style={{flex: this.state.finnHeight, backgroundColor: 'steelblue'}}>
        <TouchableHighlight onPress={this.onPress}>
          <View>
            <Finn></Finn>
          </View>
        </TouchableHighlight>
        <Button title="Reset" onPress={this.reset}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('adventure_time', () => adventure_time);
