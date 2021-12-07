import React from 'react'
import HomeStyle from './home.styles'
import { connect } from 'react-redux'
import JobList from '../../components/jobList/jobList'
import { useNavigate } from 'react-router-dom'



function Home({ jobs }) {
    const history = useNavigate()
    return (

        <div>
            <button style={{ backgroundColor: 'white', color: 'black', width: 'fit-content', height: '30px', borderRadius: '5px solid' }} onClick={() => history('/addJob')}>Add Job</button>
            {
                jobs.map(job => {
                    return <JobList job={job} key={job.id} />
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.jobs
})

export default connect(mapStateToProps)(Home)


