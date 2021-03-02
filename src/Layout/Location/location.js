import React from "react";
import {shape, bool} from "prop-types";
import LocationDetails from "./LocationDetails";
import LocationMap from "./LocationMap";
import "./location.css";

const Location = ({ addressData, userLocation }) => {
    return (
        <section className="location">
          <LocationMap latitude={addressData.latitude} longitude={addressData.longitude} />
          <LocationDetails addressData={addressData} userLocation={userLocation} />
        </section>
    );
}

Location.propTypes = {
    addressData: shape({}),
    userLocation: bool,
}

Location.defaultProps = {
    addressData: null,
    userLocation: false,
}

export default Location;
