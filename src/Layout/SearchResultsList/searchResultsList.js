import React from "react";
import Button from '@material-ui/core/Button';
import {arrayOf, func, oneOfType, oneOf, string} from "prop-types";
import LocationMap from "../Location/LocationMap";
import SendIcon from '@material-ui/icons/Send';
import Typography from "@material-ui/core/Typography";
import './searchResultsList.css';

const SearchResultsList = ({ queriesList, setSearchQuery }) => {

  const uniqueQueriesList = [...new Set(queriesList)];

  const handleSetQueryAction = (query) => {
      if (setSearchQuery) setSearchQuery(query)
  }

  return (
      <section className="searchResult" >
          <Typography component="h2" variant="h5" color="secondary" className="searchResultTitle"  gutterBottom >
              Previously searched:
          </Typography>
        <ul className="searchResultList" >
            {uniqueQueriesList && !!uniqueQueriesList.length ?
                uniqueQueriesList.map((query, index) => (
                <li key={`${query}--${index}`} className="searchResultButton">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSetQueryAction(query)}
                        endIcon={<SendIcon/>}
                    >
                        <span className="searchResultButtonText">Search for: {query}</span>
                    </Button>
                </li>
            ))
             : <Typography component="h2" variant="h6" className="searchResultEmpty" gutterBottom>
                 No previous results yet, change it!
               </Typography>}
        </ul>
      </section>
  );
}

LocationMap.propTypes = {
  queriesList: arrayOf(string),
  setSearchQuery: oneOfType([func, oneOf([null])]),
}

LocationMap.defaultProps = {
  queriesList: [],
  setSearchQuery: null,
}

export default SearchResultsList;
