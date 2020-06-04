import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../data/flats';
import SimpleMap from './google_map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      marker: [{ lat: 59.95, lng: 30.33, zoom: 11 }]
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
