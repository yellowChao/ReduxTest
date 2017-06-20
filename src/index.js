import React from 'react';
import dva, { connect } from 'dva/mobile'
import { registerModels } from './models'
import Router from './routes'

// 1. Initialize
const app = dva();

// 2. Model
registerModels(app)

// 3. Router
app.router(() => <Router />)

// 4. Start
export default () => {
  return app.start()
}
