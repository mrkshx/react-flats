import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }

  render() {
    return (
      <div className="flat-list">
        <FlatList flats={this.state.flats} />
      </div>
    );
  }
}

export default App;
