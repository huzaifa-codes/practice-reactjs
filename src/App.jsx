// import React, { useRef, useState } from 'react'
// import { preconnect } from 'react-dom
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


// import React, { useState } from 'react';

// export default function Comment() {
//   const [showReplies, setShowReplies] = useState(false);
//   const array = [
//     'Reply 1: Haan same problem hai',
//     'Reply 2: Plumber ko call karo',
//     'Reply 3: Yeh roz ka masla ban gaya hai'
//   ];

//   const toggleReplies = () => {
//     setShowReplies(!showReplies);
//   };

//   return (
//     <div style={{ padding: "1rem", border: "1px solid gray", maxWidth: "400px" }}>
//       <p><strong>ZOii Qureshi 🦋🧸</strong></p>
//       <p>{array[0]}</p>
//       <p style={{ fontSize: "12px", color: "gray" }}>6h ago</p>

//       {/* Show remaining replies if toggled */}
//       {showReplies && (
//         array.slice(1).map((item, index) => (
//           <div key={index} style={{ marginTop: "10px", marginLeft: "20px" }}>
//             <p>{item}</p>
//           </div>
//         ))
//       )}

//       {/* Toggle Button */}
//       <button
//         onClick={toggleReplies}
//         style={{
//           color: "blue",
//           cursor: "pointer",
//           background: "none",
//           border: "none",
//           padding: 0
//         }}
//       >
//         {showReplies ? 'Hide replies' : `View ${array.length - 1} replies`}
//       </button>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// export default function App() {
//   const [edit, setEdit] = useState(false);

//   return (
//     <>
//       <div style={{ filter: edit ? 'blur(5px)' : 'none', transition: '0.3s' }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}>
//           <div style={{
//             border: '1px solid black',
//             width: '34%',
//             background: 'white',
//             padding: '10px',
//             boxShadow: '0 0 10px rgba(0,0,0,0.1)'
//           }}>
//             <img
//               src="https://cdn.pixabay.com/photo/2025/04/28/17/02/acacia-9565430_640.jpg"
//               alt=""
//               style={{ width: '100%', height: 'auto' }}
//             />
//             <p>
//               اپنے شوہر سے اس بکواس کی امید نہ کریں.. نعمان اعجاز کا معاذ صفدر پر کڑا وار ! لڑکیوں کو اہم مشورہ
//             </p>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <button>Share</button>
//               <button onClick={() => setEdit(true)}>Comment</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {edit && (
//         <div
//           onClick={() => setEdit(false)} // Close when clicking outside
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             height: '100vh',
//             width: '100vw',
//             backgroundColor: 'rgba(0,0,0,0.3)',
//             backdropFilter: 'blur(5px)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//           }}
//         >
//           {/* Modal Box */}
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'white',
//               width: '40%',
//               maxHeight: '90vh',
//               overflowY: 'auto',
//               borderRadius: '10px',
//               padding: '15px',
//               position: 'relative',
//               boxShadow: '0 0 20px rgba(0,0,0,0.2)'
//             }}
//           >
//             {/* Close Button */}
//             <button onClick={() => setEdit(false)} style={{
//               position: 'absolute',
//               top: '10px',
//               right: '10px',
//               background: 'red',
//               color: 'white',
//               border: 'none',
//               borderRadius: '50%',
//               width: '25px',
//               height: '25px',
//               fontWeight: 'bold',
//               cursor: 'pointer'
//             }}>×</button>

//             <img
//               src="https://cdn.pixabay.com/photo/2025/04/28/17/02/acacia-9565430_640.jpg"
//               alt=""
//               style={{ width: '100%', borderRadius: '10px' }}
//             />
//             <p style={{ marginTop: '10px' }}>
//               اپنے شوہر سے اس بکواس کی امید نہ کریں.. نعمان اعجاز کا معاذ صفدر پر کڑا وار ! لڑکیوں کو اہم مشورہ
//             </p>

//             <div style={{ marginTop: '10px' }}>
//               <p><strong>Dili Baseerat:</strong> محبت اور نعمت اشتہار کی چیزیں نہیں، نبھانے اور شکر کرنے کی کوشش کریں،</p>
//               <p>Farah Noman: Bilkul thek kaha</p>
//               <p>Zaib Chadhar: Nouman hamesha sahi bat krt han always right</p>
//               <p>Umme Taha: Bilkul Sahi kaha</p>
//               <p>Tamseel Shayan: Aisi umed bhi nhi hai</p>
//               <p>Rabia Doll: Sai bol rahy hain</p>
//               <p>Shazia Fayyaz: ...</p>
//               <p>Nadia Jamal: Sahe kaha</p>
//               <p>Uzma Raza: Well said...</p>
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
//               <button>Share</button>
//               <button>Reply</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }





// import React, { useState } from 'react'

// export default function App() {
//   const [input , setInput] = useState('')
//   const [saveInput , setSaveinput] = useState('')
//   const [check , setCheck] = useState(false)
//   const [Num , setNum] = useState(true)

//   function PasswordCheck(){
// if(check == false){
//   setSaveinput(input)
//   setInput('')
//   setCheck(true)
// }
// else if(input == saveInput){
//   alert('braber hai')
//   setNum(false)
// }
// else{
//   alert('braber nahi hai')
// }
//   }
//   return (
// <div>
//   {Num && <>
//   <input
//   type="text"  // This is fine if you don't care about hiding characters
//   value={input}
//   onChange={(e) => setInput(e.target.value)}
// />
//     <button onClick={()=> PasswordCheck()}>{check ? 'Next' : 'ConFirm'}</button>
//   </>}

//   <h1>{!Num &&  'Hello bhai kiya hal hai....'}</h1>
// </div>
//   )
// }


// import React from 'react'
// import Cards from './component/cards';

// export default function App() {
//     const students = [
//   { name: "Ali", age: 18, class: "10th" },
//   { name: "Sara", age: 17, class: "9th" },
//   { name: "Hamza", age: 19, class: "11th" },
//   { name: "Ayesha", age: 18, class: "10th" }
// ];


// const studentss = [
//   { name: "Zainab", age: 16, class: "8th" },
//   { name: "Usman", age: 20, class: "12th" },
//   { name: "Farhan", age: 18, class: "10th" },
//   { name: "Mehwish", age: 17, class: "9th" },
//   { name: "Bilal", age: 19, class: "11th" }
// ];

//   return (
//     <div>
//         <div style={{
//             display : 'flex'
//         }}>
//         {students.map((item)=>{
//           return (
//               <Cards name={item.name} age={item.age} classes={item.class}/>
//           )
//         })}
//     </div>

//     <div style={{
//         display : 'flex'
//     }}>
//         {studentss.map((item)=>{
//           return (
//               <Cards name={item.name} age={item.age} classes={item.class}/>
//           )
//         })}
//     </div>
//     </div>
//   )
// }


// import React, { useState } from 'react'
// import Data from '../Data';

// export default function App() {
//   const jsTalk = [
//   "JavaScript ek programming language hai jo websites ko zinda banata hai.",
//   "Isse hum buttons, animations, aur user actions ko control kar sakte hain.",
//   "Yeh browser ke andar chalta hai, bina kisi software ke.",
//   "React, Vue, Angular — ye sab JavaScript frameworks hain.",
//   "JavaScript ke bina web sirf ek boring photo hota."
// ];

//   return (
//     <div>{jsTalk.map((item)=>{
//       return <Data item={item}/>
//     })}</div>
//   )
// }



// import React, { useState } from 'react';

// export default function App() {
//   const [handle, setHandle] = useState([]);
//   const [input, setInput] = useState('');
//   const [filtered, setFiltered] = useState('All');

//   function HandleSubmit() {
//     if (input.trim() === "") return; 
//     setHandle((prev) => [
//       ...prev,
//       { id: Date.now(), input: input, check: false },
//     ]);
//     setInput('');
//   }

//   function CheckedTodo(id) {
//     setHandle(
//       handle.map((item) =>
//         item.id === id ? { ...item, check: !item.check } : item
//       )
//     );
//     setFiltered('All');
//   }

//   const filtred = handle.filter((item) => {
//     if (filtered === 'checked') return item.check;
//     if (filtered === 'unchecked') return !item.check;
//     return true;
//   });
  
//   return (
//     <div
//       style={{
//         height: '100vh',
//         backgroundColor: 'gray',
//         padding: '20px',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '10px',
//         }}
//       >
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{
//             width: '50%',
//             height: '40px',
//             outline: 'none',
//             borderRadius: '7px',
//             fontSize: '20px',
//             padding: '0 10px',
//           }}
//           type="text"
//         />
//         <button
//           onClick={HandleSubmit}
//           style={{
//             height: '43px',
//             width: '130px',
//             fontSize: '20px',
//             fontFamily: 'cursive',
//             borderRadius: '10px',
//           }}
//         >
//           Add Todo
//         </button>
//       </div>

//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '10px',
//           marginTop: '20px',
//         }}
//       >
//         <button
//           onClick={() => setFiltered('checked')}
//           style={{
//             width: '150px',
//             padding: '5px',
//             fontSize: '20px',
//             backgroundColor: 'lightsalmon',
//           }}
//         >
//           Checked
//         </button>
//         <button
//           onClick={() => setFiltered('unchecked')}
//           style={{
//             width: '150px',
//             padding: '5px',
//             fontSize: '20px',
//             backgroundColor: 'lightsalmon',
//           }}
//         >
//           Unchecked
//         </button>
//         <button
//           onClick={() => setFiltered('All')}
//           style={{
//             width: '150px',
//             padding: '5px',
//             fontSize: '20px',
//             backgroundColor: 'lightsalmon',
//           }}
//         >
//           All
//         </button>
//       </div>

//       <div style={{ marginTop: '20px' }}>
//         {filtred.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               margin: '10px 0',
//               gap: '10px',
//               marginLeft: '30px',
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={item.check}
//               onChange={() => CheckedTodo(item.id)}
//             />
//             <span
//               style={{
//                 fontSize: '25px',
//                 textDecoration: item.check ? 'line-through' : 'none',
//               }}
//             >
//               {item.input}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react'

// export default function App() {
//   const searchTerms = [
//   "ducky bhai",
//   "salman saif",
//   "techno gamerz",
//   "carryminati",
//   "mr beast",
//   "ishq murshid episode 1",
//   "pakistan news live",
//   "coke studio season 15",
//   "baby lullabies",
//   "pubg montage",
//   "css tutorial in urdu",
//   "python course for beginners",
//   "eid mubarak wishes",
//   "latest mobile unboxing",
//   "fawad khan drama",
//   "imran khan latest news",
//   "hajj 2025 updates",
//   "matric result 2025",
//   "nashpati prime drama",
//   "asif ali memes",
//   "mr indian hacker",
//   "tiktok viral dance",
//   "eid ul azha qurbani tips",
//   "lahore rain today",
//   "new bike launch pakistan"
// ];


//   const [input, setInput] = useState('');
//   const [check, setCheck] = useState(false);

//   const filtered = searchTerms.filter((item)=> {
//     return item.includes(input)
//   })

//   const handleParentClick = () => {
//     setCheck(false);
//   };

//   const handleInputClick = (e) => {
//     e.stopPropagation();
//     setCheck(true);
//   };

//   return (
//     <div onClick={handleParentClick} style={{
//       width : '100%',
//       height : '100vh',
//     }}>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setInput(e.target.value)}
//           onClick={handleInputClick}
//         />
//       <div className=''>
//   {check && filtered.map((item)=>{
//     return (
//       <p>{item}</p>
//     )
//   })}
//       </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import FeatureSection from '../FeatureSection';

// function App() {
//  const features = [
//   {
//     tag: 'Effortless Scheduling',
//     before: 'Automate',
//     highlightWord: 'Meeting',
//     after: 'Scheduling',
//     description: 'Our solution reduces manual effort, minimizes errors, and ensures seamless coordination...',
//     image: '/assets/meeting.png',
//     highlightColor: 'text-purple-400',
//   },
//   {
//     tag: 'Smart Reminders',
//     before: 'Get Smart',
//     highlightWord: 'Alerts',
//     after: 'to Stay on Track',
//     description: 'Our system ensures your tasks with intelligent notifications...',
//     image: '/assets/alerts.png',
//     highlightColor: 'text-pink-400',
//   },
//   {
//     tag: 'Task Management',
//     highlightWord: 'Organize',
//     after: 'Your Tasks Easily',
//     description: 'Keep your tasks in order with minimal effort...',
//     image: '/assets/tasks.png',
//     highlightColor: 'text-cyan-400',
//   },
//   {
//     tag: 'AI Recognition',
//     before: 'Recognize Key Information',
//     highlightWord: 'Automatically',
//     description: 'Use intelligent recognition to filter what matters most...',
//     image: '/assets/recognize.png',
//     highlightColor: 'text-yellow-400',
//   },
//   {
//     tag: 'Unified Integration',
//     before: 'Seamlessly',
//     highlightWord: 'Integrate',
//     after: 'Everything in One Place',
//     description: 'Connect tools, calendars, and more into one place...',
//     image: '/assets/integrate.png',
//     highlightColor: 'text-green-400',
//   },
// ];


//   return (
//     <div className="bg-black min-h-screen text-white font-sans px-4 md:px-12">
//       {features.map((feature, index) => (
//         <FeatureSection
//           key={index}
//           {...feature}
//           reverse={index % 2 !== 0} // alternate left/right layout
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'
// import FeatureSection from '../FeatureSection';

// export default function App() {
  

// const faqData = [
//   {
//     question: "React JS kya hai?",
//     answer: "React JS ek JavaScript library hai jo user interfaces banane ke liye use hoti hai. Yeh component-based architecture ko follow karti hai aur efficiently DOM update karti hai."
//   },
//   {
//     question: "Tailwind CSS ka use kyu hota hai?",
//     answer: "Tailwind CSS ek utility-first CSS framework hai jo rapid UI development ko easy banata hai. Isme har class ek specific style represent karti hai."
//   },
//   {
//     question: "State aur Props mein kya farq hai?",
//     answer: "Props components ko data pass karne ke liye hote hain, jabke State ek component ke andar ka dynamic data hota hai jo change ho sakta hai."
//   },
//   {
//     question: "React mein useEffect kab use hota hai?",
//     answer: "useEffect side effects handle karne ke liye use hota hai, jaise data fetch karna, DOM manipulate karna, ya event listeners attach karna."
//   },
//   {
//     question: "Component reusability kya hoti hai?",
//     answer: "React mein component reusability ka matlab hai ek hi component ko multiple jagah use kar paana — jaise button, card, modal etc., with different props."
//   }
// ];

// const [array , setAray] = useState([])

// function Num(index){
// if(array.includes(index)){
//  setAray(array.filter((_ , i)=> i !== index))

// }
// else{
//   setAray([...array , index])
// }
// }

//   return (
//     <div>
//       {faqData.map((item , index)=>{
//         return <FeatureSection question={item.question} answer={item.answer} funq={Num} index={index} array={array}/>
//       })}
//     </div>
//   )
// }



// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Button from './Button'

// function App() {
//   const [box , setBox] = useState(['red' , 'blue' , 'green' , 'yellow' , 'black'])
//   const [index , setIndex] = useState('red')
//   const [Data , setData] = useState('red')

//   function Get(alignItems){
// setBox(box.map((item) => item ==  alignItems ? 'brown' : item))
//   }
//   return (
//   <div>
//       <div>
//       {box.map((item)=>{
         
// return (
//   <Button item={item} index={index} setIndex={setIndex} Get={Get}/>
// )
  
//       })}
      
//     </div>
//     <h1>{Data}</h1>
//   </div>
//   )
// }

// export default App

// components/Navbar.js
// 'use client'
// import { useState } from 'react';

// const navItems = [
//   {
//     title: 'Features',
//     submenu: ['Feature 1', 'Feature 2', 'Feature 3'],
//   },
//   {
//     title: 'FAQ',
//     submenu: ['FAQ 1', 'FAQ 2'],
//   },
//   {
//     title: 'How It Works',
//     submenu: ['Step 1', 'Step 2'],
//   },
//   {
//     title: 'Contact',
//     submenu: ['Email', 'Phone'],
//   },
  
// ];

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
// console.log(activeMenu);

//   return (
//     <nav className="bg-gray-900 text-white p-4">
//       <ul className="flex space-x-8">
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className="relative"
//             onMouseEnter={() => setActiveMenu(index)}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <span className="cursor-pointer">{item.title}</span>

//             {activeMenu === index && (
//               <ul className="absolute left-0 mt-2 bg-white text-black shadow-md p-3 space-y-2 rounded w-40 z-10">
//                 {item.submenu.map((sub, subIndex) => (
//                   <li key={subIndex} className="hover:underline">{sub}</li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// import React from 'react';

// const data = [
//   { id: 1, text: 'Left Box' },
//   { id: 2, text: 'Right Box' },
// ];

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
//       <div className="flex gap-10 items-center">
//         {/* Left Box */}
//         <div className="w-40 h-64 bg-white rounded-xl shadow flex items-center justify-center text-xl font-semibold">
//           {data[0].text}
//         </div>

//         {/* Center Section */}
//         <div className="flex flex-col items-center gap-6">
//           {/* Top 2 Vertical Boxes */}
//           <div className="flex flex-col gap-4">
//             <div className="w-40 h-24 bg-blue-200 rounded-md flex items-center justify-center">Box 1</div>
//             <div className="w-40 h-24 bg-blue-200 rounded-md flex items-center justify-center">Box 2</div>
//           </div>

//           {/* Bottom 3 Horizontal Boxes */}
//           <div className="flex gap-4">
//             <div className="w-24 h-20 bg-green-200 rounded-md flex items-center justify-center">Box A</div>
//             <div className="w-24 h-20 bg-green-200 rounded-md flex items-center justify-center">Box B</div>
//             <div className="w-24 h-20 bg-green-200 rounded-md flex items-center justify-center">Box C</div>
//           </div>
//         </div>

//         {/* Right Box */}
//         <div className="w-40 h-64 bg-white rounded-xl shadow flex items-center justify-center text-xl font-semibold">
//           {data[1].text}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import { useScroll } from 'framer-motion';
// import { div } from 'framer-motion/m';
// import React, { useState } from 'react'

// function App() {
    
// const quizData = [
//   {
//     question: "Which JavaScript framework do you prefer?",
//     options: [
//       { text: "React", votes: 120 },
//       { text: "Vue", votes: 80 },
//       { text: "Angular", votes: 40 },
//       { text: "Svelte", votes: 20 },
//       { text: "SolidJS", votes: 10 },
//     ]
//   },
//   {
//     question: "Which CSS framework do you use the most?",
//     options: [
//       { text: "Tailwind", votes: 100 },
//       { text: "Bootstrap", votes: 70 },
//       { text: "Material UI", votes: 30 },
//       { text: "Bulma", votes: 10 },
//       { text: "Chakra UI", votes: 5 },
//     ]
//   },
//   {
//     question: "Which programming language do you love most?",
//     options: [
//       { text: "JavaScript", votes: 150 },
//       { text: "Python", votes: 130 },
//       { text: "Java", votes: 90 },
//       { text: "C++", votes: 50 },
//       { text: "Go", votes: 20 },
//     ]
//   },
//   {
//     question: "Which backend framework do you use?",
//     options: [
//       { text: "Express.js", votes: 100 },
//       { text: "Django", votes: 60 },
//       { text: "Laravel", votes: 50 },
//       { text: "Spring Boot", votes: 30 },
//       { text: "FastAPI", votes: 25 },
//     ]
//   },
//   {
//     question: "Which database do you prefer?",
//     options: [
//       { text: "MongoDB", votes: 110 },
//       { text: "MySQL", votes: 90 },
//       { text: "PostgreSQL", votes: 70 },
//       { text: "SQLite", votes: 30 },
//       { text: "Firebase", votes: 20 },
//     ]
//   },
//   {
//     question: "Which code editor do you use?",
//     options: [
//       { text: "VS Code", votes: 200 },
//       { text: "Sublime Text", votes: 40 },
//       { text: "Atom", votes: 15 },
//       { text: "WebStorm", votes: 30 },
//       { text: "Vim", votes: 20 },
//     ]
//   },
//   {
//     question: "Which OS do you prefer for development?",
//     options: [
//       { text: "Windows", votes: 110 },
//       { text: "macOS", votes: 80 },
//       { text: "Linux", votes: 90 },
//       { text: "Ubuntu", votes: 50 },
//       { text: "Fedora", votes: 10 },
//     ]
//   },
//   {
//     question: "Which cloud platform do you use?",
//     options: [
//       { text: "AWS", votes: 90 },
//       { text: "Google Cloud", votes: 70 },
//       { text: "Azure", votes: 60 },
//       { text: "Vercel", votes: 40 },
//       { text: "Netlify", votes: 30 },
//     ]
//   },
//   {
//     question: "Which frontend library do you enjoy most?",
//     options: [
//       { text: "React", votes: 160 },
//       { text: "Next.js", votes: 100 },
//       { text: "Vue", votes: 70 },
//       { text: "Svelte", votes: 30 },
//       { text: "Alpine.js", votes: 20 },
//     ]
//   },
//   {
//     question: "Which mobile framework do you prefer?",
//     options: [
//       { text: "React Native", votes: 120 },
//       { text: "Flutter", votes: 100 },
//       { text: "Ionic", votes: 30 },
//       { text: "SwiftUI", votes: 20 },
//       { text: "Kotlin", votes: 10 },
//     ]
//   }
// ];

// const [more , setMore] = useState(0)
// const [check , setCheck] = useState(false)
//   return (
//         <div className='w-full h-[100vh] flex justify-center items-center flex-col 	bg-[#022250] text-white'>
//       <div className='flex flex-col gap-10'>
//               <span></span>  <h1 className='text-[40px] font-mono'>{quizData[more].question}</h1>
//         <div className='flex items-start flex-col text-start gap-3 '>{quizData[more].options.map((item , index)=>{
//             return (
//                <div className='border-2 border-blue-700 w-full  py-2 px-5 flex justify-between items-center' onClick={() => {
//                 setCheck(true)
        
//                }}>
//                  <div className=' text-[30px] text-white font-mono'>{item.text}</div>
//            <div className='text-[30px] text-white font-mono'>{check && item.votes}{check && '%'}</div>
//                </div>
//             )
//         })}</div>
//         <button className='border-1 px-10 py-4 text-2xl uppercase font-mono border-blue-700'  onClick={()=> {
//             if(check){
//     setMore(more + 1)
//              setCheck(false)
//             }
//         }}>next</button>
//       </div>
//     </div>

//     )
//     }

//     export default App




// function App() {
//   const [array, setArray] = useState([]);
//   const [input, setInput] = useState('');
//    const [selected, setSelected] = useState('All');
//    const [editId, setEditId] = useState(null);

//   function AddData() {
//    if(editId){
//     setArray(array.map((item)=> item.id == editId ? {...item  , input} : item))
//     setEditId(null)
//      setInput('');
    
//    }
//    else{
//      setArray([...array, { id: Date.now(), complete: false, input }]);
//     setInput('');
//     setSelected('All')
//    }
//   }


//   const Filterd = array.filter((item)=> {
//     if(selected == 'All') return true;
//     if(selected === 'Complete') return item.complete;
//     if(selected == 'UnCompleted') return !item.complete
//   })

//     function  toggleTask(id){
//    setArray(
//     array.map((item)=> {
//         return item.id == id ? {...item , complete : !item.complete} : item
//      })
//    )
//   }


//   function deleteTodo(id){
//     setArray(array.filter((item)=> {
//       return item.id !== id
//     }))
//   }


//   function EditTodo(input , id){
//    setInput(input)
//    setEditId(id)
//   }
//   return (
//     <div className="w-full">
//       <div className="flex flex-col items-center w-full  justify-start mt-10">
//         <div>
//           <input
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//             type="text"
//             className="border w-[700px] h-14 p-2  outline-none border-gray-700 m-2"
//             placeholder="Enter your todos"
//           />
//           <button
//             className="border bg-black text-white px-10 py-4 m-2"
//             onClick={AddData}
//           >
//         {editId ? 'Update' : 'Add Todo'}
//           </button>
//           <div className="flex gap-4 justify-center items-center">
//                 <button
//         onClick={() => setSelected('All')}
//         className={`border w-[150px] h-10 ${
//           selected === 'All' ? 'bg-black text-white' : ''
//         }`}
//       >
//         All
//       </button>

//       <button
//         onClick={() => setSelected('Complete')}
//         className={`border w-[150px] h-10 ${
//           selected === 'Complete' ? 'bg-black text-white' : ''
//         }`}
//       >
//         Complete
//       </button>

//       <button
//         onClick={() => setSelected('UnCompleted')}
//         className={`border w-[150px] h-10 ${
//           selected === 'UnCompleted' ? 'bg-black text-white' : ''
//         }`}
//       >
//         Un Completed
//       </button>
//           </div>
//         </div>

//         <div className="w-[860px] flex flex-col gap-4 mt-4">
//           {Filterd.length < 1 ? 'Not Found' : Filterd.map((item) => (
//             <div key={item.id} className="py-4 border  px-3 flex justify-between">
//               <div className="flex gap-5">
//                 <input type="checkBox" checked={item.complete} className="w-5" onChange={()=> toggleTask(item.id)}/>
//            <h1 className={`text-2xl ${item.complete && 'line-through'}`}>{item.input}</h1>
//               </div>
//             <div className="flex gap-3">
//                 <button onClick={()=> deleteTodo(item.id)}>Delete</button>
//               <button onClick={()=> EditTodo(item.input , item.id)}>Edit</button>
//             </div>
//             </div>
//           ))} 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// function App() {
//   const array = ['Pakistan', 'America', 'China'];
//   const course = ['graphic' , 'web development' , 'word press']
//   const [num , setNum] = useState('')

//   console.log(num);
  
//   return (
//     <div>
//      <select onChange={(e)=> setNum(e.target.value)}
//   className="border border-gray-400 px-4 py-2 rounded"
// >
//   <option value="">Select a Country</option>
//   {array.map((item) => (
//     <option key={item} value={item}>
//       {item}
//     </option>
//   ))}
// </select>

//      <select
//   className="border border-gray-400 px-4 py-2 rounded">
//   <option value="">Select a course</option>
//   {num ? course.map((item , i)=> {
//   return (
//  <option key={i} value={item}>{item}</option>
//   )
//   }) : ''}
// </select>



//     </div>
//   );
// }

// export default App;



// import React from 'react';

// function App() {
//     const [Random, setRandom] = useState(null);
//     const [positions, setPositions] = useState([0, 0, 0, 0]); // 4 players
//     const [prevIndexes, setPrevIndexes] = useState([null, null, null, null]);
//     const [array, setArray] = useState(Array.from({ length: 100 }, (_, i) => i + 1));
//     const [player, setPlayer] = useState(1);

//     function handleDice() {
//         const random = Math.floor(Math.random() * 6) + 1;
//         setRandom(random);

//         setArray(prev => {
//             let newArr = [...prev];
//             if (prevIndexes[player - 1] !== null && prevIndexes[player - 1] < newArr.length) {
//                 newArr[prevIndexes[player - 1]] = prevIndexes[player - 1] + 1;
//             }
//             const newPos = positions[player - 1] + random;
//             if (newPos - 1 < newArr.length) {
//                 newArr[newPos - 1] =
//                     player === 1
//                         ? 'munneb'
//                         : player === 2
//                         ? 'huzaifa'
//                         : player === 3
//                         ? 'rafay'
//                         : 'hadi';
//             }
//             return newArr;
//         });


//         setPositions(prev => {
//             const updated = [...prev];
//             updated[player - 1] = prev[player - 1] + random;
//             return updated;
//         });
//         setPrevIndexes(prev => {
//             const updated = [...prev];
//             updated[player - 1] = positions[player - 1] + random - 1;
//             return updated;
//         });

//         setPlayer(player === 4 ? 1 : player + 1);
//     }

//     return (
//         <div>
//             <div className="flex justify-center items-center flex-wrap">
//                 {array.map((item, i) => (
//                     <div
//                         key={i}
//                         className="w-30 h-30 border-2 text-center text-2xl flex justify-center items-center"
//                     >
//                         {item}
//                     </div>
//                 ))}
//             </div>
//             <h1>{Random}</h1>
//             <button className="border px-10 py-2 bg-red-500" onClick={handleDice}>
//                 Dice
//             </button>
//             <h1 className="text-3xl">
//                 {player === 1
//                     ? 'munneb'
//                     : player === 2
//                     ? 'huzaifa'
//                     : player === 3
//                     ? 'rafay'
//                     : 'hadi'}
//             </h1>
//         </div>
//     );
// }

// export default App;

// import React from "react";

// function App() {
//   const youtubeSidebar = [
//     {
//       section: "Main",
//       items: [
//         { title: "Home", path: "/home" },
//         { title: "Shorts", path: "/shorts" },
//         { title: "Subscriptions", path: "/subscriptions" },
//       ],
//     },
//     {
//       section: "You",
//       items: [
//         { title: "History", path: "/history" },
//         { title: "Playlists", path: "/playlists" },
//         { title: "Your videos", path: "/your-videos" },
//         { title: "Watch later", path: "/watch-later" },
//         { title: "Liked videos", path: "/liked-videos" },
//       ],
//     },
//     {
//       section: "Subscriptions",
//       items: [
//         { title: "Mustafa Hanif" },
//         { title: "Salman Saif" },
//         { title: "Zalmi" },
//         { title: "BABA OP VLOGS" },
//         { title: "Little Zalmi" },
//         { title: "Techno Gamerz" },
//         { title: "Fahad Bhai Official" },
//         { title: "Show more" },
//       ],
//     },
//     {
//       section: "Explore",
//       items: [
//         { title: "Music", path: "/music" },
//         { title: "Gaming", path: "/gaming" },
//         { title: "News", path: "/news" },
//       ],
//     },
//   ];

//   return (
//     <div className="flex min-h-screen  bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-[256px]  px-4 py-4 overflow-y-auto bg-white border-r">
//         {youtubeSidebar.map((section, index) => (
//           <div key={index} className="mb-5">
//             <div className="text-sm font-semibold text-gray-600 mb-2">
//               {section.section}
//             </div>
//             <div>
//               {section.items.map((item, idx) => (
//                 <div
//                   key={`${item.title}-${idx}`}
//                   className="text-[16px] text-gray-800 py-1 border-b border-gray-200 hover:bg-gray-200 cursor-pointer rounded px-2"
//                 >
//                   {item.title}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Buttons */}
//         <div className="flex  gap-1 mb-6">
//           {Array(11)
//             .fill("Shahid Kapoor")
//             .map((name, index) => (
//               <button
//                 key={index}
//                 className="border px-4 py-1 rounded bg-white hover:bg-gray-100 shadow-sm"
//               >
//                 {name}
//               </button>
//             ))}
//         </div>

//         {/* Cards */}
//         <div className="flex flex-wrap  gap-4">
//           {Array(7).fill(0).map((_, index) => (
//             <div
//               key={index}
//               className="border w-[392px] h-[300px] p-3 rounded bg-white shadow"
//             >
//               <h1 className="font-bold text-lg mb-1">Hello Message</h1>
//               <p className="text-sm">Hello, my name is Huzaifa</p>
//               <p className="text-green-600 font-semibold">Price: $4000</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react'

// function App() {
//   const [index , setIndex] = useState(0)
//   const formOptions = [
//   {
//     label: "Sales",
//     image: "https://cdn.pixabay.com/objects3d/2025/07/21/14-41-47-275/render_720_720_0_340_0.png",
//     fields: ["Full Name", "Email", "Phone", "Message"]
//   },
//   {
//     label: "Support",
//     image: "https://cdn.pixabay.com/objects3d/2025/07/17/13-32-28-467/render_720_720_0_340_0.png",
//     fields: ["Full Name", "Email", "Phone", "Message"]
//   },
//   {
//     label: "Press & Media",
//     image: "https://cdn.pixabay.com/objects3d/2025/07/17/14-02-20-35_720x720.png",
//     fields: ["Last Name", "Email", "Phone", "Message"]
//   }
// ];

//   return (
//      <div className="flex gap-5 items-center justify-center">{formOptions.map((item , i)=>{
//       return (
// <div>
//   <div>
//              <button onClick={()=> setIndex(i)} className="border px-7 py-2 m-5 rounded-full  bg-amber-300 border-none text-white font-bold">{item.label}</button>
// </div>
    
//     <div>
//       {index === i  &&  <img className="w-[100px]" src={item.image} />}
//     </div>
//     <div>{item.fields.map((item)=>{
//       return (
//         <div>
//        { index === i  &&  <input className="border" type="text" placeholder={item}/> }
//         </div>
//       )
//     })}</div>
// </div>
//       )
//      })}</div>
//   )
// }

// export default App



// import React from 'react';

// const services = [
//   { name: 'Graphic Design' },
//   { name: 'Mobile App Development' },
//   { name: 'UI/UX Design' },
//   { name: 'Backend Development' },
//   { name: 'SEO' },
//   { name: 'Web Development' },
// ];

// function App() {
//   return (
//     <div className="flex flex-col md:flex-row items-start gap-16 justify-center p-10 bg-[#111]">
//       {/* Image */}
//       <img
//         src="https://pluraldynamics.com/wp-content/uploads/2024/12/couple-working-at-night-2021-04-05-14-48-36-utc.jpg"
//         alt="Team working"
//         className="w-full md:w-[600px] rounded-md"
//       />

//       {/* Right Section */}
//       <div className="flex flex-col gap-4 max-w-xl">
//         {/* Tag Line */}
//         <div className="flex items-center gap-3">
//           <div className="w-16 h-0.5 bg-red-600"></div>
//           <h2 className="text-[20px] font-bold text-red-600">WHAT WE DO</h2>
//         </div>

//         {/* Heading */}
//         <h1 className="text-[45px] md:text-[60px] leading-tight font-bold text-white">
//           Product Featured <br />
//           <span className="text-red-500">Service</span>
//         </h1>

//         {/* Paragraph */}
//         <p className="text-gray-300 font-medium">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ornare odio, eget sagittis nisl. Nullam vulputate risus ut nisi mollis, et euismod augue rhoncus. Donec ut laoreet leo.
//         </p>

//         {/* Services List */}
//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 py-6 text-white">
//           {services.map((service, index) => (
//             <li key={index} className="flex items-center gap-2">
//               <span className="bg-red-600 text-black rounded-full w-[28px] h-[28px] flex items-center justify-center text-sm font-bold">✔</span>
//               {service.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react'

// function App() {
//   const products = [
//   {
//     id: 1,
//     name: "Blue Graphic Tee",
//     category: "Boys",
//     subCategory: "T-Shirts",
//     price: 999,
//     sizes: ["S", "M", "L"],
//     image: "https://example.com/images/boys-tshirt1.jpg"
//   },
//   {
//     id: 2,
//     name: "Girls Pink Frock",
//     category: "Girls",
//     subCategory: "Frocks",
//     price: 1499,
//     sizes: ["S", "M", "L"],
//     image: "https://example.com/images/girls-frock1.jpg"
//   },
//   {
//     id: 3,
//     name: "Kids Cartoon Hoodie",
//     category: "Kids",
//     subCategory: "Hoodies",
//     price: 1799,
//     sizes: ["XS", "S", "M"],
//     image: "https://example.com/images/kids-hoodie1.jpg"
//   },
//   {
//     id: 4,
//     name: "Boys Denim Jeans",
//     category: "Boys",
//     subCategory: "Jeans",
//     price: 1299,
//     sizes: ["M", "L", "XL"],
//     image: "https://example.com/images/boys-jeans1.jpg"
//   },
//   {
//     id: 5,
//     name: "Girls Casual Top",
//     category: "Girls",
//     subCategory: "Tops",
//     price: 799,
//     sizes: ["S", "M", "L"],
//     image: "https://example.com/images/girls-top1.jpg"
//   },
//   {
//     id: 6,
//     name: "Kids Pajama Set",
//     category: "Kids",
//     subCategory: "Sleepwear",
//     price: 1199,
//     sizes: ["XS", "S", "M"],
//     image: "https://example.com/images/kids-pajama1.jpg"
//   }
// ];

//   return (
//     <div className='flex'>{products.map((item)=>{
//       return (
//         <div className='border w-[200px]'>
//           <h1>{item.name}</h1>
//           <h1>{item.price}</h1>
//           <h1>{item.category}</h1>
//         </div>
//       )
//     })}
//     <div className='border-2 w-[200px]'>hello bhai kese ho</div>
//     </div>
//   )
// }

// export default App



// import React from 'react'


// function App() {

//   const array = [
//     {
//       name : 'huzaifa',
//       heading : 'lorem bhai kese ho'
//     },
//       {
//       name : 'huzaifa',
//       heading : 'lorem bhai kese ho'
//     }
//   ]
//   return (
//     <div className='flex justify-center m-10'>
//       <div className='border w-[400px] h-[700px]'>
//         <h1>name  : huzaifa</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, commodi.</p>
//       </div>
//       <div>
//        {array.map((item)=>{
//         return (
//             <div className='border h-[350px] w-[500px] '>
//         <h1>name  : {item.name}</h1>
//         <p>{item.heading}</p>
//       </div>
      
//         )
//        })}
//       </div>
//        <div className='border w-[400px] h-[700px]'>
//         <h1>name  : huzaifa</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, commodi.</p>
//       </div>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Crousal from './component/Crousal';

// function App() {
//   const carouselItems = [
//   {
//     id: 1,
//     title: "Explore the Mountains",
//     image: "https://i.pinimg.com/1200x/9a/14/9e/9a149e486da9f97a688fcab4ca12a3fe.jpg",
//     description: "Breathtaking views and adventurous hikes await you."
//   },
//   {
//     id: 2,
//     title: "Relax by the Beach",
//     image: "https://source.unsplash.com/800x400/?beach",
//     description: "Feel the breeze and the sound of waves soothing your soul."
//   },
//   {
//     id: 3,
//     title: "City Lights",
//     image: "https://source.unsplash.com/800x400/?city,night",
//     description: "Discover the energy and culture of modern cities."
//   },
//   {
//     id: 4,
//     title: "Into the Forest",
//     image: "https://source.unsplash.com/800x400/?forest",
//     description: "Connect with nature and experience serene greenery."
//   },
//   {
//     id: 5,
//     title: "Desert Adventures",
//     image: "https://source.unsplash.com/800x400/?desert",
//     description: "Golden dunes and magical sunsets in the vast desert."
//   }
// ];

// const [zero , setZero] = useState(0)

//   return (
//   <div className='flex items-center justify-around'>
//   <button
//   onClick={() =>
//     setZero(prev => prev === 0 ? carouselItems.length - 1 : prev - 1)
//   }
//   className="border px-10 py-1"
// >
//   left
// </button>

//       <div>{carouselItems.map((item , index)=>{
//       return  zero == index && <div>
//         <Crousal pera={item.description} title={item.title} image={item.image} zero={zero}/>
//       </div>
     
//     })}</div>
   
//       <button onClick={()=> setZero(prev => prev + 1 === carouselItems.length ? 0 : prev + 1)
// } className='border px-10 py-1'>right</button>
// <img src="https://firangikapra.com/cdn/shop/files/ottoman-weave-7880629_360x.jpg?v=1751421937" alt="" />
//   </div>
//   )
// }

// export default App



// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';

// const productSections = [
//   {
//     id: 1,
//     shop : 'SHOP NEW ARRIVALS',
//      rotate : 'TOP FASHION',
//     title: "Nylon Trace",
//     description:
//       "NylonTrace offers breathable comfort with a clean look -\nperfect for daily wear or weekend plans.",
//     image:
//       "https://firangikapra.com/cdn/shop/files/classic-edge-polo-7130150.jpg?v=1751256165",
//     buttons: [
//       {
//         text: "Shop Nylon Trace",
//         link: "/shop/nylon-trace",
//       },
//       {
//         text: "Shop Trending Products",
//         link: "/shop/trending",
//       },
//     ],
//   },
//   {
//     id: 2,
//     shop : 'SHOP NEW ARRIVALS',
//     rotate : 'TOP FASHION',
//     title: "Cotton Breeze",
//     description:
//       "CottonBreeze keeps things light and soft the go-to fabric\n for everyday ease and style.",
//     image:
//       "https://firangikapra.com/cdn/shop/files/classic-edge-polo-7130150.jpg?v=1751256165",
//     buttons: [
//       {
//         text: "Shop Cotton Breeze",
//         link: "/shop/cotton-breeze",
//       },
//       {
//         text: "Shop Trending Products",
//         link: "/shop/trending",
//       },
//     ],
//   },
//   {
//     id: 3,
//     shop : 'SHOP NEW ARRIVALS',
//      rotate : 'TOP FASHION',
//     title: "Linen Luxe",
//     description:
//       "LinenLuxe is airy, elegant, and timeless -\nperfect for warm days and cool evenings.",
//     image:
//       "https://firangikapra.com/cdn/shop/files/classic-edge-polo-7130150.jpg?v=1751256165",
//     buttons: [
//       {
//         text: "Shop Linen Luxe",
//         link: "/shop/linen-luxe",
//       },
//       {
//         text: "Shop Trending Products",
//         link: "/shop/trending",
//       },
//     ],
//   },
// ];

// function App() {
//   return (
//     <div className="flex flex-col gap-16 items-center px-8 py-12">
//       {productSections.map((item, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <div
//             key={item.id}
//             className={`flex items-center gap-[150px] ${
//               isEven ? "flex-row" : "flex-row-reverse"
//             }`}
//           >
//             <div>
//               <h1 className='text-end'>{item.shop}</h1>
//            <div className="flex items-end gap-2 ">
//   <h1 className="relative rotate-90 left-10 bottom-11">{item.rotate}</h1>  
//   <img className=" w-[500px] rounded-lg" src={item.image} alt={item.title} />
// </div>

//             </div>
//             <div>
//               <h1 className="font-bold text-[50px] py-3">{item.title}</h1>
//               <p className="whitespace-pre-line font-sans py-3 text-gray-500 text-[18px] leading-7">
//                 {item.description}
//               </p>
//               <div className="flex flex-col gap-3 mt-4">
//                 {item.buttons.map((button, btnIndex) => (
//                   <div
//                     key={btnIndex}
//                     className="flex items-center justify-between cursor-pointer group"
//                   >
//                     <h1 className="font-bold text-2xl group-hover:underline">{button.text}</h1>
//                     <FaArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// App.jsx
// import React from "react";
// import Card from "./component/Cards";

// function App() {
//   const cards = [
//     {
//       type: "testimonial",
//       text: "Chatbase is a strong signal of how customer support will evolve...",
//       author: "Marc Manara",
//       company: "OpenAI",
//     },
//     {
//       type: "testimonial",
//       text: "This is awesome, thanks for building it!",
//       author: "Logan Kilpatrick",
//       company: "Google",
//     },
//     {
//       type: "stat",
//       stat: "9000+",
//       label: "businesses trust Chatbase",
//     },
//     {
//       type: "stat",
//       stat: "140+",
//       label: "countries served",
//     },
//     {
//       type: "testimonial",
//       text: "An overpowered tool built with the OP stack.",
//       author: "Greg Kogan",
//       company: "Pinecone",
//     },
//     {
//       type: "testimonial",
//       text: "Our chatbot has been great. Answers questions it knows...",
//       author: "Martin Terskin",
//       company: "OfferMarket",
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-10">
//       {cards.map((item, index) => (
//         <Card key={index} {...item} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState, useRef } from "react";

// function App() {
//   const [array, setArray] = useState([
//     { id: 1, image: "https://cdn.pixabay.com/photo/2024/12/29/00/12/dog-9297049_1280.jpg" },
//     { id: 2, image: "https://cdn.pixabay.com/photo/2022/12/06/14/56/cookie-cutters-7639169_1280.jpg" },
//     { id: 3, image: "https://cdn.pixabay.com/objects3d/2025/07/11/04-41-36-591/render_720_720_0_340_0.png" },
//     { id: 4, image: "https://cdn.pixabay.com/photo/2025/07/02/13/20/fishing-rod-9692407_1280.png" },
//     { id: 5, image: "https://cdn.pixabay.com/photo/2021/08/31/10/34/boat-shed-6588414_1280.jpg" },
//     { id: 6, image: "https://cdn.pixabay.com/photo/2025/06/02/02/48/chairs-9636132_1280.png" },
//     { id: 7, image: "https://cdn.pixabay.com/photo/2024/05/18/17/29/ruhr-area-8770685_1280.png" },
//     { id: 8, image: "https://cdn.pixabay.com/photo/2024/05/14/21/45/rhino-8762188_1280.jpg" },
//     { id: 9, image: "https://cdn.pixabay.com/photo/2022/08/31/06/55/seaside-promenade-7422541_1280.jpg" },
//     { id: 10, image: "https://cdn.pixabay.com/photo/2023/04/14/08/39/mountains-7923189_1280.jpg" },
//   ]);

//   const [filterImage, setFilterImage] = useState("");
//   const [isRunning, setIsRunning] = useState(false);
//   const availableImagesRef = useRef([]);

//   const startRandom = () => {
//     if (availableImagesRef.current.length === 0) return;

//     setIsRunning(true);
//     const pickRandomImage = () => {
//       const random = Math.floor(Math.random() * availableImagesRef.current.length);
//       setFilterImage(availableImagesRef.current[random]);
//     };

//     const interval = setInterval(pickRandomImage, 100);
//     const timeout = setTimeout(() => {
//       clearInterval(interval);
//       setIsRunning(false);
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   };

//   useEffect(() => {
//     availableImagesRef.current = array.map(item => item.image);
//     startRandom();
//   }, []);


//   const handleBoxClick = (id) => {
//     if (isRunning || !filterImage) return; 

//     setArray(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, tempImage: filterImage } : item
//       )
//     );


//     availableImagesRef.current = availableImagesRef.current.filter(img => img !== filterImage);

//     startRandom();
//   };

//   return (
//     <div className="flex justify-around">
//       {/* Left side - boxes */}
//       <div>
//         {array.map(item => (
//           <div
//             key={item.id}
//             className="flex items-center m-2"
//             style={{ gap: "10px" }}
//           >
//             {item.tempImage && (
//               <div className="font-bold text-lg">{item.id}</div>
//             )}
//             <div
//               onClick={() => handleBoxClick(item.id)}
//               className="bg-amber-100 w-20 h-20 flex justify-center items-center overflow-hidden cursor-pointer"
//             >
//               {item.tempImage ? (
//                 <img
//                   src={item.tempImage}
//                   alt="selected"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               ) : (
//                 item.id
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right side - random image */}
//       <div style={{ textAlign: "center", padding: "20px" }}>
//         {filterImage && (
//           <img
//             src={filterImage}
//             alt="Random"
//             style={{
//               maxWidth: "400px",
//               borderRadius: "10px",
//               transition: "opacity 0.2s",
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from "react";

// import Cards from "./component/cards";



// const educationData = [
//   {
//     id: 1,
//     title: "MATRIC",
//     years: "2018-2020",
//     from: "From",
//     institute: "Government Girls High School",
//     location: "Lodhran",
//     borderColor: "blue-500",
//     titleColor: "cyan-500",
//     ribbon: "Multan Board",
//   },
//   {
//     id: 2,
//     title: "INTERMEDIATE",
//     years: "2020-2022",
//     from: "From",
//     institute: "Degree Collage For Women",
//     location: "Lodhran",
//     borderColor: "sky-400",
//     titleColor: "sky-500",
//     ribbon: "Multan Board",
//   },
//   {
//     id: 3,
//     title: "BACHOLAR",
//     years: "2022-2024",
//     from: "From",
//     institute: "Degree Collage For Women",
//     location: "Lodhran",
//     borderColor: "purple-700",
//     titleColor: "pink-500",
//     ribbon: "Multan Board",
//   },
// ];

// const skillsData = [
//   {
//     id: 4,
//     title: "MS OFFICE",
//     from: "From",
//     institute: "Hexalogicx Software Institute",
//     borderColor: "sky-400",
//     titleColor: "gray-500",
//     items: ["Word", "Excel", "Power point", "Access"],
//   },
//   {
//     id: 5,
//     title: "WEB DESIGNING",
//     from: "From",
//     institute: "Hexalogicx Software Institute",
//     borderColor: "purple-700",
//     titleColor: "gray-500",
//     items: ["HTML", "CSS", "Bootstrap", "Javascript"],
//   },
//   {
//     id: 6,
//     title: "OTHER LANGUAGES",
//     from: "From",
//     institute: "Hexalogicx Software Institute",
//     borderColor: "blue-500",
//     titleColor: "gray-500",
//     items: ["PHP", "MySQL", "Laravel", "C++"],
//   },
// ];

// export default function EducationAndSkills() {
//   return (
//     <div className="flex flex-col items-center gap-12 py-10">
//            <h2 className="text-xl font-bold text-blue-500">Education</h2>
//       {/* Education */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {educationData.map((card) => (
//           <Cards key={card.id} {...card} />
//         ))}
//       </div>

//       {/* Knowledge Title */}
//       <h2 className="text-xl font-bold text-blue-500">Knowldge</h2>

//       {/* Skills */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {skillsData.map((card) => (
//           <Cards key={card.id} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from 'react'
// import Heading from './Heading'

// function App() {
//   return (
// <div>
//       <Heading head='han bhai ?' sec=' where are you going'/>
//     <Heading head='han bhai ?'/>
// </div>
//   )
// }

// export default App


// export default function VideoLayout() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#fff8e6] p-6">
//       <div className="flex gap-6 w-[1100px]">
        
//         {/* Left Column */}
//         <div className="flex flex-col flex-1">
//           <img
//             src="https://cdn.pixabay.com/photo/2021/01/19/10/32/people-5930795_1280.jpg"
//             alt="Main"
//             className="w-full h-[500px] object-cover rounded-2xl"
//           />
//           <div className="flex gap-4 mt-4">
//             <img
//               src="https://media.istockphoto.com/id/1142921771/photo/smiling-young-man-using-laptop.jpg?s=2048x2048"
//               className="w-1/3 h-[130px] rounded-2xl object-cover"
//               alt="Thumb 1"
//             />
//             <img
//               src="https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=2048x2048"
//               className="w-1/3 h-[130px] rounded-2xl object-cover"
//               alt="Thumb 2"
//             />
//             <img
//               src="https://media.istockphoto.com/id/2171340716/photo/portrait-of-adult-happy-caucasian-man-stand-and-smile-at-home.jpg?s=2048x2048"
//               className="w-1/3 h-[130px] rounded-2xl object-cover"
//               alt="Thumb 3"
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col flex-1 gap-6">
//           {/* Two equal height cards */}
//           <div className="flex flex-col bg-white rounded-2xl p-6 flex-1">
//             <h1 className="font-bold text-lg">Design Team</h1>
//             <p className="text-gray-500 mb-4">7 members</p>
//             <div className="flex flex-col gap-3">
//               <button className="bg-gray-100 px-4 py-2 rounded-2xl text-sm">Bug Report</button>
//               <button className="bg-gray-100 px-4 py-2 rounded-2xl text-sm">Features Request</button>
//               <button className="bg-gray-100 px-4 py-2 rounded-2xl text-sm">API Integration</button>
//             </div>
//           </div>

//           <div className="flex flex-col bg-white rounded-2xl p-6 flex-1">
//             <h1 className="font-bold text-lg">Record & Summarise</h1>
//             <p className="text-gray-500 mb-4">
//               Get quick, clear summaries of your chats with our bot for easy review.
//             </p>
//             <div className="border border-gray-200 rounded-2xl p-4 text-sm text-gray-700">
//               Provide a summary of the most frequently mentioned customer requests, 
//               concerns, and suggestions for the product, including key insights, 
//               trends, and actionable feedback.
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



// import React from 'react'
// import Box from './component/Box'

// function App() {
//   return (
//     <div>
//       <Box className='flex justify-center' heading='AI Chatbot Solutions For Websites & Apps TalkSmart AI' perah="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia recusandae delectus deleniti placeat quisquam quasi sequi error, accusantium ex quibusdam!" img="https://cdn.pixabay.com/photo/2025/08/01/13/35/winter-9748652_1280.jpg"/>
//       </div>
//   )
// }

// export default App



// Import React Icons
// import React from "react";
// import {
//   Infinity as InfinityIcon,
//   Zap,
//   Clock,
//   Globe,
//   PiggyBank,
//   Paintbrush,
//   Lightbulb,
//   User,
//   BadgeDollarSign,
// } from "lucide-react";

// function App() {
//   const features = [
//     {
//       id: 1,
//       icon: <InfinityIcon size={40} />,
//       title: "On-demand requests",
//       description:
//         "Put all your requests in the design queue in Trello, and we’ll knock them off 1 by 1.",
//     },
//     {
//       id: 2,
//       icon: <Zap size={40}  />,
//       title: "Top-notch quality",
//       description:
//         "High-end work from a dedicated team of senior designers that’s always available when you need it.",
//     },
//     {
//       id: 3,
//       icon: <Globe size={40}  />,
//       title: "Powered by Webflow",
//       description:
//         "We build entirely on Webflow, nd  making them dynamic, accessible, and easily scalable.",
//     },
//     {
//       id: 4,
//       icon: <Clock size={40} />,
//       title: "Fast. Responsive. Reliable.",
//       description:
//         "Get frequent updates on your projects and expect to receive your designs within 2-3 days.",
//     },
//     {
//       id: 5,
//       icon: <User size={40} />,
//       title: "No Lock-in contracts",
//       description: "Pay month-to-month, no surprises. Cancel anytime.",
//     },
//     {
//       id: 6,
//       icon: <BadgeDollarSign size={40} />,
//       title: "Great value for money",
//       description:
//         "Get the power of a dedicated design team at a fraction of the cost of full-time employees.",
//     },
//     {
//       id: 7,
//       icon: <Paintbrush size={40} />,
//       title: "Customized for you",
//       description:
//         "We design and build custom for you. Not starting from templates unless you want that.",
//     },
//     {
//       id: 8,
//       icon: <Lightbulb size={40}  />,
//       title: "Creative paying",
//       description:
//         "We’re here when you need us and not on payroll when you don’t.",
//     },
//     {
//       id: 9,
//       icon: <PiggyBank size={40} />,
//       title: "Expert turnovers",
//       description:
//         "You’re getting 10+ years of design experience, with no hand-holding required.",
//     },
//   ];

//   return (
// <div className="flex flex-wrap justify-center items-center min-h-screen bg-black gap-10">
//   {features.map((item) => (
//     <div
//       key={item.id}
//       className="w-[430px] flex flex-col gap-3 justify-center text-start  rounded-lg shadow-md"
//     >
//       <span className="text-green-600">{item.icon}</span>
//       <div className="flex items-center gap-2">
//         <span className="font-bold text-2xl text-white">{item.id}.</span>
//         <h1 className="text-2xl font-bold text-white">{item.title}</h1>
//       </div>
//       <p className="font-sans text-neutral-400 text-[18px]">{item.description}</p>
//     </div>
//   ))}
// </div>

//   );
// }

// export default App;


// LatestWorks.jsx
// import React from "react";

// const works = [
//   {
//     title: "Harigurus",
//     subtitle: "(Event Booking)",
//     description:
//       "One-stop-shop for Hindu religious, customs & traditional requirements. Built from scratch.",
//     tags: ["react.js", "express.js", "node.js", "swiper.js", "mongoDB", "mongoose", "css", "javascript", "figma"],
//     image: "/images/harigurus.png",
//   },
//   {
//     title: "EazyGrad",
//     subtitle: "(EdTech Startup)",
//     description: "Revamped site to be responsive & interactive. Added features & worked in a team.",
//     tags: ["node.js", "express.js", "mongoDB", "Atlas", "ejs", "swiper.js", "html", "css", "javascript", "lighthouse", "figma"],
//     image: "/images/eazygrad.png",
//   },
//   {
//     title: "Web Dev English",
//     subtitle: "(Coaching & Consulting)",
//     description: "Improved design and added new features for a US-based English Coach website.",
//     tags: ["wordpress", "elementor", "html", "css", "javascript", "figma"],
//     image: "/images/webdevenglish.png",
//   },
//   {
//     title: "Money Arjan Solutions",
//     subtitle: "(Coaching & Consulting)",
//     description: "Improved design and added new features for a US-based English Coach website.",
//     tags: ["node.js", "express.js", "mongoDB", "Atlas", "ejs", "swiper.js", "html", "css", "javascript", "lighthouse", "figma"],
//     image: "/images/webdevenglish.png",
//   },
// ];

// export default function LatestWorks() {
//   return (
//     <section className="relative px-6 py-10">
//      <div className="flex justify-center  items-center ">
//        <h2 className="text-3xl flex justify-center  items-center font-bold mb-16 border-8 h-[50px] w-[260px]">Latest Works</h2>

//      </div>
//       {/* Center vertical line */}
//       <div className="absolute left-1/2 top-22 h-full w-1 bg-red-700 -translate-x-1/2 z-0" />

//       <div className="flex flex-col gap-30 relative z-10">
//         {works.map((work, idx) => {
//           const isLeftImage = idx % 2 === 0; // Even index → image left
//           const color = isLeftImage ? "blue" : "red";

//           return (
//             <div key={idx} className="flex items-center justify-between  gap-10 w-full relative">
              
//               {/* LEFT-IMAGE CASE */}
//               {isLeftImage && (
//                 <>
//                   <div className="w-1/2 flex justify-around">
//                     <div className="flex items-center relative left-0 w-fit">
//                       <img
//                         src={work.image}
//                         alt={work.title}
//                         className="rounded-lg shadow-md w-80"
//                       />
        
//                       <div className=" absolute border-1 w-[260px]  border-none  h-[4px] bg-amber-300 left-[320px]"
                     
//                       />
//                     </div>
//                   </div>

//                   {/* Timeline dot */}
//                   <div
//                     className={`absolute left-1/2 w-6 h-6 bg-red-600 border-4 border-${color}-500 rounded-full -translate-x-1/2 z-10`}
//                   ></div>

//                   {/* Card/Text */}
//                   <div className="w-1/2">
//                     <Card work={work} color={color} />
//                   </div>
//                 </>
//               )}

//               {/* RIGHT-IMAGE CASE */}
//               {!isLeftImage && (
//                 <>
//                   {/* Card/Text */}
//                   <div className="w-1/2 flex justify-end">
//                     <Card work={work} color={color} />
//                   </div>

//                   {/* Timeline dot */}
//                   <div
//                     className={`absolute left-1/2 w-6 h-6 bg-amber-600 border-4 border-${color}-500 rounded-full -translate-x-1/2 z-10`}
//                   ></div>

//                   {/* Image */}
//                   <div className="w-1/2 flex justify-around">
//                     <div className="flex items-center relative w-fit">
//                       {/* Horizontal line going from Image → Center */}
//                       <div
//                         className={`h-[2px] bg-${color}-500`}
//                         style={{
//                           width: "260px",
//                           position: "absolute",
//                           left: "-260px", // push line towards center
//                           top: "50%",
//                           transform: "translateY(-50%)",
//                         }}
//                       />
//                       <img
//                         src={work.image}
//                         alt={work.title}
//                         className="rounded-lg shadow-md w-80"
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// function Card({ work, color }) {
//   return (
//     <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${color}-500`}>
//       <h3 className={`text-xl font-bold text-${color}-500`}>{work.title}</h3>
//       {work.subtitle && <p className="text-sm text-gray-500 italic">{work.subtitle}</p>}
//       {work.description && <p className="mt-2 text-sm">{work.description}</p>}
//       {!!work.tags.length && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {work.tags.map((tag, i) => (
//             <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-xs">
//               #{tag}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React from 'react'
// import AllCards from './component/AllCards';

// function App() {
//   const users = [
//     { id: 1, name: "Ali", age: 20, country: "Pakistan" },
//     { id: 2, name: "Sara", age: 22, country: "Pakistan" },
//     { id: 3, name: "John", age: 25, country: "USA" },
//     { id: 4, name: "Emma", age: 19, country: "UK" },
//     { id: 5, name: "Ahmed", age: 23, country: "Pakistan" },
//     { id: 6, name: "Sophia", age: 28, country: "Canada" },
//     { id: 7, name: "Omar", age: 30, country: "UAE" },
//     { id: 8, name: "Ayesha", age: 21, country: "Pakistan" },
//     { id: 9, name: "David", age: 27, country: "Australia" },
//     { id: 10, name: "Noor", age: 24, country: "Pakistan" }
//   ];

//   return (
//     <div className="space-y-16">

//       {/* 1st section: id=1 & 2 wider, others normal */}
//       <div className="flex justify-center items-center flex-wrap gap-10">
//         {users.map((item) => (
//           <AllCards
//             key={item.id}
//             name={item.name}
//             age={item.age}
//             country={item.country}
//             width={item.id === 1 || item.id === 2 ? 'w-[800px]' : 'w-[300px]'}
//           />
//         ))}
//       </div>

//       {/* 2nd section: all equal size */}
//       <div className="flex justify-center items-center flex-wrap gap-10">
//         {users.map((item) => (
//           <AllCards
//             key={item.id}
//             name={item.name}
//             age={item.age}
//             country={item.country}
//             width='w-[700px]'
//           />
//         ))}
//       </div>

//     </div>
//   )
// }

// export default App

// src/components/FeaturesSection.jsx
// import React from "react";
// import { FaMagic, FaCheckCircle, FaImage, FaVideo, FaBrain, FaFeatherAlt, FaShareAlt, FaFileAlt } from "react-icons/fa";
// import Card from "./component/Cards";;
// import StepsSection from "./Home";
// import About from "./About";

// const features = [
//   {
//     title: "AI Prompt Generator",
//     description: "Transform your ideas into professional prompts",
//     icon: <FaMagic className="text-3xl text-blue-500" />,
//   },
//   {
//     title: "Prompt Checking",
//     description: "Verify your prompt quality",
//     icon: <FaCheckCircle className="text-3xl text-purple-500" />,
//   },
//   {
//     title: "Image Prompts",
//     description: "Create stunning AI images",
//     icon: <FaImage className="text-3xl text-pink-500" />,
//   },
//   {
//     title: "VEO3 Video Prompts",
//     description: "Create stunning AI videos",
//     icon: <FaVideo className="text-3xl text-red-500" />,
//   },
//   {
//     title: "AI Text Detector",
//     description: "Detect AI-generated text",
//     icon: <FaBrain className="text-3xl text-blue-400" />,
//   },
//   {
//     title: "AI Humanizer",
//     description: "Humanize AI Text Easily with Our Free AI Humanizer Tool",
//     icon: <FaFeatherAlt className="text-3xl text-green-400" />,
//   },
//   {
//     title: "Image to Prompt",
//     description: "Convert images to AI prompts",
//     icon: <FaShareAlt className="text-3xl text-orange-400" />,
//   },
//   {
//     title: "Image to Text",
//     description: "Extract text from images",
//     icon: <FaFileAlt className="text-3xl text-red-400" />,
//   },
// ];

// const FeaturesSection = () => {
//   return (
// <div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-[1300px] mx-auto">
//       {features.map((item, index) => (
//         <Card
//           key={index}
//           icon={item.icon}
//           title={item.title}
//           description={item.description}
//           className='flex flex-col items-center justify-center text-center'
//         />
//       ))}
//     </div>
//     <div>
//      <StepsSection/>
//      <About/>
//     </div>
// </div>


//   );
// };

// export default FeaturesSection;


import React, { useEffect, useState } from "react";

const sheetId = "16sP3h_KEMQgSHdcI7ybhOS_cuxKEFFopDlteHstSEkQ";
const whatsappNumber = "+923102543502";  // Pakistani format without 0, country code +92

const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=0`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((csvText) => {
        const rows = csvText.trim().split("\n");
        const headers = rows[0].split(",");
        const data = rows.slice(1).map((row) => {
          const values = row.split(",");
          let obj = {};
          headers.forEach((header, i) => {
            obj[header.trim()] = values[i]?.trim();
          });
          return obj;
        });
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching Google Sheet:", err));
  }, []);

  // Function to handle Add to Cart & open WhatsApp with message
  const handleAddToCart = (product) => {
    // Construct message
    const message = `Hello! I want to purchase the following product:\n\n` +
      `Product Name: ${product["Product Name"]}\n` +
      `Price: ${product["Discounted Price"] || product["Original Price"]}\n` +
      `Description: ${product["Description"] || "N/A"}\n\n` +
      `Please contact me ASAP. Thanks!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h1>Product List</h1>
      {products.length === 0 && <p>Loading products...</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 20,
              width: 250,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product["Product Name"]}</h3>
            <p><strong>Price:</strong> Rs {product["Discounted Price"] || product["Original Price"]}</p>
            <p style={{ fontSize: 14, color: "#555" }}>
              {product["Description"] || "No description available."}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginTop: 10,
                backgroundColor: "#25D366",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: 5,
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Add to Cart & WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
