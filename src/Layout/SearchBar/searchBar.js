import React, {useState} from "react";
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "./searchBar.css"

const useStyles = makeStyles(() => ({
  searchBarButton: {
    flex: 1,
    height: '50px',
    marginLeft: '50px',
    marginRight: '20px',
  },
}));

const SearchBar = ({onSearch}) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (onSearch && search) onSearch(search);
  }

  return (
  <form className="searchBar" onSubmit={submitHandler} >
    <Paper className="searchBarSearch" >
      <IconButton type="submit" >
        <SearchIcon />
      </IconButton>
      <InputBase
          className="searchBarInput"
          onChange={handleChange}
          placeholder="Search for IP/URl location"
      />
      <Divider orientation="vertical" />
    </Paper>
    <Button className={classes.searchBarButton} variant="contained" color="primary" type="submit" >
      Search
    </Button>
  </form>
  );
}

export default SearchBar;
