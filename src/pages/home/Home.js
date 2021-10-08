import { NavLink } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className='home'>
      <h1>
        Are you a fresh worker who want to decide your first job or you want a
        career transtion?
      </h1>
      <div className='buttons'>
        <NavLink to='/firstjob'>
          <button>Look for first job</button>
        </NavLink>
        <NavLink to='/careerchange'>
          <button>Career transition</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
