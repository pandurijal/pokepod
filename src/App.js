import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
          <div className="container">
            <NavBar title="PokePod">
              <Link to="/">
                <p className={`app-menu`}>Home</p>
              </Link>
              <Link to="/fav">
                <p className={`app-menu`}>Fav</p>
              </Link>
            </NavBar>
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
        </div>
      </Router>
    );
  }
}

export default App;
