import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image"
import { useNavigate } from "react-router-dom"
import { CAR_ROUTE } from '../utils/consts';

const CarItem = ({ car }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(CAR_ROUTE + '/' + car.id)
    }
    return (
        <div>
            <Col md={3} onClick={handleClick}>
                <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                    <Image width={250} height={150} src={car.img_1} />
                    <b>{car.brand} {car.model} {car.year}</b>
                    <b>Пробег: {car.mileage}</b>
                    <b>{car.price} $</b>
                </Card>
            </Col>
        </div>
    );
};

export default CarItem;