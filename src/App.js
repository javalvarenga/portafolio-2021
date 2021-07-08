
import React from 'react'

import './App.css';
import { HashRouter, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import About from './pages/About';
import Projects from './pages/Projects';
function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/portafolio-2021" component={Home} />
      <Route exact path="/cursos" component={Cursos} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
