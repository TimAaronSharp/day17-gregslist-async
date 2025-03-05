import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
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

    const housesElem = document.getElementById('houseListings')
    housesElem.innerHTML = housesContent

  }

  async createHouse() {
    try {
      event.preventDefault()
      const formElem = event.target
      const houseData = getFormData(formElem)
      console.log('form data is ', houseData);
      await housesService.createHouse(houseData)

    } catch (error) {
      console.log('SOMETHING BAD HAPPENED!', error);
      alert(error.message)

      Pop.toast("Could not Post house", error.message)
      console.error(error)

    }


  }
}