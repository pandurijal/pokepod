import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './Routes';
import { NavBar, Footer } from './Components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router basename="/pokepod/">
        <div className="App">
          <NavBar title="PokePod" />
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
          <Footer>
            <p>PokePod | @pandurijal</p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
