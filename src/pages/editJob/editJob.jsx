import {React , useState }from 'react'
import {connect} from 'react-redux'
import {editJob} from '../../redux/jobs-reducer/job.actions'
import {InputTitle , TextArea} from '../addJob/addJob.styles'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Button} from '../../components/jobList/jobList.styles'

function EditJob({jobs , editDetails}) {
  const history = useNavigate()
  const { id } = useParams()
  const specificJob = jobs.filter(job => job.id.toString() === id)
  const [jobDetails, setJobDetails] = useState(
      {
          ...specificJob[0]
      })

  const handleChange = (event) => {
      const { name, value } = event.target
      setJobDetails(prevDetails => ({
          ...prevDetails,
          [name]: value
      }))
  }
  const saveJobDetails = () => {
    editDetails(id, jobDetails)
    history('/', { replace: true })
}

const updateJobDetails = () => {
    setJobDetails(prevDetails => ({
        ...prevDetails,
        datePosted: new Date().toDateString()
    }))

    saveJobDetails()

}
    return (
        <div>
          <h3>Edit Job</h3> 
          <div>
            <h3>Add Job</h3>
            <p>Job Title</p>
            <InputTitle type="text" name='title' value={jobDetails.title} onChange={handleChange} />
            <p>Description</p>
            <TextArea style={{width: '90%', height: '350px'}} name="description" value={jobDetails.description} onChange={handleChange} />
            <p>Experience</p>
                        <select style={{ fontSize: '20px', padding: '15px', width: '50%' }} type="text" name="experience"  value={jobDetails.experience} onChange={handleChange} >
                            <option value="0-1 years">0-1 years</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="2-3 years">2-3 years</option>
                            <option value="3-4 years">3-4 years</option>
                        </select>
            <Button style={{backgroundColor: 'blue' ,marginTop: '10px'}} onClick={() => updateJobDetails()}>Save</Button>  
        </div>
        </div>
    )
}
const mapStateToProps = (state) =>({
  jobs: state.jobs
})
const mapDispatchToProps = (dispatch) =>({
  editDetails: (id , details)=> dispatch (editJob(id , details))
})

export default connect(mapStateToProps , mapDispatchToProps)(EditJob)
