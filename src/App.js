import './App.css';
// import React, {useState, useEffect} from 'react';
import Navigation from './MainComponents/navi';
import MainSlide from './MainComponents/mainSlide';
import Info from './MainComponents/trainerInfo';

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
        <div>
          <h6 className='InfoTitle'>소개</h6>
          <Info/>
        </div>
        {/* <ul>
          백엔드:{message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul> */}
    </div>
  );
}

export default App;