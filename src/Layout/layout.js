import React, {useEffect, useReducer} from "react";
import "./location.css";
import Location from "./Location";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import Constants from "../Constants/constants";

const initialState = {
    currentSearchQuery: "",
    searchQueries: [],
}

const actions = {
    setSearch: "setSearchQuery",
    initializeSearchHistory: "setSearchQueriesHistory",
}

const reducer = (state, action) => {
    if (action.type === actions.setSearch) {
        return {
            currentSearchQuery: action.payload.searchQuery,
            searchQueries: [ ...state.searchQueries, action.payload.searchQuery]
        }
    }

    if (action.type === actions.initializeSearchHistory) {
        return {
            currentSearchQuery: action.currentSearchQuery,
            searchQueries: [ ...state.searchQueries, ...action.payload.searchQueries]
        }
    }

}

const Layout = () => {
  const [search, dispatch] = useReducer(reducer, initialState);

  const setSearchQuery = (value) => {
      dispatch({ type: actions.setSearch, payload: {searchQuery: value}})
  }

  useEffect(() => {
    const searchHistory = JSON.parse(sessionStorage.getItem(Constants.SESSION_STORAGE_KEY));
    if (!!searchHistory) {
        dispatch({ type: actions.initializeSearchHistory, payload: {searchQueries: searchHistory}})
    }
  }, []);

  useEffect(() => {
     sessionStorage.setItem(Constants.SESSION_STORAGE_KEY, JSON.stringify(search.searchQueries));
  }, [search.searchQueries]);

  return (
    <div className="location" >
      <SearchResultsList queriesList={search.searchQueries} setSearchQuery={setSearchQuery} />
      <div className="locationData" >
          <Location />
          <SearchBar onSearch={setSearchQuery} />
          <Location searchQuery={search.currentSearchQuery} />
      </div>
    </div>
  );
}

export default Layout;
