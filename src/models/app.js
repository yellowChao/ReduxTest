import { NavigationActions } from '../tools'
import { createAction } from '../tools'
import { get, post } from '../tools/fetch'

export default {
  namespace: 'appNS',
  state: {
    isLogin: false,
    userName: '路人甲',
    loginFailedReason: 'no reason',
    count: 0
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        count: (state.count + 1)
      }
    },
    loginSuccessed(state, { payload }) {
      return {
        ...state,
        isLogin: true,
        userName: payload.userName
      }
    },
    loginFailed(state, { payload }) {
      return {
        ...state,
        isLogin: false,
        loginFailedReason: payload.loginFailedReason
      }
    }
  },
  effects: {
    *login(payload, { put, call }) {
      // yield put({ type: 'loginSuccessed', {'name': 'yellow'} })
      // yield put(createAction('loginSuccessed')({'name': 'yellow'}))
      try {
        const res = yield call(() => get('https://httpbin.org/get'))
        if (res.url) {
          yield put(createAction('loginSuccessed')({'userName': 'yellow'}))
          yield put(NavigationActions.navigate({ routeName: 'Profile'}))
        } else {
          yield put(createAction('loginFailed')({'loginFailedReason': '账号密码错误'}))
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
