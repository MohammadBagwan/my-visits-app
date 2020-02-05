import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Visits from './Visits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/">Click Here</Link>
          <Route exact path="/" component={Visits} />
        </div>
      </header>
    </div>
  );
}

export default App;
