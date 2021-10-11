//import skills from '../../data/skillsData';

import './style.css';

const Job = (props) => {
    return (
        <div>
            <h1>Skill used In following roles</h1>
            {
                props.job
            }
            {/* {
            props.jobs && props.jobs.map((job, index) => {
                <div>
                    <ul>
                        <li key={index}>{job.title}</li>
                    </ul>
                </div>
            })
            }            */}
        </div>
    );
}

export default Job;

// result.occupation.map((job, index) => {
//     <div>
//         <ul>
//             <li key={index}>{job.title}</li>
//         </ul>
//     </div>