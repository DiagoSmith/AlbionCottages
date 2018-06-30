import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Cottage } from "./Components/Cottage";
import Results from "./Components/Results";
import { Website } from "./style";

import ResultsContainer from "./Containers/ResultsContainer";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const routes = [
  { name: "Home", path: "" },
  { name: "About", path: "about" },
  { name: "The Cottages", path: "cottages" },
  { name: "Book Now", path: "book" },
  { name: "Activities", path: "activities" },
  { name: "Contact", path: "contact" }
];

const App = () => (
  <Router>
    <div>
      <Navigation routes={routes} />
      <Website>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cottages" component={Cottage} />
        <Route path="/results" component={ResultsContainer} />
      </Website>
      <Footer />
    </div>
  </Router>
);
export default App;
