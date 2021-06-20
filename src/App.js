import React from 'react';
import Navbar from './components/Navbar';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import project1 from './components/pages/project1';
import project2 from './components/pages/project2';
import project3 from './components/pages/project3';
import project4 from './components/pages/project4';
import ScrollToTop from './components/ScrollToTop';


 

function App() {
  return (
    <>

    

    <Router basename={process.env.PUBLIC_URL} hashTyp='slash'>
      <ScrollToTop/>
      <Navbar/>
        <switch>
          <Route path='/' exact component={Home}/>
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={Projects} />
          <Route path='/project1' component={project1}/>
          <Route path='/project2' component={project2}/>
          <Route path='/project3' component={project3}/>
          <Route path='/project4' component={project4}/>
         
        </switch>
        
        
    </Router>
    
    </>
    
  );
}

export default App;
