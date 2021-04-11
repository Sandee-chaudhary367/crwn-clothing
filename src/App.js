import React from 'react';
import './App.css';
import HomePage from './pages//homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={HatsPage} />
        <Route path='/shop/sneakers' component={HatsPage} />
        <Route path='/shop/womens' component={HatsPage} />
        <Route path='/shop/mens' component={HatsPage} />

      </Switch>
    </div>
  );
}

export default App;
