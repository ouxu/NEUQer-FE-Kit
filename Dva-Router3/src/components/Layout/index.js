/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import { Link } from 'dva-react-router-3/router'
import logo from 'images/logo.svg'
import './index.less'

const LayoutContent = (props) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>

      <header className='App-nav'>
        <Link to='/home'> home </Link>
        <Link to='/async'> async </Link>
        <Link to='/404'> 404 </Link>
      </header>
      <div className='App-content'>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutContent
