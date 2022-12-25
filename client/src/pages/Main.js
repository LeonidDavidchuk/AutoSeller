import React from 'react';
import {Container, Col, Row} from "react-bootstrap"
import CarList from '../components/CarList';

const Main = () => {
    return (
      <Container>
        <Row>
          <Col md={9}>
          <CarList />
          </Col>
        </Row>
      </Container>
  
    );
  };
  
  export default Main;