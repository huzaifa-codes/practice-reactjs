// import React, { useRef, useState } from 'react'
// import { preconnect } from 'react-dom'



// export default function App() {

//   const [main, setMain] = useState({});
//   const [input , setInput] = useState('')
//  let [array , setArray] = useState([])

  


  

//   function addDeta(){
//    array.push(input)
//    setArray([...array])
//   }
//   function deleteTodo(index){
// array.splice(index , 1)
// setArray([...array])
//   }



//         function editTodo(index) {

//           let doubleArray = [...array];

//           doubleArray[index] = (
//             <input
//               type="text"
//               defaultValue={typeof array[index] === 'string' ? array[index] : main[index] || ''}
//               onChange={(e) => {
//                 setMain({ ...main, [index]: e.target.value });
//               }}
//             />
//           );
        
//           setArray([...doubleArray]);
        
//           // save condition
//           if (main[index]) {
//             doubleArray[index] = main[index];
//             setArray([...doubleArray]);
//             setMain({ ...main, [index]: '' });
//           }
//         }

        

// //   if(mains == true){
// //     array[index] = inpo
// //     setArray([...array])
// //  setMais(false)
// //   }
// //   else if(array[index] == inpo && mains === false){
// //     array[index] = main; 
// //     setArray([...array])
// //     setMain('')
  
  
// //   }


  
// //   else if(array[index] == input){
// //     array[index] = inpo;
// //     setArray([...array])
// //   }

// //   else if(main !== ''){
// //     array[index] = inpo;
// //     setArray([...array])

// //   }


  


//   return (
//    <div>
//     <input value={input} type="text" onChange={(e)=>{
// setInput(e.target.value)
//     }} />
//     <button onClick={()=>{
// addDeta()
//     }}>add todo</button>
//   <div>{array.map((item , index)=>{
//     return (
//       <div key={index}>
//         <p>{item}</p>
//         <button onClick={deleteTodo}>delete</button>
//         <button onClick={()=>{
//           editTodo(index)
//         }}>edit</button>
//       </div>
//     )
//   })}</div>
//    </div>
//   )
// }



// import React, { useState } from 'react';

// export default function App() {
//   const [mainArray, setMainArray] = useState([]);
//   const [array, setArray] = useState([]);
//   const [input, setInput] = useState('');

//   function addData() {
//     if (input.trim() !== '') {
//       const newObj = {
//         inputs: input,
//         check: true
//       };
//       const updatedArray = [...mainArray, newObj];
//       setMainArray(updatedArray);
//       setArray(updatedArray);
//       console.log(mainArray);
      
//       setInput('');
//     }
//   }

//   function detacheck(index) {
//     const updated = [...mainArray];
//     updated[index].inputs = <s>{updated[index].inputs}</s>;
//     updated[index].check = false;
//     setMainArray(updated);
//     setArray(updated);
//   }

//   function completeDeta() {
//     const filtered = mainArray.filter(item => item.check === false);
//     setArray(filtered);
//   }

//   function noComplete() {
//     const filtered = mainArray.filter(item => item.check === true);
//     setArray(filtered);
//   }

//   function showAll() {
//     setArray([...mainArray]);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type something..."
//       />
//       <button onClick={addData}>Add</button>
//       <button onClick={completeDeta}>Complete</button>
//       <button onClick={noComplete}>Not Complete</button>
//       <button onClick={showAll}>All</button>

//       <div>
//         {array.map((item, index) => (
//           <p onClick={() => detacheck(index)} key={index}>
//             {item.inputs}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react'

// export default function App() {
//     const [array , setArray] = useState([''])
//   return (
//    <div>
//        <button onClick={()=>{   
//       const nums =   array.slice(array.length / 2);
//         setArray([...nums])
//     }}>kam</button>
//        <button onClick={()=>{
//    setArray([...array , ...array]); 
//     }}>berha</button>
//     <div style={{
//         display : 'flex',
//         justifyContent : 'center',
//         alignItems : 'center',
//         flexWrap : 'wrap',
//         gap : '40px'
//     }}>{array.map((item , index)=>{
//         return (
//             <div key={index} style={{
//                 width : '300px',
//                 height : '300px',
//                 backgroundColor : 'red'
//             }}>

//             </div>
//         )
//     })}</div>
 
//    </div>
//   )
// }


// import React, { useState } from 'react'
// import './index.css'
// export default function App() {
//     const [input , setInput] = useState('')
//   const [array , setArray] = useState([])
//   const [beakupArray , setBeakupArray] = useState([])

//   function addTodo(){
//     const newarr = {input : input , check : true};
//     const newItem = [...array , newarr]
//     setArray([...newItem])
//     setBeakupArray([...newItem])
    
//   }

//   function checked(index){
// let newArray = [...array]
// newArray[index].check = !newArray[index].check
// setArray([...newArray])
// }

// function checkedlist(){
// const newArray = []
// for (let index = 0; index < beakupArray.length; index++) {
//    if(beakupArray[index].check == false){
//     newArray.push(beakupArray[index])
//    }
    
// }
// setArray(newArray)
// }

// function unchecked() {
//   const newArrays = []
//   for (let index = 0; index < beakupArray.length; index++) {
//     if (beakupArray[index].check == true) {
//       newArrays.push(beakupArray[index])
//     }
//   }

//   setArray(newArrays)
// }

// function allTodo(){
//      setArray([...beakupArray])
// }


//   return (
//     <div>
//  <input type="text" value={input} placeholder='enter some thing' onChange={(e)=>{
//     setInput(e.target.value)
    

//  }}/>
//     <button onClick={()=>{
// addTodo()
//     }}>Add</button>
//     <button onClick={()=>{
//         checkedlist()
//     }}>checked</button>
//     <button onClick={()=>{
//         unchecked()
//     }}>Unchecked</button>
//     <button onClick={()=>{
//         allTodo()
//     }}>all</button>
//     <div>{array.map((item , index)=>{
//         return (
//             <div key={index}>
//                 <div>{item.check ? <ul className='liststyle' onClick={()=>{
//                     checked(index)
//                 }}>
//                     <li>{item.input}</li>
//                 </ul>  : <ul className='slist'>
//                     <li ><s>{item.input}</s></li> </ul>}</div>
//             </div>
//         )
//     })}</div>
//     </div>
   
//   )
// }



// import React, { use, useState } from 'react'

// export default function App() {

//     const [array , setArray] = useState([
//   "🍎", "🍌", "🥭", "🍊", "🍇",
//   "🍍", "🍉", "🍓", "🥝", "🍑",
//   "🍎", "🍌", "🥭", "🍊", "🍇",
//   "🍍", "🍉", "🍓", "🥝", "🍑"
// ]);
// const [secArray , setSecArray] = useState(Array(array.length).fill(''))
// const [num , setNum] = useState([])

// function checkDeta(index){
//     if (secArray[index] !== "") return;
//   const update = [...array]
//   secArray[index] = update[index]
//   setSecArray([...secArray])
//    let sums  = [...num , index]
//    setNum(sums)
// const [first , secend] = sums;
// if(sums.length == 2){
// if(array[first] ==  array[secend]){
//   alert('bhai braber hai')
// }
// else{
//   setTimeout(() => {
//     const reset = [...secArray]
//     reset[first] = '';
//     reset[secend] = ''
//    setSecArray(reset)
//     setNum([])
//   }, 1000);
  
// }
// }
// }




//   return (
//     <div style={{
//       display : 'flex',
//       flexWrap : 'wrap',
//       gap : '20px',
//       justifyContent : 'center',
//        maxWidth: 'calc((100px + 20px) * 5)',
//            margin: '0 auto',
//            alignItems : 'center'
//     }}>
//       {secArray.map((item , index)=>{
//         return (
//           <div onClick={()=>{
//             checkDeta(index)
//           }} style={{
//             width : '100px',
//             height : '100px',
//             backgroundColor : 'blue'
//           }} key={index}>
//             {item }
//           </div>
//         )
//       })}
//     </div>
//   )
// }



// import React, { useState } from 'react'

// export default function App() {
//   const [array , setArray] = useState([
//   { id: 1, name: "Ali", age: 18  ,  check : true},
//   { id: 2, name: "Sara", age: 19 , check : true},
//   { id: 3, name: "Usman", age: 17 , check : true },
//   { id: 4, name: "Ayesha", age: 18 , check : true },
//   { id: 5, name: "Zain", age: 20 , check : true }
// ])
// const [empty , setEmpty] = useState([])

// function checkDeta(index){
//    if(!empty.includes(array[index].id)){
//     empty.push(array[index].id)
//     setEmpty([...empty])
//    }

//    else{
//     let num = empty.filter((item)=>{
//     return item !== array[index].id
//     })
//     setEmpty(num)
//    }
// }
//   return (
//    <div>{array.map((item , index)=>{
//     return (
//       <div key={index} onClick={()=>{
//         checkDeta(index)
//       }} style={{
//         width : '200px',
//         height : '200px',
//         border : '1px solid black'


//       }}>{empty.includes(item.id) ? <>
//        <h1>{item.id}</h1>
//         <h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//       </> : ''}</div>
//     )
 
//    })}</div>
//   )
// }



// import React, { useState } from 'react'

// export default function App() {
//   const [array , setArray] = useState([{
//     img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXggwp_mQYQuTN0v-z3GUOXpoWcsBBWijdaQ&s',
//   },{
//     img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXggwp_mQYQuTN0v-z3GUOXpoWcsBBWijdaQ&s'
//   }])

//   const [image , setImage] = useState([{
//     img : 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5Ni0wMTFfMS1rcm9pcjFmNC5qcGc.jpg',
//     check : true
//   },{
//     img : 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5Ni0wMTFfMS1rcm9pcjFmNC5qcGc.jpg',
//      check : true
//   }])

// function checkDeta(index) {
// const saveImg = image[index].img;
// const ubdate = [...image]
// ubdate[index].img = array[index].img
// setImage(ubdate)

// setTimeout(() => {
//   const check = [...ubdate]
//   check[index].img = saveImg;
//   setImage(check)
// }, 1000);
// }


//   return (
//    <div style={{
//     display : 'flex',
//     justifyContent : 'center',
//     gap : '10px'
//    }}>
//     {image.map((item , index)=>{
//       return (
//         <div key={index} onClick={()=>{
//           checkDeta(index)
//         }} style={{
//           width : '500px',
//           height : '500px',
//           border : '1px solid black',
//           margin : '10px'
//         }}>
//  <img  style={{
//   width : '500px',
//   height : '500px'
//  }} src={item.img} alt="" />
//         </div>
//       )
//     })}
//    </div>
//   )
// }
// import React, { useState } from 'react'

// export default function App() {
//   const [array] = useState([
//     "🍎", "🍌", "🥭", "🍊", "🍇",
//     "🍍", "🍉", "🍓", "🥝", "🍑",
//     "🍎", "🍌", "🥭", "🍊", "🍇",
//     "🍍", "🍉", "🍓", "🍌", "🍎"
//   ]);
//   const [secArray, setSecArray] = useState(Array(array.length).fill(''));
//   const [num, setNum] = useState([]);

//   function checkDeta(index) {
//     if (secArray[index] !== "") return;

//     const newSecArray = [...secArray];
//     newSecArray[index] = array[index];
//     setSecArray(newSecArray);

//     const newNum = [...num, index];
//     setNum(newNum);

//     if (newNum.length === 2) {
//       const [first, second] = newNum;

//       setTimeout(() => {
//         if (array[first] === array[second]) {
//           // Match: mark as removed
//           const updated = [...newSecArray];
//           updated[first] = 'removed';
//           updated[second] = 'removed';
//           setSecArray(updated);
//         } else {
//           // No match: hide again
//           const reset = [...newSecArray];
//           reset[first] = '';
//           reset[second] = '';
//           setSecArray(reset);
//         }
//         setNum([]);
//       }, 1000);
//     }
//   }

//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(5, 100px)',
//       gridGap: '10px',
//       justifyContent: 'center', 
//       height : '100vh'
//     }}>
//       {secArray.map((item, index) => (
//         <div
//           key={index}
//           onClick={() =>  checkDeta(index) }
//           style={{
//             width: '100px',
//             height: '100px',
//             border: item === 'removed' ? 'none' : '1px solid black',
//             backgroundColor: item == '' ? 'blue' : 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '2rem',
//             cursor: item === '' ? 'pointer' : 'default',
//             userSelect: 'none'
//           }}
//         >
//           {item == 'removed' ? '' : item}
//         </div>
//       ))}
//     </div>
//   )
// }



// import React, { useState } from 'react'

// export default function App() {
//   const [input , setInput] = useState('')
//   const [array , setArray] = useState([])
//   const [filter , setFilter] = useState('all')

//   function addTodo(){
//     array.push({
//       check : false,
//       input : input
//     })

//     setArray([...array])
// }

//       const filtred = array.filter((item)=>{
//       if(filter == 'complete') return item.check
//        if(filter == 'incomplete') return !item.check
//        return true
//     })

//   function checkDeta(index) {
//      let newArray = [...array];
//     newArray[index] = {
//       ...newArray[index],
//     check : true,
//     };
//     setArray(newArray);
// }


//   return (
//     <div>
//       <button onClick={()=>{
//         setFilter('all')
//       }}>all</button>
//       <button onClick={()=>{
//         setFilter('incomplete')
//       }}>incomplete</button>
//       <button onClick={()=>{
//         setFilter('complete')
//       }}>complete</button>
//       <input type="text" onChange={(e)=>{
//         setInput(e.target.value)
//       }} />
//       <button onClick={()=>{
//         addTodo()
//       }}>add todo</button>
// <div>{filtred.map((item , index)=>{
//   return (
//     <h1 style={{
//       textDecoration : item.check ? 'line-through' : 'none'
//     }} onClick={()=>{
//       checkDeta(index)
//     }}>{item.input}</h1>
//   )
// })}</div>
//     </div>
//   )
// }



//  import React, { useState } from 'react'

// export default function App() {
//   const [mainArray, setMainArray] = useState([]);
//   const [array, setArray] = useState([]);
//   const [input, setInput] = useState('');

//   function addTodo() {
//      const obj = {
//       check : true,
//       inputs : input
//      }
//      const ubdatesarray = [...mainArray , obj]
//      setArray(ubdatesarray)
//      setMainArray(ubdatesarray)
//   }



//   function checkDeta(index) {
//   const ubdate = [...array]
//   ubdate[index].check = false;
//   setArray(ubdate)
//   setMainArray(ubdate)
//   }

//   function checked() {
//     const filtered = mainArray.filter(item => item.check === false);
//     setArray(filtered);
//   }

//   function unchecked() {
//     const filtered = mainArray.filter(item => item.check === true);
//     setArray(filtered);
//   }

//   function allDeta(){
//     setArray([...mainArray])
//   }

//   return (
//     <div>
//       <button onClick={checked}>checked</button>
//       <button onClick={unchecked}>unchecked</button>
//       <button onClick={()=>{
//         allDeta()
//       }}>all deta</button>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addTodo}>click</button>

//       <div>
//         {array.map((item, index) => (
//           <div key={index}>
//             {item.check === false ? (
//               <h1><s>{item.inputs}</s></h1>
//             ) : (
//               <h1 onClick={() => checkDeta(index)}>{item.inputs}</h1>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function App() {
//   const [array, setArray] = useState([]);
//   const [input, setInput] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   function addTodo() {
//     if (input.trim() === '') return; // Empty input prevent karein

//     if (editMode) {
//       const updatedArray = [...array];
//       updatedArray[editIndex] = input;
//       setArray(updatedArray);
//       setEditMode(false);
//       setEditIndex(null);
//     } else {
//       setArray([...array, input]);
//     }

//     setInput('');
//   }

//   function editTodo(index) {
//     setInput(array[index]);
//     setEditMode(true);
//     setEditIndex(index);
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         type="text"
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addTodo}>
//         {editMode ? 'Save' : 'Add Todo'}
//       </button>

//       <div>
//         {array.map((item, index) => (
//           <div key={index}>
//             <h1>{item}</h1>
//             <button onClick={() => editTodo(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react'

// export default function App() {
//        const [array , setArray] = useState([
//   "🍎", "🍌", "🥭", "🍊", "🍇",
//   "🍍", "🍉", "🍓", "🥝", "🍑",
//   "🍎", "🍌", "🥭", "🍊", "🍇",
//   "🍍", "🍉", "🍓", "🍌", "🍎"
// ]);
// const [timer , setTimer] = useState(10)
// const [empty , setEmpty] = useState(Array(array.length).fill(''))
// const [deta , setDeta] = useState([])

// useEffect(() => {
//   const i = setInterval(() => {
//     setTimer(prev => prev - 1); // prev state se update karo
//   }, 1000);


//   return () => {
//     clearInterval(i); // cleanup jab component unmount ho ya re-render ho
//   };
// }, []);

// useEffect(()=>{
//     if (timer === 0) {
//     setEmpty(Array(array.length).fill(''));
//   } 
// } , [timer])


// function detaCheck(index){
//   const ubdate = [...empty]
//   ubdate[index] = array[index]
//   setEmpty(ubdate)

//   const alldeta = [...deta , index]
//   setDeta(alldeta)





// }
//   return (
// <div>
//   <h1>{timer}</h1>
//       <div style={{
// display : 'flex',
// justifyContent : 'center',
// flexWrap : 'wrap',
// gap : '10px',
// maxWidth : '500px',
//     }}>{empty.map((item , index)=>{
//       return (
//         <div onClick={()=>{
//           detaCheck(index)
//         }} style={{
//           width : '100px',
//           height : '100px',
//           backgroundColor : 'bisque'
//         }}>{item}</div>
//       )
//     })}</div>
// </div>
//   )
// }



// import React, { useEffect, useState } from 'react'

// export default function App() {
//     const [array, setArray] = useState([
//         { img: 'https://cdn.pixabay.com/photo/2022/01/22/13/14/baby-6957222_640.jpg' },
//         { img: 'https://cdn.pixabay.com/photo/2024/07/14/00/34/great-wall-motor-8893216_640.jpg' },
//         { img: 'https://cdn.pixabay.com/photo/2016/02/19/22/35/ferrari-1211253_640.jpg' }
//     ])
//     const [singleImg, setSingleImg] = useState(null)

//    useEffect(()=>{
//   const handle = () =>{
//     if(singleImg != null){
//         setSingleImg(null)
//     }
//   }

//   document.body.addEventListener('click' , handle)
//    } , [singleImg])
   
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 gap: '10px',
//                 backgroundColor : singleImg !== null ? 'lightblue' : 'white',
//             }}>
//             {array.map((item, index) => (
//                 <div
//                     key={index}
//                   style={{
//   filter: singleImg !== null && singleImg !== index ? 'blur(6px)' : 'none',
//   opacity: singleImg !== null && singleImg !== index ? 0.3 : 1,
//   transition: '0.3s ease'
// }}
//                 >
//                     {singleImg === index ? (
//                         <img
//                             src={item.img}
//                             alt=""
//                             onClick={(e) => e.stopPropagation()}
//                             style={{ width: '800px', height: '500px', cursor: 'pointer' }}
//                         />
//                     ) : (
//                         <div
//                             onClick={(e) => {
//                                 e.stopPropagation()
//                                 setSingleImg(index)
//                             }}
//                         >
//                             <img
//                                 style={{
//                                     width: '200px',
//                                     height: '100px',
//                                     cursor: 'pointer'
//                                 }}
//                                 src={item.img}
//                                 alt=""
//                             />
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     )
// }




// import { useState } from "react";

// const faqData = [
//   { question: "React kya hai?", answer: "React ek JavaScript library hai UI banane ke liye." },
//   { question: "State kya hoti hai?", answer: "State ek object hota hai jisme component ka data store hota hai." },
//   { question: "Props kya hain?", answer: "Props ek component ko data bhejne ka tareeqa hain." },
// ];

// export default function FAQ() {
//   const [openIndexes, setOpenIndexes] = useState([]);

//   const toggleAnswer = (index) => {
//     const nextIndex = (index + 1) % faqData.length;
//     const newOpen = [index, nextIndex];

//     const alreadyOpen = openIndexes.length === 2 &&
//       openIndexes.includes(index) &&
//       openIndexes.includes(nextIndex);

//     if (alreadyOpen) {
//       setOpenIndexes([]);
//     } else {
//       setOpenIndexes(newOpen);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto mt-10">
//       {faqData.map((item, index) => (
//         <div
//           key={index}
//           className="border-b border-gray-300 py-4 cursor-pointer"
//           onClick={() => toggleAnswer(index)}
//         >
//           <h3 className="text-lg font-semibold">{item.question}</h3>
//           {openIndexes.includes(index) && (
//             <p className="text-gray-600 mt-2">{item.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



// import React, { useState } from 'react'

// export default function App() {
//     const [array , setArray] = useState(['Huzaifa' , 'Ali' ,   'Hamza' , 'Waqar' , 'Haider'])
//     function checkDeta(index){
//              const num = array[index]
//       const sec = [...array]
//          sec.splice(index , 1)
//       sec.unshift(num)
   
//       setArray(sec)
//      }
//   return (
//     <div>{array.map((item , index)=>{
// return (
//     <div onClick={()=>{
//         checkDeta(index)
//     }}>{item}</div>
// )
//     })}</div>
//   )
// }

// import React, { useState } from 'react';

// const images = [
//   'https://cdn.pixabay.com/photo/2024/08/31/06/24/river-9010602_640.jpg',
//   'https://cdn.pixabay.com/photo/2025/05/14/16/24/chimneys-9599975_640.jpg',
//   'https://cdn.pixabay.com/photo/2025/05/30/17/16/mountain-9631830_640.jpg',
//   'https://cdn.pixabay.com/photo/2023/01/18/07/25/road-7726202_1280.jpg',
//   'https://cdn.pixabay.com/photo/2025/04/23/20/13/mountains-9553822_640.png',
//   'https://cdn.pixabay.com/photo/2025/05/04/11/36/asia-9578108_640.jpg',
//     'https://cdn.pixabay.com/photo/2024/08/31/06/24/river-9010602_640.jpg',
//   'https://cdn.pixabay.com/photo/2025/05/14/16/24/chimneys-9599975_640.jpg',
//   'https://cdn.pixabay.com/photo/2025/05/30/17/16/mountain-9631830_640.jpg',
//   'https://cdn.pixabay.com/photo/2023/01/18/07/25/road-7726202_1280.jpg',
//   'https://cdn.pixabay.com/photo/2025/04/23/20/13/mountains-9553822_640.png',
//   'https://cdn.pixabay.com/photo/2025/05/04/11/36/asia-9578108_640.jpg',
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCount = 6;

//   const handleNext = () => {
//     if (currentIndex + visibleCount >= images.length - 1) {
//       setCurrentIndex(0); 
//     } else {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//     setCurrentIndex(currentIndex - 1);
//   } else {
//     setCurrentIndex(images.length - 1 - visibleCount);
//   }
//   };

//   const visibleImages = images.slice(currentIndex , currentIndex + visibleCount);

//   return (
//     <div style={styles.wrapper}>
//       <button
//         style={{
//           ...styles.button,
//           left: '10px',
//           opacity: 1,
//         }}
//         onClick={handlePrev}
//       >
//         ⬅
//       </button>

//       <div style={styles.carousel}>
//         {visibleImages.map((img, i) => (
//           <img key={i} src={img} alt={`img-${i}`} style={styles.image} />
//         ))}
//       </div>

//       <button
//         style={{
//           ...styles.button,
//           right: '10px',
//           opacity: 1,
//         }}
//         onClick={handleNext}
//       >
//         ➡
//       </button>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     position: 'relative',
//     width: '100%',
//     maxWidth: '960px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   carousel: {
//     display: 'flex',
//     gap: '10px',
//     overflow: 'hidden',
//     width: '100%',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '300px',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '10px',
//     transition: 'all 0.3s ease',
//   },
//   button: {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     background: 'rgba(0,0,0,0.6)',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 15px',
//     cursor: 'pointer',
//     borderRadius: '50%',
//     fontSize: '20px',
//     zIndex: 1,
//   },
// };

// export default ImageCarousel;




// import React, { useState } from 'react'

// export default function App() {
//   const [color] = useState(["red", "blue", "green", "yellow", "purple", "orange", "black", "white"]);
//   const [box , setArray] = useState([])
//   const [num , setNum] = useState('')
//   const deta = (item) =>{
// if(box.length >= 1){
//  setNum(item)

// }
   
//   }

//   function addArray(){
//     setArray([...box , 'none'])
//   }

//   function boxDeta(index){
//   const updatedBoxes = box.map((color, i) =>
//       i === index ? num : color
//     );
//     setArray(updatedBoxes);
//   }
//   return (
//    <div>
//      <div>{color.map((item)=>{
//       return (
//         <button onClick={()=>{
// deta(item)
//         }} style={{
//           backgroundColor : item
//         }}>{item}</button>
//       )
//     })}</div>
//     <div style={{
//       display : 'flex',
//       justifyContent : 'center',
//       flexWrap : 'wrap'
//     }}>{box.map((item , index)=>{
//       return (
//         <div onClick={()=>{
//           boxDeta(index)
//         }} style={{
//           width : '100px',
//           height : '100px',
//           border : '1px solid black',
//           backgroundColor : item
//         }}></div>
//       )
//     })}</div>
//        <button onClick={()=>{
//         addArray()
//        }}>add Array</button>
//    </div>

//   )
// }


// import React, { useEffect, useState, useRef } from 'react';

// const RandomImage = () => {
//   const imageBatches = [
//     [
//       'https://cdn.pixabay.com/photo/2018/03/23/16/03/the-horse-3254102_640.png',
//       'https://cdn.pixabay.com/photo/2017/07/30/02/07/cat-2553267_640.png',
//       'https://cdn.pixabay.com/photo/2019/12/04/13/26/animal-4672715_640.png',
//       'https://cdn.pixabay.com/photo/2020/01/28/20/47/cow-4800882_640.jpg',
//       'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
//     ],
//     [
//       'https://cdn.pixabay.com/photo/2020/04/06/18/10/bull-5006054_640.jpg',
//       'https://cdn.pixabay.com/photo/2020/04/28/14/24/dog-5104871_640.jpg',
//       'https://cdn.pixabay.com/photo/2016/11/21/17/38/elephant-1845803_640.jpg',
//       'https://cdn.pixabay.com/photo/2017/09/25/13/12/owl-2783912_640.jpg',
//       'https://cdn.pixabay.com/photo/2017/03/06/19/14/bird-2127313_640.jpg'
//     ]
//   ];

//   const [batchIndex, setBatchIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const startInterval = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       const currentBatch = imageBatches[batchIndex];
//       const randomIndex = Math.floor(Math.random() * currentBatch.length);
//       setImageIndex(randomIndex);
//     }, 1000);
//   };

//   const stopInterval = () => {
//     clearInterval(intervalRef.current);
//   };

//   const nextBatch = () => {
//     if (batchIndex < imageBatches.length - 1) {
//       setBatchIndex(batchIndex + 1);
//       setImageIndex(0);
//     }
//   };

//   useEffect(() => {
//     startInterval();
//     return () => clearInterval(intervalRef.current);
//   }, [batchIndex]);

//   return (
//     <div className="text-center mt-10 space-y-4">
//       <img
//         src={imageBatches[batchIndex][imageIndex]}
//         alt="Random"
//         className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-full transition-all duration-500"
//       />

//       <div className="space-x-4">
//         <button
//           onClick={stopInterval}
//           className="px-6 py-2 bg-red-600 text-white rounded-full"
//         >
//           Stop
//         </button>

//         <button
//           onClick={nextBatch}
//           className="px-6 py-2 bg-blue-600 text-white rounded-full"
//         >
//           Next Batch
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RandomImage;






//       import React, { useEffect, useState } from 'react'
      
//       export default function App() {
//           const firstimage  = [ 'https://cdn.pixabay.com/photo/2024/12/18/21/27/christmas-9276268_640.jpg',
//       'https://cdn.pixabay.com/photo/2024/12/18/21/27/christmas-9276268_640.jpg',
//       'https://cdn.pixabay.com/photo/2024/12/18/21/27/christmas-9276268_640.jpg',
//       'https://cdn.pixabay.com/photo/2024/12/18/21/27/christmas-9276268_640.jpg',
//       'https://cdn.pixabay.com/photo/2024/12/18/21/27/christmas-9276268_640.jpg']

//       const secImage = [
//         'https://cdn.pixabay.com/photo/2025/05/30/17/15/mountain-9631829_640.jpg',
//         'https://cdn.pixabay.com/photo/2022/11/29/19/27/city-7625204_640.jpg' ,
//         'https://cdn.pixabay.com/photo/2025/04/01/11/26/blue-tit-9506658_640.jpg' ,
//         'https://cdn.pixabay.com/photo/2025/04/12/09/43/leopard-1-9529841_640.jpg',
//         'https://cdn.pixabay.com/photo/2025/05/02/07/28/panorama-9573161_640.jpg']

// const [check , setCheck]= useState(false)
// const [current , setCurrent] = useState(firstimage)

//       useEffect(()=>{
//         setTimeout(() => {
//    setCurrent(check ? secImage : firstimage)
//           setCheck(!check)
          
//         }, 2000);
//       },[check])
 
//             return (
//         <div>
//           <div style={{
//             display : 'flex',
//             justifyContent : 'center',
//             flexWrap : 'wrap',
//             gap : '10px'
//           }}>{current.map((item)=>{
//             return (
//            <img src={item} alt="" />
//             )
//           })}</div>
//         </div>
//       )

//       }
      

// import React, { useEffect, useState } from "react";
// import "./index.css";

// const generateBall = () => ({
//   id: Math.random(),
//   left: Math.floor(Math.random() * 90) + 5, // random horizontal position
//   duration: Math.random() * 2 + 3, // duration between 3s to 5s
// });

// export default function App() {
//   const [balls, setBalls] = useState([]);

//   useEffect(() => {
//     const initialBalls = Array.from({ length: 10 }, generateBall);
//     setBalls(initialBalls);
//   }, []);

//   const handleRemove = (id) => {
//     setBalls((prev) => prev.filter((b) => b.id !== id).concat(generateBall()));
//   };

//   return (
//     <div className="game-container">
//       {balls.map((ball) => (
//         <div
//           key={ball.id}
//           className="ball"
//           style={{
//             left: `${ball.left}%`,
//             animationDuration: `${ball.duration}s`,
//           }}
//           onClick={() => handleRemove(ball.id)}
//         ></div>
//       ))}
//     </div>
//   );
// }



// import React, { useState } from 'react';

// export default function App() {
//   const arrays = [
//     ['Item A1', 'Item A2'],
//     ['Item B1', 'Item B2'],
//     ['Item C1', 'Item C2'],
//     ['Item D1', 'Item D2'],
//     ['Item E1', 'Item E2']
//   ];

//   const [hiddenIndexes, setHiddenIndexes] = useState([]);

//   const handleClick = (index) => {  
//     if (hiddenIndexes.includes(index)) {
//       setHiddenIndexes(hiddenIndexes.filter(i => i !== index));
//     } else {
//       setHiddenIndexes([...hiddenIndexes, index]);
//     }
//   };

//   return (
//     <div style={{ padding: '10px' }}>
//       {arrays.map((arr, index) => (
//         <div key={index}>
//           <button onClick={() => handleClick(index)}>
//             Toggle Array {index + 1}
//           </button>

//           {!hiddenIndexes.includes(index) && (
//             <div style={{ margin: '10px', border: '1px solid gray',}}>
//               {arr.map((item, i) => (
//                 <p key={i}>{item}</p>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from 'react'

// export default function App() {
//     const [input , setInput] = useState('')
// const [array , setArray]= useState([])
// const [filter , setFilter] = useState('all')
//     function addTodo(){
//   if (input.trim() === '') return;
//    setArray([...array , {id : Date.now() , completed : false , input : input }])
//    console.log(array);
   
//   };

//   function  toggleTask(id){
//    setArray(
//     array.map((item)=> {
//         return item.id == id ? {...item , completed : !item.completed} : item
//      })
//    )
//   }


//   const Main = array.filter((item)=>{
//       if (filter === 'all') return true;
//       if(filter == 'complete') return item.completed;
//       if(filter == 'uncomplete') return !item.completed
//   })

//   return (
//    <div>
//     <button onClick={()=>setFilter('complete')}>complete</button>
//     <button  onClick={()=>setFilter('uncomplete')}>uncomplete</button>
//     <button  onClick={()=>setFilter('all')}>all</button>
//     <input type="text" onChange={(e)=>{
// setInput(e.target.value)
//     }}/>
//     <button onClick={()=>{
//         addTodo()
//     }}>Add Todo</button>
//     <div>{Main.map((item)=>{
//         return (
//             <div key={item.id}>
//                 <input
//               type="checkbox"
//               checked={item.completed}
//               onChange={() => toggleTask(item.id)}
//             />
//                 <p style={{
//                      textDecoration: item.completed ? 'line-through' : 'none',
//                 }}>{item.input}</p>
//             </div>
//         )
//     })}</div>
//    </div>
//   )
// }

// import React, { useState } from 'react';

// const images = [
//   'https://img.freepik.com/free-vector/landscape-scene-night_1048-2212.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//   'https://img.freepik.com/premium-photo/rear-view-man-looking-landscape-while-standing-observation-point_1048944-8912719.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//   'https://img.freepik.com/free-photo/female-admiring-breathtaking-sunset-green-forests_181624-10935.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//   'https://img.freepik.com/free-photo/landscape-with-calm-sea_1048-4777.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
// ];

// export default function App() {
//   const [visibleIndex, setVisibleIndex] = useState(null);

//   const handleClick = (index) => {
//     if (visibleIndex === index) {
//       setVisibleIndex(null); // Show all
//     } else {
//       setVisibleIndex(index); // Show only clicked
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`img-${index}`}
//           onClick={() => handleClick(index)}
//           style={{
//             ...styles.image,
//             display: visibleIndex === null || visibleIndex === index ? 'block' : 'none',
//             transform: visibleIndex === index ? 'scale(1.05)' : 'scale(1)',
//             boxShadow: visibleIndex === index ? '0 8px 16px rgba(0,0,0,0.4)' : '0 4px 8px rgba(0,0,0,0.2)',
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '20px',
//     padding: '30px',
//     backgroundColor: '#f5f5f5',
//     minHeight: '100vh',
//   },
//   image: {
//     width: '200px',
//     height: '150px',
//     objectFit: 'cover',
//     borderRadius: '12px',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   },
// };


// import React, { useState } from 'react';
// import './App.css';

// export default function App() {
//   const images = [
//     'https://img.freepik.com/free-vector/landscape-scene-night_1048-2212.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//     'https://img.freepik.com/premium-photo/rear-view-man-looking-landscape-while-standing-observation-point_1048944-8912719.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//     'https://img.freepik.com/free-photo/female-admiring-breathtaking-sunset-green-forests_181624-10935.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//     'https://img.freepik.com/free-photo/landscape-with-calm-sea_1048-4777.jpg?ga=GA1.1.7045372.1748514072&semt=ais_hybrid&w=740',
//   ];


//   const [single , setSingle] = useState(null)

//   return (
//    <div>
//      <div className="gallery">
//       {images.map((item)=>{
//         return (
//         <div>
//           <img onClick={()=>{
//             setSingle(item)
//           }} src={item} alt="" width={200} height={200}/>
//         </div>
//         )
//       })}
//     </div>

// {single && (
//   <div className="overlay"  onClick={()=>{
//     setSingle(null)
//   }}>
//     <img src={single} alt="" className="popup-image" />
//   </div>
// )}

//    </div>
//   )

// }

// import React, { useState } from 'react'
// import { unstable_batchedUpdates } from 'react-dom';

// export default function App() {
//   const [array , setArray] = useState([{
//     name : 'huzaifa',
//     checked : false,
//     age : 17,
//     id : Date.now()
//   }])

//   function changeDeta(item){
// setArray([...array , { age : 18 , checked : !item.checked}])
//   }
//   return (
//     <div>{array.map((item , index)=>{
//       return (
//         <div onClick={()=>{
//           changeDeta(item)
//         }}> 
//           <h1>{item.name}</h1>
//           <h1>{item.checked ? item.age : ''}</h1>
      
//         </div>

//       )
//     })}</div>
//   )
// }


// import React, { useState } from 'react';
// export default function App() {
//   const [array, setArray] = useState(Array(10).fill(''));

//   function DivDeta(index) {
//     setArray(prev =>
//       prev.map((item, i) =>
//         i === index ? (item === 'red' ? '' : 'red') : item
//       )
//     );
//   }
  
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//       {array.map((item, index) => (
//         <div
//           key={index}
//           onClick={() => DivDeta(index)}
//           style={{
//             width: '100px',
//             height: '100px',
//             border: '1px solid black',
//             backgroundColor: item,
//             cursor: 'pointer',
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }



// import React, { useState } from 'react'

// export default function App() {
//   const [color] = useState(['red'  , 'blue' , 'green' , 'yellow' , 'brown' , 'pink' , 'black'])
//   const [array, setArray] = useState(Array(color.length).fill(''));
//   const [single , setSingle] = useState('')

//   function checkcolor(index){
//  setArray(prev =>
//     prev.map((item , i)=>{
//         console.log(prev);
        
//         return (

//             i == index ? single : item
            
//         )
//     })
//  )
//   }
//   return (
//     <div>
//       <div style={{
//         display : 'flex',
//         justifyContent : 'center',
//         gap : '10px',
    
//       }}>
//         {color.map((item)=>{
//           return (
//             <div onClick={()=>{
//               setSingle(item)
//             }} style={{
//               backgroundColor : item,
//                   border : '1px solid black',
//               width : '100px',
//               color : 'white'
//             }}>{item}</div>
//           )
// })}
//       </div>
//       <div style={{
//         display : 'flex',
//         justifyContent : 'center',
//         alignItems : 'center'
//       }}>{array.map((item , index)=>{
//         return (
//   <div onClick={()=>{
//     checkcolor(index)
//   }} style={{
//     width : '100px',
//     height : '100px',
//     border : '1px solid black',
//     backgroundColor : item
//   }}></div>
//         )
      
//       })}</div>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function App() {
//   const [Deta , setDeta] = useState([
//   {
//     id: 1,
//     question: "What is React?",
//     answer: "React is a JavaScript library for building user interfaces.",
// show : false
//   },
//   {
//     id: 2,
//     question: "What is a component in React?",
//     answer: "A component is a reusable piece of UI in a React application.",
//     show : false
//   },
//   {
//     id: 3,
//     question: "What is useState?",
//     answer: "useState is a React Hook used to manage state in a functional component.",
//     show : false
//   },
//   {
//     id: 4,
//     question: "What is JSX?",
//     answer: "JSX stands for JavaScript XML and allows writing HTML inside JavaScript.",
//     show : false
//   },
//   {
//     id: 5,
//     question: "What are props in React?",
//     answer: "Props are inputs passed to components to make them dynamic and reusable.",
//     show : false
//   }
// ]);

//   const [visibleIndexes, setVisibleIndexes] = useState([]);

//  const giveAnswer = (index) => {
//     setVisibleIndexes((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index) // if already shown, hide it
//         : [...prev, index] // otherwise add it to show
//     );
//   };

//   return (
//     <div>{Deta.map((item , index)=>{
//       return (
//         <div onClick={()=>{
//           giveAnswer(index)
//         }} key={index}>
//           <h1>{item.question}</h1>
//           <h1>{visibleIndexes.includes(index) && item.answer}</h1>
//         </div>
//       )
//     })}</div>
//   )
// }
// import React, { useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState([
//     {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//       {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//       {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//       {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//       {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//       {
//       name: 'hamza',
//       check: false,
//       classes: 11,
//       age: 17,
//     },
//   ]);

//   function checkDeta(index){
//   setCount(
//   count.map((item , i)=>{
//     return index == i ? {...item , check : !item.check} : item
//   })
//   )

//   console.log(count);
  
//   }

//   return (
//     <div>
//       {count.map((item, index) => (
//         <div key={index}>
//           {item.name} — Checked: {item.check ? '✅' : '❌'}
//             <button onClick={()=>{
//         checkDeta(index)
//       }}>
//         Toggle Check
//       </button>
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from 'react';

// export default function App() {
//   const [paragraphs, setParagraphs] = useState([
//     "Yeh pehla paragraph hai.",
//     "Yeh doosra paragraph hai.",
//     "Yeh teesra paragraph hai."
//   ]);

//   const handleRemove = (indexToRemove) => {
//     setParagraphs(prev =>
//       prev.filter((_, index) => index !== indexToRemove)
//     );
//   };

//   return (
//     <div>
//       {paragraphs.map((para, index) => (
//         <p key={index} onClick={() => handleRemove(index)} style={{ cursor: 'pointer' }}>
//           {para}
//         </p>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [selected, setSelected] = useState(null);

//   const images = [
//     "https://cdn.pixabay.com/photo/2025/06/11/07/18/wildlife-9653797_640.jpg",
//     "https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_640.jpg",
//     "https://cdn.pixabay.com/photo/2022/11/27/01/47/boat-7618814_1280.jpg",
//     "https://cdn.pixabay.com/photo/2013/06/08/04/17/ferry-boat-123059_640.jpg",
//     "https://cdn.pixabay.com/photo/2021/11/13/11/58/ferry-6791106_640.jpg",
//   ];

//   return (
//     <div style={{
//       display : 'flex',
//       justifyContent : 'center',
//       flexWrap : 'wrap',

//     }}>
//       {selected == null ?  images.map((item , index)=>{
//         return (
//           <div onClick={()=>{
//             setSelected(index)
//           }}>
//             <img src={item} alt="" width={300} height={300} />
//           </div>
//         )
//       }) : <>
//      <div onClick={()=>{
//         setSelected(null)
//       }} style={{
//         width : '100%',
//         height : '100vh',
//         display : 'flex',
//         justifyContent : 'center',
//         alignItems : 'center'
//       }}>
//        <img style={{
//         width : '800px',
//         height : '800px',

//        }}  src={images[selected]} alt="" />
//      </div>
//       </>}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./App.css"; // Don't forget to include this CSS

// export default function App() {
//   const [selected, setSelected] = useState(null);

//   const images = [
//     "https://cdn.pixabay.com/photo/2025/06/11/07/18/wildlife-9653797_640.jpg",
//     "https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_640.jpg",
//     "https://cdn.pixabay.com/photo/2022/11/27/01/47/boat-7618814_1280.jpg",
//     "https://cdn.pixabay.com/photo/2013/06/08/04/17/ferry-boat-123059_640.jpg",
//     "https://cdn.pixabay.com/photo/2021/11/13/11/58/ferry-6791106_640.jpg",
//   ];

//   return (
//     <div className="app">
//       <h1>📸 Click Image to Enlarge</h1>

//       {/* Modal for enlarged image */}
//       {selected !== null && (
//         <div className="modal" onClick={() => setSelected(null)}>
//           <img src={images[selected]} alt="Big View" className="modal-img" />
//         </div>
//       )}

//       {/* Thumbnails */}
//       <div className="gallery">
//         {images.map((img, i) => (
//           <div className="thumb" key={i} onClick={() => setSelected(i)}>
//             <img src={img} alt={`thumb-${i}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [openStates, setOpenStates] = useState({});

//   const data = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is useState?",
//       answer: "useState is a React hook that lets you add state to functional components.",
//     },
//     {
//       question: "What is JSX?",
//       answer: "JSX stands for JavaScript XML. It allows us to write HTML in React.",
//     },
//   ];

//   const toggleAnswer = (index) => {
//   setOpenStates((prev) => {
//   return {
//     ...prev,
//     [index]: !prev[index],
//   };
// });
// };
 
//   return (
//     <div className="container">
//       <h1>📘 FAQ</h1>
//       {data.map((item, index) => (
//         <div key={index} className="qa-box">
//           <div className="question" onClick={() => toggleAnswer(index)}>
//             <span className={`arrow ${openStates[index] ? "rotate" : ""}`}>
//               ▶
//             </span>
//             {item.question}
//           </div>
//           {openStates[index] && (
//             <div className="answer">{item.answer}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState } from 'react'

// export default function App() {

//     const [array , setArray] = useState({})
//       const data = [
//     {
//       question: "What is React?",
//       answer: "React is a JavaScript library for building user interfaces.",
//     },
//     {
//       question: "What is useState?",
//       answer: "useState is a React hook that lets you add state to functional components.",
//     },
//     {
//       question: "What is JSX?",
//       answer: "JSX stands for JavaScript XML. It allows us to write HTML in React.",
//     },
//   ];

// function checkArray(index){
//     setArray(prev => ({
//         ...prev,
//         [index] : !array[index]
//     }))

//     console.log(array);
    
// }

//   return (
//    <div>
//     <div>{data.map((item , index)=>{
//         return (
//        <div>
//              <h1 onClick={()=>{
//                 checkArray(index)
//              }}>{item.question}</h1>
//       <h1>{array[index] && item.answer}</h1>
//        </div>
           
//         )
//     })}</div>
//    </div>
//   )
// }

// import React, { useState } from 'react';

// const Boxes = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isLocked, setIsLocked] = useState(false); // lock after first click

//   const handleClick = (index) => {
//     if (!isLocked) {
//       setActiveIndex(index);   // set only once
//       setIsLocked(true);       // lock further clicks
//     }
//     else{
//         setActiveIndex(null)
//         setIsLocked(false)
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '360px' }}>
//       {[...Array(10)].map((_, index) => (
//         <div
//           key={index}
//           onClick={() => handleClick(index)}
//           style={{
//             width: '100px',
//             height: '100px',
//             margin: '10px',
//             backgroundColor: activeIndex === index ? 'red' : 'lightgray',
//             cursor: isLocked ? 'not-allowed' : 'pointer',
//             border: '1px solid black',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Boxes;



// import React, { useState } from "react";

// export default function App() {
//   const [showArchived, setShowArchived] = useState(false);

//   const chats = [
//     { id: 1, name: "Ali", message: "Hello!", archived: false },
//     { id: 2, name: "Sara", message: "Meeting at 5", archived: true },
//     { id: 3, name: "Ahmed", message: "See you!", archived: false },
//     { id: 4, name: "Zara", message: "Archived msg", archived: true }
//   ];

//   const filteredChats = chats.filter(chat => chat.archived === showArchived);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>{showArchived ? "Archived Chats" : "All Chats"}</h2>

//       <button onClick={() => setShowArchived(!showArchived)}>
//         {showArchived ? "Show All Chats" : "Show Archived Chats"}
//       </button>

//       <ul>
//         {filteredChats.map(chat => (
//           <li key={chat.id}>
//             <strong>{chat.name}:</strong> {chat.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function App() {
//   const [check, setCheck] = useState(true);
//   const [archivedChats, setArchivedChats] = useState([]);
//   const [chats, setChats] = useState([
//     {
//       id: 1,
//       name: "Ali Raza",
//       message: "Hey, how are you?",
//       time: "10:15 AM",
//       archived: false
//     },
//     {
//       id: 2,
//       name: "Hina Khan",
//       message: "Project update sent.",
//       time: "11:00 AM",
//       archived: true
//     },
//     {
//       id: 3,
//       name: "Ahmed",
//       message: "Call me when free.",
//       time: "12:30 PM",
//       archived: false
//     },
//     {
//       id: 4,
//       name: "Sara Malik",
//       message: "Dinner tonight?",
//       time: "01:45 PM",
//       archived: true
//     },
//     {
//       id: 5,
//       name: "Usman Jutt",
//       message: "Check your email.",
//       time: "03:20 PM",
//       archived: false
//     },
//     {
//       id: 6,
//       name: "Ayesha",
//       message: "Got the tickets!",
//       time: "04:10 PM",
//       archived: true
//     }
//   ]);

//   const archiveChat = (index) => {
//     const updatedChats = chats.filter((_, i) => i !== index);
//     const movedItem = chats[index];
//     setChats(updatedChats);
//     setArchivedChats([...archivedChats, movedItem]);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <button onClick={() => setCheck(!check)}>
//         {check ? "Show Archived" : "Show Active Chats"}
//       </button>

//       <h2>{check ? "All Chats" : "Archived Chats"}</h2>

//       {check
//         ? chats.map((item, index) => (
//             <div key={item.id} style={{ marginBottom: "10px" }}>
//               <strong>{item.name}</strong>: {item.message} ({item.time})
//               <br />
//               <button onClick={() => archiveChat(index)}>Archive</button>
//             </div>
//           ))
//         : archivedChats.map((item) => (
//             <div key={item.id} style={{ marginBottom: "10px" }}>
//               <strong>{item.name}</strong>: {item.message} ({item.time})
//             </div>
//           ))}
//     </div>
//   );
// }
// import React, { useState } from 'react';

// export default function App() {
//   const [array] = useState([
//     'https://cdn.pixabay.com/photo/2025/06/11/07/18/wildlife-9653797_640.jpg',
//     'https://cdn.pixabay.com/photo/2025/06/07/02/33/rock-monitor-9645835_640.jpg',
//     'https://cdn.pixabay.com/photo/2025/06/10/10/10/bird-9652000_640.jpg'
//   ]);

//   const [check, setCheck] = useState([0]); // 0 index is black by default

//   function checkSome(i) {
//     setCheck((prev) => {
//       if (prev.includes(i)) return prev; 
//       return [...prev, i]; // add new index
//     });
//   }

//   return (
//     <div>
//       {/* Show last clicked image, or default (0) */}
//       <img
//         src={array[check[check.length - 1] ?? 0]}
//         alt=""
//         style={{ width: '300px', height: 'auto' }}
//       />

//       <div
//         style={{
//           display: 'flex',
//           gap: '20px',
//           marginTop: '10px',
//         }}
//       >
//         {array.map((item, i) => (
//           <div
//             key={i}
//             onClick={() => checkSome(i)}
//             style={{
//               width: '100px',
//               height: '10px',
//               backgroundColor: check.includes(i) ? 'black' : 'wheat',
//               cursor: 'pointer',
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "./index.css";

//   const images = [
//     'https://cdn.pixabay.com/photo/2023/04/07/23/21/bridge-7907835_640.jpg',
//     'https://cdn.pixabay.com/photo/2025/06/07/02/33/rock-monitor-9645835_640.jpg',
//     'https://cdn.pixabay.com/photo/2024/02/13/22/20/eibsee-8572003_640.jpg'
//   ];
// function App() {
//   const [mainImage, setMainImage] = useState(0);
//   const [clickedIndexes, setClickedIndexes] = useState([0]);

//   const handleThumbnailClick = (index) => {

//     if (index === mainImage + 1) {
//       setMainImage(index);
//       setClickedIndexes((prev) => [...prev, index]);
//     }

//     else if (index === mainImage - 1) {
//       setMainImage(index);
//       setClickedIndexes((prev) => prev.filter((i) => i !== mainImage));
//     }
//   };

//   return (
//     <div className="container">
//       <img className="main-image" src={images[mainImage]} alt="Main" />

//       <div className="thumbnails">
//         {images.map((img, index) => (
//           <div
//            style={{
//             width : '100px',
//             height : '20px',
//             backgroundColor : clickedIndexes.includes(index) ? 'black' : 'whitesmoke'
//            }}
//             onClick={() => handleThumbnailClick(index)}
//             alt={`Thumbnail ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

export default function Comment() {
  const [showReplies, setShowReplies] = useState(false);
  const array = ['Reply 1: Haan same problem hai' , 'Reply 2: Plumber ko call karo' , 'Reply 3: Yeh roz ka masla ban gaya hai' ]

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", maxWidth: "400px" }}>
      <p><strong>ZOii Qureshi 🦋🧸</strong></p>
      <p>11 F ma Pani Nahin a Raha</p>
      <p style={{ fontSize: "12px", color: "gray" }}>6h ago</p>
         {showReplies && (
       array.map((item)=>{
        return (
             <div style={{ marginTop: "10px", marginLeft: "20px" }}>
          <p>{item}</p>
        </div>
        )
       })
      )}
      <button onClick={toggleReplies} style={{ color: "blue", cursor: "pointer", background: "none", border: "none", padding: 0 }}>
        {showReplies ? 'Hide replies' : `view ${array.length} replies`}
      </button>
    </div>
  );
}
