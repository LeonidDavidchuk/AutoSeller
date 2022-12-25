import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const CarPage = () => {
  const car = { id: 1, model: "Passat", type: "Легковая", brand: "Volkswagen", year: "2015", mileage: "120000", body: "Седан", count_site: "5", count_door: "4", type_gas: "Бензин", engine: "1.8", power_engine: "150", type_of_drive: "Передний", type_of_gearbox: "Автомат", price: 222222, img_1: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_2: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_3: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_4: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_5: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg` }

  return (
    <Container>
      <b>{car.brand} {car.model} {car.year}, {car.type_of_gearbox}</b>
      <div className='carousel'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.img_1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.img_2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.img_3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.img_4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car.img_5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='k'>
    <p>Цена: {car.price} $</p>
    <p>Пробег: {car.mileage} </p>
    <p>Количество сидячих мест: {car.count_site} </p>
    <p>Количество дверей: {car.count_door} </p>
    <p>Объем двигателя :{car.engine} </p>
    <p>Мощность двигателя:{car.power_engine} </p>
    <p>Тип привода :{car.type_of_drive} </p>
    </div>


    </Container>

  );
};

export default CarPage;