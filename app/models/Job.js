


export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get HTMLTemplate() {
    return `
    <div class="col-12">
      <div class="row shadow bg-light d-flex mb-4">
        <div class="col-8 offset-md-4">
          <div class="p-3 flex-grow-1">
            <h4 class="text-capitalize">${this.company}</h4>
            <p class="text-capitalize">${this.jobTitle}</p>
            <div class="d-flex justify-content-between text-capitalize">
              <div>
                <span class="fs-4">${this.hours} <span>at <span>$${this.rate.toLocaleString()}<span>/hour</span></span></span></span>
                
              </div>
            </div>
              <span>${this.description}</span>
            <div class="text-end">
              <button onclick="app.jobsController.deleteJobListing('${this.id}')" class="btn btn-danger"
                type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

}

// company - String
// jobTitle - String
// hours - Number
// rate - Number
// description - String
// creatorId - String (SchemaObjectId)
// id - String (SchemaObjectId)