import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Filter from "./components/Filter.jsx";
// import Card from "./components/Card.jsx";
import Classes from "./components/Classes.jsx";
import Races from "./components/Races.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        (LOGO)
        <h1>DND API INTERFACE</h1>
        <nav>
          <Link to="/classes">Classes</Link>
          <Link to="/races">Races</Link>
        </nav>
        <Filter />
      </header>
      <Switch>
        <Route path="/classes" component={Classes} />
        <Route path="/races" component={Races} />
      </Switch>
    </Router>
  );
}

export default App;
