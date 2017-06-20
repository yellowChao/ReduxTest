/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

export default class Profile extends Component {

  static navigationOptions = {
    title: '个人信息页',
  }

  render() {
    return (
      <View>
        <Text>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
          Profile page Profile page Profile page Profile page
        </Text>
      </View>
    );
  }
}
