import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";


export class HousesController {
  constructor() {
    console.log('houses Controller constructing');
    this.getHouses()
  }



  async getHouses() {
    await housesService.getHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let housesContent = ''
    houses.forEach(house => housesContent += house.HTMLTemplate)

  }
}