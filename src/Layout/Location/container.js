import React from "react";
import axios from "axios";
import LocationMap from "./LocationMap";

const ACCESS_KEY = "d1112bd1364da835be03be37b08c5e45";
const ipStackUrl = `http://api.ipstack.com/{IP_ADDRESS}?access_key=${ACCESS_KEY}`;

const Container = () => {
    axios.get(ipStackUrl.replace("{IP_ADDRESS}", "check"))
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        })

    return <LocationMap/>;
}

export default Container;