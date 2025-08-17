// import React from 'react';

// const FeatureSection = ({ tag, before, highlightWord, after, description, image, reverse, highlightColor }) => {
//   return (
//     <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-12 py-16`}>
      
//       {/* Text Block */}
//       <div className="flex-1 text-white px-6 md:px-0">
//         <p className="text-xs uppercase text-purple-400 mb-2 tracking-widest">{tag}</p>
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
//           {before}{' '}
//           <span className={highlightColor}>{highlightWord}</span>{' '}
//           {after}
//         </h2>
//         <p className="text-gray-300 text-base max-w-md">{description}</p>
//       </div>

//       {/* Image Block */}
//       <div className="flex-1 px-6 md:px-0">
//         <img
//           src={image}
//           alt="Feature Visual"
//           className="rounded-xl shadow-lg border border-purple-700"
//         />
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;


import React from 'react'

function FeatureSection({question , answer  , funq , index , array}) {
  return (
  <div>
      <div>{question}</div>
      <h1>{array.includes(index) && answer}</h1>
      <button onClick={()=> funq(index)}>upper</button>
  </div>
  )
}

export default FeatureSection



