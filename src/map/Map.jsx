import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash'
import Marker from './Marker'
import { useLocation } from 'react-router-dom';


export default function MapContainer(props) {
    const [markers, setMarkers] = useState([]);
    const [center, setCenter] = useState();
    const route = useLocation();

    useEffect(() => updatePins(), [props.locations, props.searches]);

    function updatePins() {
        let markerTags = [];
        if(props.position && !center) {
            setCenter({ lat: props.position.coords.latitude, lng: props.position.coords.longitude });
        }
        else if (props.searches && props.searches.length) setCenter({lat : props.searches[0].coord.lat, lng : props.searches[0].coord.lon});
        else if (props.locations && props.locations.length) setCenter({lat : props.locations[0].coord.lat, lng : props.locations[0].coord.lon});
        else setCenter({lat : 0, lng : 0});
        
        if (props.position && props.position.coords.latitude && props.position.coords.longitude){
            markerTags.push([<Marker
                lat={props.position.coords.latitude}
                lng={props.position.coords.longitude}
                name={"Home::lat::" + props.position.coords.latitude + "::lon::" + props.position.coords.longitude}
                color="orange"
                key={7000}
            />]);
        }
        if (props.locations)
            markerTags = [...markerTags, ...(genMarkers(props.locations, 'blue', 8000))];

        if (props.searches)
            markerTags = [...markerTags, ...(genMarkers(props.searches, 'red', 9000))];

        setMarkers(markerTags);
    }

    function genMarkers(details, color, keyset) {
        return details.map((elem, idx) => {
            return (<Marker
                lat={elem.coord.lat}
                lng={elem.coord.lon}
                name={elem.name + "," + elem.country + "::id::" + elem.id + "::lat::" + elem.coord.lat + "::lon::" + elem.coord.lon}
                color={color}
                key={idx + keyset}
            />);
        });
    }

    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
        };
    };

    return (
        <div className='m-auto' style={(route.pathname == "/react-vite-weatherapp/map") ? { width: "98vw", height: "90vh" } : { height: '50vh', width: "auto" }}>
            {center &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
                    defaultCenter={{lat : 0, lng : 0}}
                    defaultZoom={0}
                    options={getMapOptions}
                    center={center}
                    layerTypes={["TrafficLayer", "TransitLayer"]}
                >
                    {markers}

                </GoogleMapReact>
            }
        </div>
    );
}