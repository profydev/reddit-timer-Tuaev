import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './Header';
=======
>>>>>>> main

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Header />
=======
>>>>>>> main
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
