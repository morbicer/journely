import Component from '../components/component.react';
import {GoogleMaps, Marker} from "react-google-maps";
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import DocumentTitle from 'react-document-title';
import * as actions from './actions';

import './map.styl';

class GoogleMap extends Component {

  static propTypes = {
    center: React.PropTypes.object,
    zoom: React.PropTypes.number,
    layerUrl: React.PropTypes.string,
    markers: immutable.List,
  };

  componentWillUpdate () {
    if (this.props.layerUrl) {
        const layer = new google.maps.KmlLayer({
            url: this.props.layerUrl,
            suppressInfoWindows: true,
            preserveViewport: (this.props.place) ? true : false,
            map: this.refs.map.state.instance
        });

        google.maps.event.addListener(layer, 'click', (kmlEvent) => {
            const place = kmlEvent.featureData.name;
            console.log(kmlEvent)
        });
    }
  }

  render() {

    const containerProps = {
      className: "full-map",
    }

    let {center, zoom, place, markers} = this.props;

    if (place) {
        const activePlace = markers.find((plc) => plc.name == place);
        if (activePlace) center = activePlace.position;
        zoom = 9;
    }
    if (!center && markers) {
        center = markers.get(0).position;
    }

    function toMarker(marker, index) {
          return (
            <Marker
              position={marker.position}
              key={marker.name}
              animation={marker.animation}
              title={marker.name}
              onClick={() => actions.selectMarker(marker)}
               />
          );
    }

    return (
      <GoogleMaps containerProps={{...containerProps}}
        ref="map"
        googleMapsApi={
          "undefined" !== typeof google ? google.maps : null
        }
        zoom={zoom}
        center={center} >
        {markers.map(toMarker, this)}
      </GoogleMaps>
    );
  }

}

export default GoogleMap;
