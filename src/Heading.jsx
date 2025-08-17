
import React from 'react'

function Heading({head , sec}) {
  return (
<h1 className="text-center font-bold text-5xl">
  {head}
  {sec && (
    <>
      <br />
      <span className="text-2xl">{sec}</span>

    </>
  )}
</h1>

  )
}

export default Heading