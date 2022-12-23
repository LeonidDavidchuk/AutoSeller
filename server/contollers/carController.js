const uuid = require('uuid')

class CarController {
    async create(req, res) {
        const { model, year, mileage, body, count_size, count_door, type_gas, engine, power,  power_engine, type_of_drive, type_of_gearbox, price } = req.body
        const { img_1, img_2, img_3, img_4, img_5 } = req.files
        let fileName = uuid.v4() + ".jpg"
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

}

module.exports = new CarController()