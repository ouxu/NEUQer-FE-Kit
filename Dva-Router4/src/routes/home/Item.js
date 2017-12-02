import React from 'react'

const Item = ({count}) => {
  return (
    <div>{count.get('value')}</div>
  )
}

export default Item