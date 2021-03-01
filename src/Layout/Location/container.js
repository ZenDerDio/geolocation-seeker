import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import {string} from 'prop-types';
import Location from "./location";
import Constants from "../../Constants/constants";

const Container = memo(({ searchQuery }) => {
    const [ipData, setIpData] = useState({});
    const ipAddressParam = !!searchQuery ? searchQuery : Constants.IP_STACK_CURRENT_ADDRESS_KEY;
    useEffect(() => {
        axios.get(Constants.IP_STACK_URL.replace("{IP_ADDRESS}", ipAddressParam))
            .then((response) => {
                setIpData(response?.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [searchQuery]);

    return <Location addressData={ipData}/>;
})

Container.propTypes = {
    searchQuery: string,
}

Container.defaultProps = {
    searchQuery: "",
}

export default Container;