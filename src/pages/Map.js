import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";


//========= Fake JSON call data loacation Start ==========//
function getJSONMarkers() {
    const markers =
        [
            { name: "Calgary Office", location: [51.120751, -114.010572], phone: "+1(403)973-8894" },
            // { name: "Edmonton Service", location: [53.535411, -113.507996], phone: "+1(403)973-8894" },
            { name: "RedDeer Service", location: [52.269838, -113.818359], phone: "+1(403)973-8894" },
            { name: "Banff Service", location: [51.1777781, -115.5682504], phone: "+1(403)973-8894" }
        ];
    return markers;
}

//========== Fake JSON call Data ends =========//

function Maap() {
    // Hook
    const [selectedOffice, setSelectedOffice] = useState(null);

    // return map which starts at clagary with 5 pins to show office locations
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 51.047310, lng: -114.057968 }}
        >
            {getJSONMarkers()?.map((office) => (
                <Marker
                    key={office.name}
                    position={{
                        lat: office.location[0],
                        lng: office.location[1],
                    }}
                    // add Event for display info message on pins. when selected marker set.
                    onClick={() => {
                        setSelectedOffice(office);
                    }}
                />
            ))}
            {selectedOffice && (
                <InfoWindow
                    position={{
                        lat: selectedOffice.location[0],
                        lng: selectedOffice.location[1],
                    }}
                    onCloseClick={() => {
                        setSelectedOffice(null);
                    }}
                >
                    <div>
                        <h2>
                            {selectedOffice.name}
                        </h2>
                        <h3>
                            {selectedOffice.phone}
                        </h3>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
// new WrappedMap variable has 2 things wrapped around it
// withScriptjs function (it helps to load Googlemap JS correctly) and withGoogleMap to 
// initialize the map. Then we pass our Maap function inside which we use to render our map
const WrappedMap = withScriptjs(withGoogleMap(Maap));
// For this map to work we also need API key assigned to this map. Its free if there are > ~28000 requests per month
export default function Map() {
    return (
        <div
        // className={styles.backGround}
        >
            <div
                className={"  google-map-dimension"} >
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.React_App_Google_Map}`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </div>
    );
}