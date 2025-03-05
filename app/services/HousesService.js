import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";



class HousesService {

  async getHouses() {
    // const response = await fetch('https://sandbox.codeworksacademy.com/api/houses')
    // console.log('housesService response ', response);
    // const data = await response.json()
    // console.log('housesService data ', data);
    // const houses = data.map(houseData => new House(houseData))

    const response = await api.get('api/houses')
    // const response = await axios.get('https://sandbox.codeworksacademy.com/api/houses')
    // console.log('axios response', response.data);
    const houses = response.data.map(houseData => new House(houseData))





    AppState.houses = houses
    console.log('houses are ', houses);

  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('New car response is ', response.data);
    const house = new House(response.data)
    AppState.houses.push(house)

  }

}

export const housesService = new HousesService()