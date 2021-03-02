const Constants = {
    IP_STACK_URL: `http://api.ipstack.com/{IP_ADDRESS}?access_key=${process.env.REACT_APP_ACCESS_IP_STACK}`,
    IP_STACK_CURRENT_ADDRESS_KEY: "check",
    SESSION_STORAGE_KEY: "geolocation__search__queries",
}

export default Constants;