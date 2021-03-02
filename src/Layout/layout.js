import React, {useEffect, useReducer} from "react";
import Location from "./Location";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import Constants from "../Constants/constants";
import "./layout.css";

const initialState = {
    currentSearchQuery: "",
    searchQueries: [],
}

const ACTIONS = {
    setSearch: "setSearchQuery",
    initializeSearchHistory: "setSearchQueriesHistory",
}

const reducer = (state, action) => {
    if (action.type === ACTIONS.setSearch) {
        return {
            currentSearchQuery: action.payload.searchQuery,
            searchQueries: [ ...state.searchQueries, action.payload.searchQuery]
        }
    }

    if (action.type === ACTIONS.initializeSearchHistory) {
        return {
            currentSearchQuery: action.currentSearchQuery,
            searchQueries: [ ...state.searchQueries, ...action.payload.searchQueries]
        }
    }
}

const Layout = () => {
  const [search, dispatch] = useReducer(reducer, initialState);

  const setSearchQuery = (value) => {
      dispatch({ type: ACTIONS.setSearch, payload: {searchQuery: value}})
  }

  useEffect(() => {
    const searchHistory = JSON.parse(sessionStorage.getItem(Constants.SESSION_STORAGE_KEY));
    if (!!searchHistory) {
        dispatch({ type: ACTIONS.initializeSearchHistory, payload: {searchQueries: searchHistory}})
    }
  }, []);

  useEffect(() => {
     sessionStorage.setItem(Constants.SESSION_STORAGE_KEY, JSON.stringify(search.searchQueries));
  }, [search.searchQueries]);

  return (
    <div className="layout" >
      <SearchResultsList queriesList={search.searchQueries} setSearchQuery={setSearchQuery} />
      <div className="layoutData" >
          <Location userLocation />
          <SearchBar onSearch={setSearchQuery} />
          <Location searchQuery={search.currentSearchQuery} />
      </div>
    </div>
  );
}

export default Layout;
