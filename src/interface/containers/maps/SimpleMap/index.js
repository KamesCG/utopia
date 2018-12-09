import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import MapMarker from 'components/map/MapMarker'

import { consensysLogo } from 'assets/images'

const TrustAnchors = [
  {
    label: 'ConsenSys',
    logo: consensysLogo,
    signingKey: '0xg6az4...1q83vx',
    lat:40.730610,
    lng:-73.337844
  }
]

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.730610,
      lng: -73.935242
    },
    zoom: 5
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD3zJ0p7ZOtaZ6Gp7KyxtIFkFU2W0j89G0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            TrustAnchors.map((item, key)=> <MapMarker key={key} {...item} />)
          }
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;