import React from 'react'

function Crousal({pera , title , image  , zero}) {
  return (
   <div className={`flex justify-center items-center ${zero == 0 ? 'flex-row' : 'flex-col'}`}>
   <div>
    <h1 className='text-4xl'>{title}</h1>
    <h1 className='font-bold text-amber-300'>{pera}</h1>
    <button className='border w-30 h-9 bg-amber-300'>click here</button>
    <button className='border w-30 h-9 bg-red-300'>ohh bhai shab</button>
   
   </div>
   <img className='w-[200px] ' src={image} alt="" />
   </div>
  )
}

export default Crousal

