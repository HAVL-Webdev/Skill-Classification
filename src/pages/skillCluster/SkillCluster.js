import skillClusters from '../../data/skillClustersData';
import { NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import "./style.css";

function SkillCluster() {
  return (
    <div>
      <h5>Choose a Skill Cluster</h5>
      <div className='container'>
        {skillClusters.map(skillCluster => {
          return (
            <div>
              <NavLink className='navlink' to='/skill'>
                <Card key={skillCluster.id}  title={skillCluster.cluster} />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCluster;
