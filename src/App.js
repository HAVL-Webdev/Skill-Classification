import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/home/Home";
import SkillCluster from "./pages/skillCluster/SkillCluster";
import Skill from "./pages/skill/Skill";
import Job from "./pages/job/Job";
//import SkillB from "./pages/careerChange/Skill";
//import Result_A from "./pages/result/Result_A";
//import Result_B from "./pages/result/Result_B";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skillcluster' component={SkillCluster} />
          <Route exact path='/skill' component={Skill} />
          <Route exact path='/job' component={Job} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;