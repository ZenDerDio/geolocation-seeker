import React from "react";
import styles from "./location.css";
import LocationDetails from "./LocationDetails";
import LocationMap from "./LocationMap";

const Location = () => {
    return (
        <section className={styles.locationMap}>
          <LocationDetails/>
          <LocationMap/>
        </section>
    );
}

export default Location;
