


export class Job {
  constructor(data) {
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}


// company - String
// jobTitle - String
// hours - Number
// rate - Number
// description - String
// creatorId - String (SchemaObjectId)
// id - String (SchemaObjectId)