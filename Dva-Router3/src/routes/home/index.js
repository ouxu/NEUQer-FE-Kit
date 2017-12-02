import React, { Component} from 'react'
import request from 'utils/request'
class HomePage extends Component {
  componentDidMount () {
    request({
      method: 'get',
      url: 'http://localhost:3003/users'
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.error(err)
    })
  }

  render () {
    return (
      <div>
        edit 'src/routes/home/index.js' to start
      </div>
    )
  }
}

export default HomePage
