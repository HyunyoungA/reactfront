import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './trainerInfo.css';

function BasicExample() {

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    <br />
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          설명내용 텍스트
        </Card.Text>
        <Button variant="primary">프로필 보기</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default BasicExample;