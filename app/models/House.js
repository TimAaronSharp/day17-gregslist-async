

export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathroom = data.bathrooms
    this.levels = data.levelsa
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }

  get HTMLTemplate() {
    return /* html */`
    
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