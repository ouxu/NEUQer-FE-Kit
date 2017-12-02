import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import dynamic from 'dva/dynamic'
import Layout from 'components/Layout'

const App = (props) => {
  const AsyncDemo = dynamic({component: () => import('./asyncDemo')})
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} />
        <Route path='/async' component={AsyncDemo} />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
