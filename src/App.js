import './App.css';
// import React, {useState, useEffect} from 'react';
import Navigation from './MainComponents/navi';
import MainSlide from './MainComponents/mainSlide';
import Info from './MainComponents/trainerInfo';
import Review from './MainComponents/review';

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
          <h5 className='subTitle'>나와 맞는 퍼스널 트레이닝</h5>
          <h1 className='InfoTitle'>트레이너 소개</h1>
          <Info/>
        </div>
        <div style={{backgroundColor: "#F6F6F6"}}>
          <h5 className='subTitle'>나와 맞는 퍼스널 트레이닝</h5>
          <h1 className='InfoTitle'>인기 리뷰😎</h1>
          <Review />
        </div>
        {/* <ul>
          백엔드:{message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul> */}
    </div>
  );
}

export default App;