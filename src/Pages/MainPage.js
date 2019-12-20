import React, { Component } from 'react';
import { pokeListService } from '../Service';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listParams: {
        limit: 8,
        offset: 0
      },
      pokeList: [],
      isLoading: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { pokeList, listParams } = this.state;
    try {
      const res = await pokeListService(listParams.limit, listParams.offset);
      console.log({ res });
      this.setState({
        pokeList: [...pokeList, ...res.results]
      });
    } catch (error) {
      console.error(error);
    }
    this.setState({ isLoading: false, isLoaded: true });
  };

  render() {
    const { pokeList, isLoading, isLoaded } = this.state;
    return (
      <div className="App">
        <div className="grid-row">
          {isLoaded && pokeList.length > 0 ? (
            pokeList.map(list => {
              return (
                <div className="grid-item" key={list.name}>
                  <div className="grid-content">
                    <img
                      src={`http://www.pokestadium.com/sprites/xy/${list.name}.gif`}
                      alt="img"
                    />
                    <div
                      className="fav-btn__wrapper"
                      // onClick={() => onFavClicked(val.id, srcImg)}
                    >
                      <div
                      // className={`fav-btn ${
                      //   favorited ? 'favorited' : ''
                      // }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="blank-data__wrapper">
              <p className="blank-data">
                Sorry, there was a problem when loading data
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainPage;
