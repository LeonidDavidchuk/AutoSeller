import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import CarItem from './CarItem';
import { Container, Row } from 'react-bootstrap';
import { Context } from '..';

const CarList = observer(() => {
    const { car } = useContext(Context)

    return (
        <Container>
        <Row className='d-flex'>
            {car.cars.map(car =>
                <CarItem  key={car.id} car={car} />
            )}
        </Row>
        </Container>
       
    )
});

export default CarList;