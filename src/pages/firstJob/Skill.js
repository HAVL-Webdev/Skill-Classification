import skills from '../../data/skillsData';
import Card from "../../components/card/Card";
import "./style.css";
import { NavLink } from "react-router-dom";

function Skill() {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //  skills.map(skill => {
  //   console.log(skill.skill);
  // })
  return (
    <div className='skill'>
      <h1>Occupation Profile</h1>
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
