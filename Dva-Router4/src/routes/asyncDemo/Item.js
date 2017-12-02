import React from 'react'

const Item = ({count}) => {
  return (
    <div>{count.value||'0'}</div>
  )
}

export default Item