import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    const { flats, selectFlat, selectedFlat } = this.props;
    return flats.map((flat, index) => (
      <Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        key={flat.name}
        selectFlat={selectFlat}
        index={index}
        selected={flat.name === selectedFlat.name}
      />
    ));
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
