import React from "react"; 
import MarkerManager from "../../util/marker_manager";

import { withRouter } from "react-router-dom";

class BusinessMap extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let mapOptions;
        if (this.props.business) {
            mapOptions = {
                center: { lat: this.props.business.lat, lng: this.props.business.lng },
                zoom: 13,
            };
        } else if (this.props.businesses) {
            mapOptions = {
                center: { 
                    lat: this.props.businesses[0].lat,
                    lng: this.props.businesses[0].lng
                },
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

        if ( this.props.business ) {
            this.MarkerManager.createMarkerFromBusiness(this.props.business)
        } else if ( this.props.businesses ) {
            this.MarkerManager.removeAllMarkers();
            this.registerListeners();
            this.updateMarkers(this.props.businesses);
        }
    }

    componentDidUpdate() {
        debugger;
        if (this.props.business) {
            const targetBusinessKey = Object.keys(this.props.businesses)[0];
            const targetBusiness = this.props.businesses[targetBusinessKey];
            this.MarkerManager.updateMarkers([targetBusiness]);
        } else {
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, "idle", () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            if (!this.updateMarker || this.updateMarker === undefined) {
                this.props.updateFilter("bounds", bounds);
                this.props.history.push("/businesses");
            } else {
                this.updateMarker = false;
            }
        });
        google.maps.event.addListener(this.map, "dragend", () => {
            this.props.history.push("/businesses");
            this.updateMarker = false;
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