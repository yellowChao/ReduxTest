import appModel from './app'
import router from './router'

export const registerModels = app => {
  app.model(appModel)
  app.model(router)
}
