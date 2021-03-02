import React from "react";
import GoogleMapReact from 'google-map-react';
import {number} from "prop-types";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./locationMap.css";

const GOOGLE_ACCESS_KEY = {key: process.env.REACT_APP_ACCESS_GOOGLE_MAPS}
const MAP_DEFAULT_ZOOM = 10;

const LocationMap = ({latitude, longitude}) => {
  const centerLocation = {lat: latitude, lng: longitude,};
  return (
    <div className="locationMap" >
     <div className="locationMapGoogleMap" >
         {latitude && longitude ?
             <GoogleMapReact bootstrapURLKeys={GOOGLE_ACCESS_KEY} center={centerLocation} defaultZoom={MAP_DEFAULT_ZOOM}>
                 <LocationOnIcon lat={latitude} lng={longitude} color="secondary" />
             </GoogleMapReact>
         :  <Typography component="h2" variant="h6" className="locationMapGoogleError" gutterBottom>
                 No map location results for this search, try this format for example: 214.96.253.215
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
