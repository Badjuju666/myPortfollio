import React, { useState } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [navBarLinks] = useState(["About Me", "Porfollio", "Contacts", "Resume"]);
  const [activeNav, setActiveNav] = useState("About Me");
  return (
    <div>
      <Router>
        <Nav />
        <main>
            <Switch>
              <Route exact path= '/about' component={ About }/>
              <Route exact path= '/test' component={ Test }/>
              <Route component={ Homepage }/>
            </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
