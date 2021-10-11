import { useState } from 'react';
import skills from '../../data/skillsData';
//import Card from "../../components/card/Card";
import "./style.css";


function Skill(props) {
  const [job, setJob] = useState();
  const handleClick = (id) => { 
    const result =  skills.find((skill)=> skill.id === id);
    const jobs = result.occupation.map(j => j.title);
    setJob(jobs);
    props.history.push({
      pathname: "/job",
      jobs: result.occupation
    });      
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
    </div> 
  );
}

export default Skill;
