import { createAction, NavigationActions } from '../tools'
import { routerReducer } from '../routes'

const watcher = { type: 'watcher' }

const actions = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.RESET,
  NavigationActions.SET_PARAMS,
  NavigationActions.URI,
]

export default {
  namespace: 'router',
  state: {
    ...routerReducer(),
  },
  reducers: {
    apply(state, { payload: action }) {
      return routerReducer(state, action)
    },
  },
  effects: {
    watch: [
      function*({ take, call, put }) {
        while (true) {
          const payload = yield take(actions)
          yield put(createAction('apply')(payload))
          if (payload.type === 'Navigation/NAVIGATE') {
            console.log('11111',payload);
          }
        }
      }, watcher]
  },
}
