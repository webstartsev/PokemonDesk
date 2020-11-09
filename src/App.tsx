import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
