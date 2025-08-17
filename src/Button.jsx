import React from 'react'

function Button({ item, index, setIndex , Get }) {
  return (
    <button
      onClick={() => {
        setIndex(item),
        Get(item)
      }}

      style={{
        padding : '10px 50px',
        border : '1px solid black',
        margin : '10px',
        backgroundColor : index == item ?  index : 'transparent'
      }}
    >
      {item}
    </button>
  )
}

export default Button
