import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../data/flats';
import SimpleMap from './google_map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        <div className="map-container">
          <SimpleMap lat={selectedFlat.lat} lng={selectedFlat.lng} />
        </div>
      </div>
    );
  }
}

export default App;
