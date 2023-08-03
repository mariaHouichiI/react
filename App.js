import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';

// Définissez le composant Routes en dehors du composant App
export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/test">
          <Test /> 
        </Route>
      </Switch>
    </Router>
  );
};

// Le composant App ne doit contenir que le rendu du composant Routes
function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
