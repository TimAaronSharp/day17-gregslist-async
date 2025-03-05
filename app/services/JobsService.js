import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { api } from "../utils/Axios.js";


class JobsService {

  async getJobs() {
    const response = await api.get('/api/jobs')

    const jobs = response.data.map(jobData => new Job(jobData))

    AppState.jobs = jobs
    console.log('jobs are ', jobs);

  }


}

export const jobsService = new JobsService()