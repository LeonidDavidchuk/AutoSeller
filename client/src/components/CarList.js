import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import CarItem from './CarItem';
import { Row } from 'react-bootstrap';
import { Context } from '..';

const CarList = observer(() => {
    const { car } = useContext(Context)

    return (
        <Row className='d-flex'>
            {car.cars.map(car =>
                <CarItem key={car.id} car={car.model} />
            )}
        </Row>
    )
});

export default CarList;