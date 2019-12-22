import React, { Component } from 'react';
import { pokeDetailService } from '../Service';
import { toUpperCase } from '../Helpers';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: {
        sprites: {},
        stats: []
      },
      isLoading: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { pokeName } = this.props.match.params;
    try {
      const res = await pokeDetailService(pokeName);
      console.log({ res });
      this.setState({
        pokeData: res
      });
    } catch (error) {
      console.error(error);
    }
    this.setState({ isLoading: false, isLoaded: true });
  };

  render() {
    const { pokeData } = this.state;
    return (
      <div className="detail-page">
        <div className="grid-row">
          <div className="grid-item grid-item-3">
            <img src={pokeData.sprites.front_default} />
          </div>
          <div className="grid-item grid-item-9">
            <div className="detail-content">
              <p className="id">ID: {pokeData.id}</p>
              <p className="name">{pokeData.name}</p>
              <table>
                <tbody>
                  {pokeData.stats &&
                    pokeData.stats.map(stat => {
                      return (
                        <tr key={stat.stat.name}>
                          <td>
                            <p>{stat.stat.name}</p>
                          </td>
                          <td style={{ width: '100%' }}>
                            <div className="bar__bg">
                              <div
                                className="bar"
                                style={{ width: `${stat.base_stat}%` }}
                              ></div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
