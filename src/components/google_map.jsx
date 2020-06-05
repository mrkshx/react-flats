import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({}) => <div className="marker"></div>;

class SimpleMap extends Component {
  render() {
    const { lat, lng, zoom } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat, lng }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
