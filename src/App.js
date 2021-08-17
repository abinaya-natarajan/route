import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home-generator">
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/terms">
          <Terms/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
