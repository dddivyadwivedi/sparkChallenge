import { typeOfActions } from "./job.types";
import { allJobs } from "./allJob";

const INITIAL_STATE = allJobs

const jobReducer = (state=INITIAL_STATE , action)=>{
    console.log(action.type)
    console.log('Action payload' ,action.payload)
    switch(action.type){
        case typeOfActions.ADD_JOB:
            return[
                ...state,
                action.payload,
            ]
        case typeOfActions.DELETE_JOB:
            const latestJobs = state.filter(job=>job.id !== action.payload)
            console.log(latestJobs)
            return latestJobs
        
        // case typeOfActions.EDIT_JOB:
        //     const {jobid , allDetails} = action.payload
        
        //     const newState = state.map(job =>{
        //         if(job.id.toString() === jobid ){
        //             job.title = allDetails.title,
        //             job.description = allDetails.description,
        //             job.experience = allDetails.experience,
        //             job.datePosted = allDetails.datePosted
        //         }
        //         return job
        //     })
        //     return newState

            default :
            return state
    }

}

export default jobReducer