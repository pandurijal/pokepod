import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { pokeListService } from '../Service';
import { SkeletonList } from '../Components';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listParams: {
        limit: 25,
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
      this.setState({
        pokeList: [...pokeList, ...res.results]
      });
    } catch (error) {
      console.error(error);
    }
    this.setState({ isLoading: false, isLoaded: true });
  };

  fetchOnScroll = () => {
    const { listParams } = this.state;
    this.setState({
      listParams: { ...listParams, offset: listParams.offset + 25 }
    });
    this.fetchData();
  };

  render() {
    const { listParams, pokeList, isLoading, isLoaded } = this.state;
    return (
      <div className="App">
        <div className="grid-row">
          {isLoaded && (
            <>
              {pokeList.length > 0 ? (
                pokeList.map(list => {
                  return (
                    <div className="grid-item" key={list.name}>
                      <Link to={`/pokemon/${list.name}`}>
                        <div className="grid-content">
                          <img
                            src={`http://www.pokestadium.com/sprites/xy/${list.name}.gif`}
                            alt={list.name}
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
                      </Link>
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
            </>
          )}
          {isLoading && <SkeletonList length={listParams.limit} />}
          {isLoaded && <Waypoint onEnter={this.fetchOnScroll} />}
        </div>
      </div>
    );
  }
}

export default MainPage;
