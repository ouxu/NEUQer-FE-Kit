import 'babel-polyfill'
import dva from 'dva-react-router-3'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva-react-router-3/router'
import './reset.css'
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true
  }),
  history: browserHistory,
  onError (error, dispatch) {}
})

// 2. Model
app.model(require('./models/app.js'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
