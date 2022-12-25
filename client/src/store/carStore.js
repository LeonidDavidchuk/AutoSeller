import {makeAutoObservable} from 'mobx';

export default class CarStore {
    constructor() {
        this._cars = [
            {id: 1, model: "Passat", type: "Легковая", brand: "Volkswagen", year: "2015", mileage: "120000", body: "Седан", count_site: "5", count_door: "4", type_gas: "Бензин", engine: "1.8", power_engine: "150", type_of_drive: "Передний", type_of_gearbox: "Автомат", price: 222222, img_1: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_2: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_3: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_4: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`, img_5: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Volkswagen_Passat_NMS_II_IMG_0007.jpg/1200px-Volkswagen_Passat_NMS_II_IMG_0007.jpg`}
        ]
        makeAutoObservable(this)
    }

    setCars(cars) {
        this._cars = cars
    }

    get cars() {
        return this._cars 
    }
}