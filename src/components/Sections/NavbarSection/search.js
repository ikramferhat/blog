import { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  search: {
        position: 'relative',
        borderRadius: '50px',
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: '100%',
      },

      searchIcon: {
        padding: 10,
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"grey",

      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
        padding: theme.spacing(0,1),


      },
      inputInput: {   
        padding: theme.spacing(0,1),
        width: '100%',
        
  },
}))

  
  export default function Search() {
    const classes = useStyles();
    const [value, setValue] = useState("");

    return (
    <Grid  sm={8} xs={12}  style={{margin:"0 auto", marginBottom:"10px",marginTop:"50px", borderRadius: '15px',}}>
      <div className={classes.search}>  
        <InputBase
          placeholder="Search..."
          type="search"
          startAdornment={
            <IconButton  type="submit">
            <SearchIcon />
          </IconButton>
          }       
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search '}}
        />        
      </div>
    </Grid>
    );
  }