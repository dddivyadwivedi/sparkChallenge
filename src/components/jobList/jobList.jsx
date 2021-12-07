import React from 'react'
import {connect} from 'react-redux'
import {deleteJob} from '../../redux/jobs-reducer/job.actions'
import {useNavigate} from 'react-router-dom'
import {Card , Button } from './jobList.styles.js'




function JobList({job , deleteTheJob}) {
    const history = useNavigate()
    return (
        <Card>
            <h4>{job.title}</h4>
            <p> Description : {job.description}</p>
            <p>Experience :{job.experience}</p>
            <p>Date Posted :{job.datePosted}</p>
            <Button style={{backgroundColor : 'brown'}} onClick={()=>deleteTheJob(job.id)}>Delete</Button>
            <Button style={{backgroundColor : 'blue'}} onClick={()=>history(`/editJob/${job.id}`)}>Edit</Button>

        </Card>
    )
}

const mapDispatchToProps = dispatch =>({
    deleteTheJob :(id)=>{
        return dispatch(deleteJob(id))
    }

})

export default connect(null , mapDispatchToProps)(JobList)