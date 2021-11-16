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
      <div id="paragraph_wrapper">
        <p>Skill clusters are comprised of similar specialist tasks which represent daily work in an occupation. Such tasks are transferrable - the ability to do one task within a cluster means employees may be able to do the other roles.
        </p>
      </div>

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
