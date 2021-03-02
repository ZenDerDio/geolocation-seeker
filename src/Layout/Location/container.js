import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import {string, bool} from 'prop-types';
import Location from "./location";
import Constants from "../../Constants/constants";

const Container = memo(({ searchQuery, userLocation }) => {
    const [ipData, setIpData] = useState({});
    const ipAddressParam = !!searchQuery ? searchQuery : Constants.IP_STACK_CURRENT_ADDRESS_KEY;
    useEffect(() => {
        if (!!userLocation || !!searchQuery) {
            axios.get(Constants.IP_STACK_URL.replace("{IP_ADDRESS}", ipAddressParam))
                .then((response) => {
                    setIpData(response?.data)
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }, [searchQuery, userLocation]);

    return <Location addressData={ipData} userLocation={userLocation} />;
})

Container.propTypes = {
    searchQuery: string,
    userLocation: bool,
}

Container.defaultProps = {
    searchQuery: null,
    userLocation: false,
}

export default Container;