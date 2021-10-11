import skills from '../../data/skillsData';
import Card from "../../components/card/Card";
import Job from '../job/Job';
import "./style.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Redirect} from 'react-router-dom';



function Skill() {
  const [job, setJob] = useState();
  const handleClick = (id) => { 
    
    const result =  skills.find((skill)=> skill.id === id);
    
    const jobs = result.occupation.map(j => j.title);
    setJob(jobs);

    console.log(jobs);
    // return (<Job jobs={result.occupation} />)       
  }
  return (
    <div className='skill'>
      <h5>Choose the skills you have</h5>
      <div className='container'>
        {skills.map((skill) => {
          return (
          <button onClick={() => handleClick(skill.id)}>{skill.skill}
          </button>
          );
        })}
      </div>
      {/* <NavLink to='/job'><Job job={job} /> </NavLink> */}
      {/* <Job job={job} handleClick={handleClick}/> */}
      {handleClick && (<NavLink to='/job'><Job job={job} /> </NavLink>)}          
    </div> 
  );
}

export default Skill;

{/* <Card key={skill.id} 
  id={skill.id}
  title={skill.skill}
  onClick= {() => handleClick(skill.id) }/> */}     
  
  {/* <NavLink to='/job'> */}
              {/* </NavLink> */}

              // (<NavLink to='/job'><Job job={job} /> </NavLink>)