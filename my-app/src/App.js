import React, { useState } from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [navBarLinks] = useState(["About Me", "Porfollio", "Contacts", "Resume"]);
  const [activeNav, setActiveNav] = useState("About Me");
  return (
    <div className="Portfollio">
      <header className="Julian Graves">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          weeedemmboissss.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
