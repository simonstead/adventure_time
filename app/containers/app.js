import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';
import Finn from '../components/finn';
import TabBarExample from '../components/nav'

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
      <TabBarExample></TabBarExample>
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
