import React, { Component, PureComponent } from 'react'
import Item from './Item'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import {fromJS} from 'immutable'

@immutableRenderDecorator
class HomePage extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      count: fromJS({
        value: 0
      })
    }
  }

  componentDidMount () {
    console.log(1)
  }

  add = () => {
    this.setState({
      count: this.state.count.update('value', (value) => value + 1)
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

export default HomePage
