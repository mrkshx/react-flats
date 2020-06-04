import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    return flats.map(flat => (
      <Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        key={flat.name}
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
