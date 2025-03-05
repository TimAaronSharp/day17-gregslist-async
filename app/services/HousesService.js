import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



class HousesService {
  async getHouses() {
    const response = await fetch('https://sandbox.codeworksacademy.com/api/houses')
    // console.log('housesService response ', response);
    const data = await response.json()
    // console.log('housesService data ', data);
    const houses = data.map(houseData => new House(houseData))
    AppState.houses = houses
  }

}

export const housesService = new HousesService()