import React from 'react'
import App from './routes/app'
import { Router } from 'dva/router'

const RouterConfig = ({history, app}) => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

export default RouterConfig
