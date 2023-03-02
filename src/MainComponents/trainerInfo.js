import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './trainerInfo.css';
import profile1 from '../Recourse/pro1.JPG';
import profile2 from '../Recourse/pro2.JPG';

function BasicExample() {

  return (
    <>
    <div className='genderWrap'>
      <div className='gender'>여자</div>
      <div className='gender'>남자</div>
    </div>
    <div className='CardWrap'>
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile2} />
      <Card.Body>
        <Card.Title>김우중 트레이너</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile1} />
      <Card.Body>
        <Card.Title>김현중 트레이너</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile2} />
      <Card.Body>
        <Card.Title>김우중 트레이너</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile1} />
      <Card.Body>
        <Card.Title>김현중 트레이너</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    </div>
    </>
    
  );
}

export default BasicExample;