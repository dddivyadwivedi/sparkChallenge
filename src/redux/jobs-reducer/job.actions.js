import { typeOfActions } from './job.types'

export const addJob = (allDetails) => ({
    type: typeOfActions.ADD_JOB,
    payload: allDetails
})

export const editJob = (jobid, allDetails) => ({
    type: typeOfActions.EDIT_JOB,
    payload: {
        jobid: jobid,
        allDetails: allDetails
    }
})
export const deleteJob = (jobid) => {
    console.log('deleteJob')
    console.log(jobid)

    return ({
        type: typeOfActions.DELETE_JOB,
        payload: jobid
    })
}
