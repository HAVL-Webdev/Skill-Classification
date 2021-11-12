//import Card from "../../components/card/Card";
import './style.css';

const Job = (props) => {
    const jobs = (props.location && props.location.jobs) || null;
    const skill = (props.location && props.location.skill) || null;
    return (
        <div id="job_wrapper">
            <div id="container">
                <h1>{skill}</h1>
                <h1>This skill is used in the following roles:</h1>
                <div>
                    <ul>
                        {jobs && jobs.map((job, index) => <li key={index}>{job.title}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Job;

