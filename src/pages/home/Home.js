import { NavLink } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className='home'>
      <div id="home_wrapper">
        <h1>Home</h1>
        <p>Adipisicing laboris consequat aliqua mollit aute eu. Quis veniam 
          nulla elit aliquip. Fugiat ad quis ipsum elit consectetur voluptate 
          cillum est eiusmod ut. Officia esse proident est do Lorem nostrud 
          est ipsum reprehenderit ullamco proident commodo sint dolore. 
          Minim excepteur velit in ipsum tempor adipisicing sit minim est 
          amet elit duis. Exercitation aute occaecat occaecat sit velit laboris 
          ullamco labore in tempor.</p>
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