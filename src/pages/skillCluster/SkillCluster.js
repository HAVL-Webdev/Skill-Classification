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
        <p>Skill clusters show groups of similar specialist tasks. These specialist tasks are designed to describe day-to-day work within an occupation.
          These tasks are broadly transferrable - if you can do one task in the cluster, you can do the others. Skill clusters illustrate a new way of
          looking at the labour market at a 'deeper' level than occupational classifications or qualifications. This view shows how skills are related 
          and connected to one another and illustrates the transferability of skills across occupations.
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
