import React, { Component } from 'react';
import { NavBar, Footer } from '../Components';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar title="PokePod" />
        MainPage
        <Footer>
          <p>PokePod | @pandurijal</p>
        </Footer>
      </div>
    );
  }
}

export default MainPage;
