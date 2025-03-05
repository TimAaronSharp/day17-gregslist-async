import { AppState } from "../AppState.js"
import { jobsService } from "../services/JobsService.js"



export class JobsController {
  constructor() {
    AppState.on('jobs', this.drawJobs)
    this.getJobs()
  }

  async getJobs() {
    await jobsService.getJobs()
  }

  drawJobs() {
    const jobs = AppState.jobs
    let jobsContent = ''
    jobs.forEach(job => jobsContent += job.HTMLTemplate)

    const jobsElem = document.getElementById('jobListings')
    jobsElem.innerHTML = jobsContent
  }
}