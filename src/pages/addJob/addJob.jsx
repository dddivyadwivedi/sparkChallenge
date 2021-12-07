import {React, useState} from 'react'
import { addJob } from '../../redux/jobs-reducer/job.actions'
import {connect} from 'react-redux'
import {InputTitle , TextArea} from '../../pages/addJob/addJob.styles'
import {Button} from '../../components/jobList/jobList.styles';
import {useNavigate} from 'react-router-dom'

function AddJob({job , add}) {

    const history = useNavigate()
    const [jobDetails , setJobDetails] = useState({
        id : job.length+1,
        title : '',
        description :'',
        experience: '',
        datePosted : new Date().toDateString()
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setJobDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))


    }

    const saveJobDetails = () => {
        console.log(jobDetails)
        add(jobDetails)
        history('/', { replace: true })
    }

    const addJobDetails = () => {
        setJobDetails(prevDetails => ({
            ...prevDetails,
        }))

        saveJobDetails()
    }
    return (
        <div>
            <h3>Add Job</h3>
            <p>Job Title</p>
            <InputTitle type="text" name='title' value={job.title} onChange={handleChange} />
            <p>Description</p>
            <TextArea style={{width: '90%', height: '350px'}} name="description" value={job.description} onChange={handleChange} />
            <p>Experience</p>
                        <select style={{ fontSize: '20px', padding: '15px', width: '50%' }} type="text" name="experience"  value={job.experience} onChange={handleChange} >
                            <option value="0-1 years">0-1 years</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="2-3 years">2-3 years</option>
                            <option value="3-4 years">3-4 years</option>
                        </select>
            <Button style={{backgroundColor: 'blue' ,marginTop: '10px'}} onClick={addJobDetails}>Save</Button>  
        </div>
    )
}
const mapStateToProps = (state) =>({
    job: state.jobs
})
const mapDispatchToProps = (dispatch) =>({
    add: (details) => dispatch(addJob(details))
})

export default connect(mapStateToProps , mapDispatchToProps)(AddJob)
