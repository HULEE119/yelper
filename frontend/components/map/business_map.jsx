import React from "react"; 
import MarkerManager from "../../util/marker_manager";

import { withRouter } from "react-router-dom";

class BusinessMap extends React.Component {
    componentDidMount() {
        let mapOptions;
        if (businesses) {
            mapOptions = {
                center: { lat: businesses[0].lat,lng: businesses[0].lng },
                zoom: 13,
            };
        } else {
            mapOptions = {
                center: { lat: 40.758604, lng: -73.830428 },
                zoom: 13
            };
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        if ( businesses.length === 1 ) {
            this.MarkerManager.createMarkerFromBusiness(businesses[0])
        } else  {
            this.MarkerManager.removeAllMarkers();
            this.registerListeners();
            this.MarkerManager.updateMarkers(businesses);
        }
    }

    componentDidUpdate() {
        if (business) {
            const targetBusinessKey = Object.keys(businesses)[0];
            const targetBusiness = businesses[targetBusinessKey];
            this.MarkerManager.updateMarkers([targetBusiness]);
        } else {
            this.MarkerManager.updateMarkers(businesses);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, "idle", () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            if (!this.MarkerManager.updateMarker || this.MarkerManager.updateMarker === undefined) {
                this.props.updateFilter("bounds", bounds);
                this.props.history.push("/businesses");
            } else {
                this.MarkerManager.updateMarker = false;
            }
        });
        google.maps.event.addListener(this.map, "dragend", () => {
            this.props.history.push("/businesses");
            this.MarkerManager.updateMarker = false;
        });
    }


    moveMap(lat, lng) {
        const center = new google.maps.LatLng(lat, lng);
        this.map.panTo(center);
    }


    render () {
        return (
            <div className='map-container' ref={ map => this.mapNode = map }></div>
        )
    }
}

export default withRouter(BusinessMap);