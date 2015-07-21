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
    markers: React.PropTypes.instanceOf(immutable.List),
    activePlace: React.PropTypes.instanceOf(immutable.Record),
  };

  componentWillUpdate () {
    if (this.props.layerUrl) {
        const layer = new google.maps.KmlLayer({
            url: this.props.layerUrl,
            suppressInfoWindows: true,
            preserveViewport: (this.props.activePlace) ? true : false,
            map: this.refs.map.state.instance
        });

        google.maps.event.addListener(layer, 'click', (kmlEvent) => {
            console.log(kmlEvent)
        });
    }
  }

  render() {

    const containerProps = {
      className: "full-map",
    }

    const RED_ICON = "http://maps.google.com/mapfiles/ms/micons/red-dot.png";
    const GREEN_ICON = "http://maps.google.com/mapfiles/ms/micons/green-dot.png";

    let {center, zoom, markers, activePlace} = this.props;

    if (!center && activePlace) {
        center = activePlace.position;
    }

    const router = this.context.router;

    function toMarker(marker, index) {
          return (
            <Marker
              position={marker.position}
              key={marker.name}
              animation={marker.animation}
              title={marker.name}
              onClick={() => actions.selectMarker(marker)}
              icon={(marker == activePlace) ? GREEN_ICON : RED_ICON}
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
        {markers.map(toMarker)}
      </GoogleMaps>
    );
  }

}

export default GoogleMap;
