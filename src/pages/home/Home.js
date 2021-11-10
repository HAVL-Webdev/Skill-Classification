import { NavLink } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className='home'>
      <div id="home_wrapper">
        <h1>Welcome to CHAVL.</h1>
        <p>Please click the 'Get Started' button to explore possible career opportunities.</p>
        <div className='buttons'>
          <NavLink to='/skillcluster'>
            <button>Get Started</button>
          </NavLink>
          {/* <NavLink to='/careerchange'>
            <button>Career transition</button>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Home;