import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/home/Home";
import SkillsFamA from "./pages/firstJob/SkillsFam";
import SkillA from "./pages/firstJob/Skill";
import SkillsFamB from "./pages/careerChange/SkillsFam";
import SkillB from "./pages/careerChange/Skill";
import Result_A from "./pages/result/Result_A";
import Result_B from "./pages/result/Result_B";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/firstjob' component={SkillsFamA} />
          <Route exact path='/firstjob/skill' component={SkillA} />
          <Route exact path='/careerchange' component={SkillsFamB} />
          <Route exact path='/careerchange/skill' component={SkillB} />
          <Route exact path='/result_a' component={Result_A} />
          <Route exact path='/result_b' component={Result_B} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
