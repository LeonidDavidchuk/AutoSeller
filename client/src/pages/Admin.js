import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateCar from "../components/modals/CreateCar"
import { useState } from 'react';

const Admin = () => {
  const [carVisible, setCarVisible] = useState(false)

  return (
    <Container>
      <Button onClick={() => setCarVisible(true)}>Добавить автомобиль</Button>
      <CreateCar show={carVisible} onHide={() => setCarVisible(false)}/>
    </Container>

  );
};

export default Admin;