import skillClusters from '../../data/skillClustersData';
import Card from "../../components/card/Card";
import "./style.css";

function SkillCluster(props) {
  const handleClick = (id) => {
    props.history.push({
      pathname: "/skill"
    });
  };
  return (
    <div id="skillcluster_wrapper">
      <h1>Choose a Skill Cluster</h1>
      <div className='container'>
        {skillClusters.map(skillCluster => {
          return (
            <Card key={skillCluster.id} 
                  id={skillCluster.id} 
                  title={skillCluster.cluster}
                  cardClickHandler={handleClick}
                  />
          );
        })}
      </div>
    </div>
  );
}

export default SkillCluster;
