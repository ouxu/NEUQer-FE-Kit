import React from 'react'
import NProgress from 'nprogress'
import { Helmet } from 'react-helmet'
import config from '../config/app'

import { connect } from 'dva-react-router-3'
import Layout from '../components/Layout'

const App = (props) => {
  const {loading} = props
  NProgress.start()
  !loading.global && NProgress.done()

  const {logoSrc = '', name = '', iconFontJS, iconFontCSS} = config
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>

      <Layout {...props} />
    </div>
  )
}

export default connect(({loading, app, user}) => ({loading, app, user}))(App)
