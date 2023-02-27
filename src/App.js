import './App.css';
// import React, {useState, useEffect} from 'react';
import Navigation from './MainComponents/navi';
import MainSlide from './MainComponents/mainSlide';

function App() {
    
//   const [message, setMessage]=useState([]);

//   useEffect(()=>{
//     fetch("/hello")
//         .then((res)=>{
//           return res.json();
//         })
//         .then((data)=>{
//             setMessage(data);
//         });
//   },[]);

  return (
    <div className="App">
        <Navigation />
        <MainSlide />
        {/* <ul>
          백엔드:{message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul> */}
    </div>
  );
}

export default App;