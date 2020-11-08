import React from 'react';
import Home from './pages/Home';
import HowHelp from './pages/HowHelp';
import Donate from './pages/Donate';
import Game from './pages/Game';
import Pangolin from './pages/animals/Pangolin';
import Elephant from './pages/animals/Elephant';
import Rhino from './pages/animals/Rhino';
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
        <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/howtohelp">
            <HowHelp />
          </Route>
          <Route exact path="/pangolin">
            <Pangolin />
          </Route>
          <Route exact path="/elephant">
            <Elephant />
          </Route>
          <Route exact path="/pangolin">
            <Pangolin />
          </Route>
          <Route exact path="/rhino">
            <Rhino />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
