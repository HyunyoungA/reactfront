import Carousel from 'react-bootstrap/Carousel';
import './mainSlide.css';
import Img1 from '../Recourse/MainImg1.jpg';
import Img2 from '../Recourse/MainImg2.jpg';

function DarkVariantExample() {

    const styleObj = {
      height: "600px",
      overflow: "hidden",
      position: "absolute",
      width: "100%"
    }

  return (
    <Carousel fade style={ styleObj }>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='title'
              style={{color: "white"}}>PT트레이닝</h1>
          <p style={{color: "white"}}>나와 맞는 선생님을 찾아보세요.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
          style={{transform: "translateY(-19%)"}}
        />
        <Carousel.Caption>
          <h1 className='title'>건강을 위한 시작</h1>
          <p>변화의 시작이 되는 터닝 포인트</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;