import React from "react";
import "./locationMap.css";
import GoogleMapReact from 'google-map-react';
import {number} from "prop-types";
import Constants from "../../../Constants/constants";
import Typography from "@material-ui/core/Typography";

const GOOGLE_ACCESS_KEY = {key: Constants.ACCESS_KEY_GOOGLE_MAPS}
const MAP_DEFAULT_ZOOM = 10;

const LocationMap = ({latitude, longitude}) => {
  const centerLocation = {lat: latitude, lng: longitude,};
  return (
    <div className="locationMap" >
     <div className="locationMapGoogleMap" >
         {latitude && longitude ? <GoogleMapReact bootstrapURLKeys={GOOGLE_ACCESS_KEY} center={centerLocation} defaultZoom={MAP_DEFAULT_ZOOM}/>
         :  <Typography component="h2" variant="h6" className="locationMapGoogleError" gutterBottom>
                 No map location results for this search
             </Typography>}
      </div>
    </div>
  );
}

LocationMap.propTypes = {
  latitude: number,
  longitude: number,
}

LocationMap.defaultProps = {
  latitude: null,
  longitude: null,
}

export default LocationMap;
