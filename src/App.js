import React, {useState} from "react";
// import About from './components/About/index';
// import Portfolio from './components/Portfolio/index.js';
// import Contact from './components/Contact/index';
import Header from "./components/Header"
import Nav from './components/Nav/index';
import Footer from './components/Footer';
import Page from "./components/Page";
// import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
// import Resume from './components/Resume/index';

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
    // <div>
    //   <Router>
    //     <Nav/>
    // <main>
    //   <Switch>
    //     <Route exact path='/about' component={ About }/>
    //     <Route exact path='/contact' component={ Contact }/>
    //     <Route exact path='/portfolio' component={ Portfolio }/>
    //     <Route exact path='/resume' component={Resume}/>
    //     {/* <Route component={ Homepage }/> */}
    //   </Switch>
    // </main>
    // </Router>
    // <Footer />
    // </div>
  );
}

export default App;
