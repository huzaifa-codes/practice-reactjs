import React from 'react'

function AllCards({name , age , country  , width}) {
  return (
    <div className={`${width ? width : 'w-[300px]'} h-[300px] border p-4`}>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{country}</h1>
    </div>
  )
}

export default AllCards

