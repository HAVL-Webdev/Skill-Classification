import skillClusters from '../../data/skillClustersData';
import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import "./style.css";

function SkillsFam() {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <h1>Occupation Profile</h1>
      <h5>Choose a Skill Cluster Family</h5>
      <div className='container'>
        {skillClusters.map(skillCluster => {
          return (
            <div>
              <NavLink className='navlink' to='/firstjob/skill'>
                <Card key={skillCluster.id}  title={skillCluster.cluster} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsFam;
