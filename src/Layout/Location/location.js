import React from "react";
import "./location.css";
import LocationDetails from "./LocationDetails";
import LocationMap from "./LocationMap";
import {shape} from "prop-types";

const Location = ({addressData}) => {
    return (
        <section className="location">
          <LocationMap latitude={addressData.latitude} longitude={addressData.longitude} />
          <LocationDetails addressData={addressData} />
        </section>
    );
}


Location.propTypes = {
    addressData: shape({}),
}

Location.defaultProps = {
    addressData: null,
}

export default Location;
