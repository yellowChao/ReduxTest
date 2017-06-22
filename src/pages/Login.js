/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import { connect } from 'dva'
import {
  NavigationActions
} from 'react-navigation'

@connect(
  appNS => ({ ...appNS }),
  {
    increase: () => (({ type: 'appNS/add' })),
    login: () => (({ type: 'appNS/login' }))
  }
)
export default class Login extends Component {

  static navigationOptions = {
    title: '登录页',
  }

  goLogin() {
    // this.props.navigation.navigate('Profile');
    this.props.login()
//     const navigateAction = NavigationActions.navigate({
//
//   routeName: 'Profile',
// })
//
// this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginButton} onPress={() => this.goLogin()}>
          <Text style={styles.loginLabel}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 200
  },
  loginLabel: {
    fontSize: 30,
    color: 'white'
  }
})
