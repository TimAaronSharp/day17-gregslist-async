import { AppState } from "../AppState.js"


export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.id = data.id
  }

  get deleteButton() {
    const user = AppState.identity

    if (user == null) {
      return ''
    }
    if (this.creatorId != user.id) {
      return ''
    }

    return `
     <button onclick="app.housesController.deleteHouse('${this.id}')" class="btn btn-outline-danger">
        Delete Car
      </button>
    `
  }

  get HTMLTemplate() {
    return /* html */`
    <div class="col-12">
      <div class="row bg-light shadow car-border mb-3" style="border-color: black};">
        <div class="col-md-4 px-0">
          <img src="${this.imgUrl}" alt="A picture of a ${this.bedrooms} bedroom ${this.bathrooms} bathroom house for sale" class="car-img">
        </div>
        <div class="col-md-8">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <p class="fs-3 mb-1 text-capitalize">${this.year} ${this.bedrooms} bedroom ${this.bathrooms} bathroom</p>
              <p>${this.levels} <span>levels</span></p>
              <small>Listed on ${this.createdAt.toLocaleDateString()}</small>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <p class="fs-3">$${this.price.toLocaleString()}</p>
                
              </div>
              <p>${this.description}</p>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <div>
                <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
                <span>${this.creator.name}</span>
              </div>
             ${this.deleteButton}
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}


// bedrooms - Number
// bathrooms - Number
// levels - Number
// imgUrl - String
// year - Number
// price - Number
// description - String
// creatorId - String (SchemaObjectId)
// id - String (SchemaObjectId)





{/* <div class="col-12">
    <div class="row bg-light shadow car-border mb-3" style="border-color: ${this.color};">
      <div class="col-md-4 px-0">
        <img src="${this.imgUrl}" alt="A picture of a ${this.make} ${this.model} for sale" class="car-img">
      </div>
      <div class="col-md-8">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <p class="fs-3 mb-1">${this.year} ${this.make} ${this.model}</p>
            <small>Listed on ${this.createdAt.toLocaleDateString()}</small>
            <div class="d-flex mt-1 justify-content-between align-items-center">
              <p class="fs-3">$${this.price.toLocaleString()}</p>
              <p class="fs-4">Engine: ${this.engineType}</p>
            </div>
            <p>${this.description}</p>
          </div>
          <div class="d-flex justify-content-between mb-1">
            <div>
              <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
              <span>${this.creator.name}</span>
            </div>
            ${this.deleteButton}
          </div>
        </div>
      </div>
    </div>
  </div> */}


//   <div class="col-md-12">
//   <div class="row shadow bg-light d-flex mb-3">
//     <div class="col-md-4 px-0">
//       <div>
//       <img src="${this.imgUrl}" alt="${this.description}" class="img-fluid img-style py-1">
//     </div>
//     <div class="col-md-8">
//       <div class="p-3 flex-grow-1">
//         <h4 class="text-capitalize">${this.year} ${this.bedrooms} bedroom ${this.bathrooms} bath</h4>
//         <div class="d-flex justify-content-between">
//           <div>
//             <p class="fs-4">${this.price}</p>
//             <p>${this.levels} <span>levels</span></p>
//             <div class="d-flex gap-2">
//             <p>${this.description}</p>
//           </div>
//         </div>
//         <div class="text-end">
//           <button onclick="app.housesController.deleteHouseListing('${this.id}')" class="btn btn-danger" type="button">Delete</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>