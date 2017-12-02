import React, { Component } from 'react'
import Layout from 'components/Layout'
import Item from './Item'
// @Layout
class AsyncDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: {
        value: 0
      }
    }
  }

  componentDidMount () {
    console.log(1)
  }

  add = () => {
    this.setState({
      count: {
        value: ++this.state.count.value
      }
    })
  }

  render () {
    return (
      <div onClick={this.add}>
        edit 'src/routes/home/index.js' to start
        <Item count={this.state.count} />
      </div>
    )
  }
}

export default AsyncDemo
