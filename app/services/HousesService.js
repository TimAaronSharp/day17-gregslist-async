import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";
import { Pop } from "../utils/Pop.js";



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
    // console.log('houses are ', houses);

  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    // console.log('New car response is ', response.data);
    const house = new House(response.data)
    AppState.houses.push(house)

  }

  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    const houses = AppState.houses
    // console.log("deleted car response data is ", response.data);
    const houseToRemove = houses.find(house => house.id == houseId)
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
    Pop.toast(`${houseToRemove.year} ${houseToRemove.bedrooms} ${houseToRemove.bathrooms} was deleted`)
  }

}

export const housesService = new HousesService()