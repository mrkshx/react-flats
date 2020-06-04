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
      <FlatList flats={this.state.flats} />
    );
  }
}

export default App;
