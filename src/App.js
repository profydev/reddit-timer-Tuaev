import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/search">
          Search
        </Route>
        <Route exact path="/">
          React App
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
