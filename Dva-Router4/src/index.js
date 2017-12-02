import dva from 'dva'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory';
import './reset.css'
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true
  }),
  history: createHistory(),
  onError (error, dispatch) {
    console.log(error)
  }
})

// 2. Model
app.model(require('./models/app.js'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
