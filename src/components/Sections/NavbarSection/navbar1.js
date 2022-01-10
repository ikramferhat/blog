import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {FiAlignJustify} from 'react-icons/fi';
import { Link} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { DiCssdeck } from 'react-icons/di';
import Search from "./search";
import Drawer from './drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
 
  Toolbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "30px 3%",
    fontFamily : "Josefin Sans , sans-serif",
    height: '10px',
    backgroundColor: 'black',
    
  },
  div1: {
    display:"flex",
    alignItems: 'center', 

  },
  div2: {


  },
  div3: {

  },
  div4: {
    display: 'flex',
    alignItems: 'center', 

  },
  Logo: {
    cursor: 'pointer',
    textDecoration: 'none',
    marginRight: "auto",
    fontWeight:900,
    color:"#fff",
    fontSize: "20px",
  },
  Navlink_center:{
    listStyle: 'none',
    display: 'flex',
  },
  Navlink_right:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',  
  },
  li:{ 
    display:'inline-block',
    padding: "1em 0",
    width:"120px",
    fontWeight:350,
    fontSize: "18px",
    letterSpacing: 1.25,
    '@media(max-Width: 1024px)' : {
      
    },
    '@media(max-Width: 768px)' : {
     display:"none"
    },
    '@media(max-Width: 1024px)' : {
      padding: "0px 15px",
      fontSize: "14px",
       width:"100px",
    },
  },
  Link:{
    textDecoration: 'none',
    transition: "all 0.3s ease 0s",
    color:"#fff",
    position:"relative",
    "&:after":{  
      position: 'absolute', 
      content: '""',
      display:"block",
      left: '50%',
      top: '30px',
      right:'0',
      bottom: '0',
      width: '0px',
      height: '2px',
      background: "#f77754",
      transition: "0.3s ease 0s, left 0.3s ease 0s",
     },
"&:hover:after":{
  width: '100%',
  left:"0",
}}
}));


function Navbar() {
    const classes = useStyles();
   
  return (
    <AppBar position="satic">
    <Toolbar className={classes.Toolbar}>

    <div className={classes.div1}> 
    <Drawer />  
    <Typography variant="h6" >
          <Link className={classes.Logo} to="/">           
          MyCook
          </Link>
    </Typography> 
    </div>

    <div className={classes.div2}> 
       <ul className={classes.Navlink_center}>    
          <li className={classes.li} ><Link to="/" className={classes.Link} >HOME</Link></li>
          <li className={classes.li} ><Link to="/write" className={classes.Link}>WRITE</Link></li>
          <li className={classes.li}  ><Link to="/about" className={classes.Link} >ABOUT</Link></li>
          <li className={classes.li} ><Link to="/contact" className={classes.Link} >CONTACT</Link></li>
       </ul>          
     </div>
    
     <div className={classes.div4}>  
          <ul className={classes.Navlink_center}>
          <li className={classes.li} ><Link to="/login" className={classes.Link} >LOGIN</Link></li>
          <li className={classes.li} ><Link to="/signup" className={classes.Link}>SIGNUP</Link></li>
          </ul>
     </div> 
    </Toolbar>
  </AppBar>
 
  )
    }

export default Navbar;

