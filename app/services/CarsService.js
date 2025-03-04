import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js"

class CarsService {
  async getCars() {
    const response = await api.get('api/cars')
    // response.data => [ {...}, {...}, {...} ]
    // cars => [ Car, Car, Car]
    const cars = response.data.map(pojo => new Car(pojo))
    AppState.cars = cars // trigger observer
  }
  async createCar(carData) {
    // NOTE always make network request BEFORE updating AppState
    // NOTE carData becomes the payload (request body) for this request
    const response = await api.post('api/cars', carData)
    // NOTE response.data from POST request is the object that was just added to the database, so we can add that to our local array in the AppState 
    const car = new Car(response.data)
    AppState.cars.push(car) // trigger observer
  }
  async deleteCar(carId) {
    const response = await api.delete(`api/cars/${carId}`)

    const cars = AppState.cars
    const carIndex = cars.findIndex(car => car.id == carId)
    cars.splice(carIndex, 1) // trigger observer
  }
}

export const carsService = new CarsService()