import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {FiAlignJustify} from 'react-icons/fi';
import { Link} from 'react-router-dom';
import './navbarStyle.css';
import { IconContext } from 'react-icons';
import { DiCssdeck } from 'react-icons/di';
import Search from "./search";
import Drawer from './drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';


function Navbar() {

  return (
    <> 
    <Toolbar className="Toolbar">
      <Drawer />
      <IconContext.Provider value={{ color: '#fff' }}> 
      <Typography variant="h6">
          <Link to="/" className="Logo">           
           <EcoIcon />MyCook
          </Link>
     </Typography> 
     <div className="ul">      
          <li > 
          <Link to="/" className="Navlink">HOME</Link>       
          </li>
          <li>          
          <Link to="/write" className="Navlink">WRITE</Link>          
          </li>
          <li > 
          <Link to="/about" className="Navlink">ABOUT</Link>       
          </li>
          <li>          
          <Link to="/contact" className="Navlink">CONTACT</Link>          
          </li>
          
     </div>

     <div className="ul-right">
       <Search />
          <li> 
          <Link to="/login" className="Navlink">LOGIN</Link>       
          </li>
          <li>         
          <Link to="/signup" className="Navlink">SIGNUP</Link>     
          </li>
     </div> 
      </IconContext.Provider>
  </Toolbar>
      
    </>
  );
}

export default Navbar;
