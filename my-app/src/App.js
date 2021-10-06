import React, { useState } from 'react';
import About from './components/About/index';
import Gallery from './components/Gallery/index';
import Contact from './components/Contact/index';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/index';
import './App.css'

function App() {
  return (
    <div>
      <Router>
    <Nav/>
    <main>
      <Switch>
        <Route exact path='/about' component={ About }/>
        <Route exact path='/contact' component={ Contact }/>
        <Route exact path='/gallery' component={ Gallery }/>
        <Route component={ Homepage }/>
      </Switch>
    </main>
    </Router>
    </div>
  );
}

export default App;
