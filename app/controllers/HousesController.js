import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    AppState.on('identity', this.drawHouses)
    AppState.on('identity', this.showHouseForm)
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

  showHouseForm() {
    const houseFormElem = document.getElementById('house-form')
    houseFormElem.classList.remove('d-none')
    // console.log('AppState identity is ', AppState.identity);

  }

  async createHouse() {
    try {
      event.preventDefault()
      const formElem = event.target
      const houseData = getFormData(formElem)
      // console.log('form data is ', houseData);
      await housesService.createHouse(houseData)

    } catch (error) {
      console.log('SOMETHING BAD HAPPENED!', error);
      alert(error.message)

      Pop.toast("Could not Post house", error.message)
      console.error(error)

    }


  }

  async deleteHouse(houseId) {
    try {
      const confirmed = await Pop.confirm('Are you sure you want to delete this house?')
      if (!confirmed) return

      await housesService.deleteHouse(houseId)
    } catch (error) {
      Pop.toast('Could not delete house', error.message)
      console.error(error)
    }
  }
}