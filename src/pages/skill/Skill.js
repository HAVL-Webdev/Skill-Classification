import skills from '../../data/skillsData';
import Card from "../../components/card/Card";
import "./style.css";


function Skill(props) {
  const handleClick = (id) => { 
    const result =  skills.find((skill)=> skill.id === id);
    props.history.push({
      pathname: "/job",
      jobs: result.occupation,
      skill: result.skill
    });      
  }
  return (
    <div className='skill'>
      <h5>Choose the skill you have</h5>
      <div className='container'>
        {
          skills.map(skill => {
            return (
              <Card
              key={skill.id}
              id={skill.id}
              title={skill.skill}
              cardClickHandler={handleClick}
            />
            )
          })
        }
      </div>       
    </div> 
  );
}

export default Skill;


  // {skills.map((skill) => <button onClick={() => handleClick(skill.id)}>{skill.skill}</button>)}
