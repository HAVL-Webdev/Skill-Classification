import skills from '../../data/skillsData';
import Card from "../../components/card/Card";
import "./style.css";
import { NavLink } from "react-router-dom";

function Skill() {
  return (
    <div className='skill'>
      <h5>Choose the skills you have</h5>
      <div className='container'>
        {skills.map((skill) => {
          return <Card key={skill.id} title={skill.skill}/>;
        })}
      </div>
      <NavLink to='/result_a'>
        <button className='button'>Submit</button>
      </NavLink>
    </div>
  );
}

export default Skill;
