import logo from './logo.svg';
import './App.css';
import LogIn from './Component/LogIn';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import LogOut from './Component/LogOut';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/logout"></Link></li>
        </ul>
        <Route exact path='/' component={LogIn} />
        <Route exact path='/logout' component={LogOut} />
      </Router>`


    </div>
  );
}

export default App;
