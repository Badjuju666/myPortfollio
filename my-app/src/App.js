import React, { useState } from 'react';
import About from './components/About/index';
import Gallery from './components/Gallery/index';
import Contact from './components/Contact/index';
import Nav from './components/Nav/index';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/index';
import './App.css';
import Portfolio from './components/Portfolio/index';
import Resume from './components/Resume/index';

function App() {
  return (
    <div>
      <Router>
    <Nav/>
    <main>
      <Switch>
        <Route exact path='/about' component={ About }/>
        <Route exact path='/contact' component={ Contact }/>
        <Route exact path='/portfolio' component={ Portfolio }/>
        <Route exact path='/resume' component={Resume}/>
        {/* <Route component={ Homepage }/> */}
      </Switch>
    </main>
    </Router>
    </div>
  );
}

export default App;
