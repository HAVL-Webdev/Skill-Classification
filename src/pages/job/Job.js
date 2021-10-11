//import skills from '../../data/skillsData';
import Card from "../../components/card/Card";
import './style.css';

const Job = (props) => {
    const jobs = (props.location && props.location.jobs) || null;
    return (
        <div>
            <h1>Skill used In following roles</h1>
            <div>
                <ul>
                {jobs && jobs.map((job, index) => <li key={index}>{job.title}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Job;

