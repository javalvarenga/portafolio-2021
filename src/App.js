
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import About from './pages/About';
import Projects from './pages/Projects';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portafolio-2021" component={Home} />
      <Route exact path="/cursos" component={Cursos} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
