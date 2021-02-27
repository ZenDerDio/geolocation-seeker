import React from "react";
import styles from "./location.css";
import Location from "./Location";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const Layout = () => {
  return (
    <div className={styles.location} >
      <SearchResultsList />
      <div className={styles.locationData} >
          <Location currentLocation />
          <SearchBar />
          <Location />
      </div>
    </div>
  );
}

export default Layout;
