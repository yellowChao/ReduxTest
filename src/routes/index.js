import {
  StackNavigator,
  addNavigationHelpers
} from 'react-navigation'
import React, { Component } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import { connect } from 'dva'
import Login from  '../pages/Login'
import Profile from  '../pages/Profile'

const AppNavigator = StackNavigator(
  {
    Login: {screen: Login},
    Profile: {screen: Profile}
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
)

export default class Router extends Component {

  render() {
    const navigation = addNavigationHelpers()
    console.log(AppNavigator.router.getStateForAction({}));
    return <AppNavigator />
  }
}
