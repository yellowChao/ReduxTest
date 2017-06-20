import { createAction } from '../tools'

export default {
  namespace: 'appNS',
  state: {
    isLogin: false,
    count: 0
  },
  reducers: {
    add(state, { payload }) {
      return { ...state, count: (state.count + 1) }
    }
  },
  effects: {
    *save(payload, { put }) {
      // yield put({ type: 'add', {'name': 'yellow'} })
      yield put(createAction('add')({'name': 'yellow'}))
    }
  }
}
