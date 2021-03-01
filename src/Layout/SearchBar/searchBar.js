import React, {useState} from "react";
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px 0px',
    margin: '0 5px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: '20px',
    width: '50vw',
  },
  search: {
    marginLeft: '20px',
    display: 'flex',
    width: '50vw',
  },
  button: {
    flex: 1,
    height: '55px',
    padding: '0 100px',
    marginLeft: '50px',
    marginRight: '20px',
  },
  multilineColor:{
    color:'white',
    borderBlockColor: 'white',
  }

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
  <form className={classes.root} onSubmit={submitHandler} >
    <Paper className={classes.search} >
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
          className={classes.input}
          onChange={handleChange}
          placeholder="Search for IP/URl location"
      />
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
    <Button className={classes.button} variant="contained" color="primary" type="submit" >
      Search
    </Button>
  </form>
  );
}

export default SearchBar;
