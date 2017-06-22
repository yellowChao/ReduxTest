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
      gesturesEnabled: true,
    },
  }
)
@connect(({ router }) => ({ router }))
export default class Router extends Component {
  render() {
    const { dispatch, router } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: router })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}
