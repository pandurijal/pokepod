import React, { Component } from 'react';
import { pokeListService } from '../Service';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { pokeList } = this.state;
    try {
      const res = await pokeListService();
      console.log({ res });
      this.setState({
        pokeList: [...pokeList, ...res.results]
      });
    } catch (error) {
      console.error(error);
    }
    this.setState({ isLoading: false });
  };

  render() {
    return <div className="App">MainPage</div>;
  }
}

export default MainPage;
