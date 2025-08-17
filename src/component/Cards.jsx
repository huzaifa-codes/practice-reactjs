// // Card.jsx
// import React from "react";

// function Card({ type, text, author, company, stat, label }) {
//   return (
//     <div className="rounded-xl border shadow-md p-6 w-[300px] min-h-[200px] flex flex-col justify-between">
//       {type === "testimonial" ? (
//         <>
//           <p className="text-gray-800 text-sm">{text}</p>
//           <div className="flex justify-between mt-4">
//             <span className="font-bold">{author}</span>
//             <span className="text-gray-500">{company}</span>
//           </div>
//         </>
//       ) : (
//         <div>
//           <div className="bg-red-500 h-10 w-full rounded-t-xl -m-6 mb-4"></div>
//           <p className="text-gray-500 text-sm">{label}</p>
//           <h2 className="font-bold text-2xl mt-2">{stat}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;

// src/components/Card.jsx
// src/components/Card.jsx
import React from "react";

const Card = ({ icon, number, title, description, link ,   className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all ${className && className}`}>
      {/* Agar number prop mile to dikhado */}
      {number && (
        <span className="text-xl font-bold text-indigo-600 block mb-2">
          {number}
        </span>
      )}

      {/* Agar icon prop mile to dikhado */}
      {icon && (
        <div className="bg-gray-100 rounded-full p-4 mb-4 inline-flex">
          {icon}
        </div>
      )}

      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>

      {/* Agar link prop aaye to show button */}
      {link && (
        <a
          href={link.url}
          className="inline-block mt-4 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {link.text}
        </a>
      )}
    </div>
  );
};

export default Card;



// import React from "react";

// export default function Cards({
//   title,
//   years,
//   from,
//   institute,
//   location,
//   ribbon,
//   items,
//   borderColor,
//   titleColor,
// }) {
//   return (
//     <div
//       className={`relative border-2 border-${borderColor} rounded-lg p-6 w-72 text-center shadow-md`}
//     >
//       {ribbon && (
//         <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs px-2 py-1 rotate-45 origin-top-right translate-x-5 -translate-y-3">
//           {ribbon}
//         </div>
//       )}
//       <h2 className={`font-bold text-lg text-${titleColor}`}>{title}</h2>
//       {years && <p className="font-bold text-gray-800">{years}</p>}
//       {from && <p className="font-bold text-pink-500">{from}</p>}
//       {institute && (
//         <p className="font-semibold text-gray-800">{institute}</p>
//       )}
//       {location && <p className="font-semibold text-gray-800">{location}</p>}
//       {items && (
//         <ul className="mt-2 text-left list-disc list-inside">
//           {items.map((item, index) => (
//             <li key={index} className="font-semibold text-gray-800">
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

