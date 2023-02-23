import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navi.css';

function Navigation(){
  return (
    <div className="Navigation">
      <Navbar bg="dark" variant="dark" className="naviWrap">
          <Navbar.Brand href="#home">터닝포인트</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#health">헬스</Nav.Link>
            <Nav.Link href="#pilates">필라테스</Nav.Link>
          </Nav>
          <Form inline="true" className="searchForm">
            <FormControl type="text" placeholder="지역이나 강사님을 검색해보세요" className="mr-sm-2" />
            <Button variant="outline-info">검색하기</Button>
          </Form>
      </Navbar>
    </div>
  )
}

export default Navigation;