import React, { useState } from 'react'

export default function Data({item }) {
    const [Data , setData] = useState(false)
    const Veriable = Data ? item : item.slice(0 , item.length / 2) + '...'
  return (
  <div>
      <div>{Veriable}</div>
    <button onClick={()=> setData(!Data) + check}>{Data ? 'Read less..' : 'read more...'}</button>
  </div>
  )
}
