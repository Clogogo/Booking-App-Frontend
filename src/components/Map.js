
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.43696,
            lng: 24.75353
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="map" style={{ height: '100vh', width: '100%' } }>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCtiEe8JkwQarG83cCvzcakNU5ZJ5o4Ero' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.43696}
                        lng={24.75353}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;

