import { AuthController } from "./Auth/AuthController.js"
import { CarsController } from "./controllers/CarsController.js"
import { HousesController } from "./controllers/HousesController.js"
import { JobsController } from "./controllers/JobsController.js"

class App {
  // NOTE you must name the property here on the App class as 'authController' or our auth stuff will not work
  authController = new AuthController()
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()
}

window['app'] = new App()


