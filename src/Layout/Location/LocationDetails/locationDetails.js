import React from "react";
import {shape, string, bool} from "prop-types";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import "./locationDetails.css";

const LocationDetails = ({ addressData, userLocation }) => {
  const detailsTitle = !!userLocation ? "Your current location details:" : "Location details:";
  return (
    <Card className="locationDetails" style={{backgroundColor: "#424242"}} variant="outlined">
      <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
      >
        {!!addressData.ip && addressData.city && addressData.country_name ?
            <>
              <Typography component="h2" variant="h5" color="secondary" gutterBottom>
                  {detailsTitle}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom >
                IP: {addressData.ip}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom >
                City: {addressData.city}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom>
                Country: {addressData.country_name}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom>
                Continent: {addressData.continent_name}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom>
                Region: {addressData.region_name}
              </Typography>

              <Typography variant="h6" component="h2" className="locationText" gutterBottom>
                Capital: {addressData.location?.capital}
              </Typography>

              <img className="locationDetailsFlag" src={addressData.location?.country_flag} alt="country-flag" />
            </>
            :
            <Typography component="h2" variant="h6" className="locationTextError" gutterBottom >
              No details for this search
            </Typography>
        }
      </Grid>
    </Card>
  );
}

LocationDetails.propTypes = {
  addressData: shape({
    ip: string,
    city: string,
    continent_name: string,
    country_name: string,
    region_name: string,
    location: shape({capital: string, country_flag: string,}),
  }),
  userLocation: bool,
}

LocationDetails.defaultProps = {
  addressData: null,
  userLocation: false,
}

export default LocationDetails;
