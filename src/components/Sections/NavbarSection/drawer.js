import React from 'react';
import Collapsible from 'react-collapsible';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SecurityIcon from '@material-ui/icons/Security';
import FeedbackIcon from '@material-ui/icons/Feedback';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './drawer.css';
import { BsChevronDown } from "react-icons/bs";
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Collapse from '@material-ui/core/Collapse';




const useStyles = makeStyles({
  list: {
    width: 300,
    '@media(max-Width: 768px)' : {
      width: 230,
    },
    
  },
  menuButton: {
    cursor: 'default',  
    left: '25px',
  },
  typography: {
    marginLeft: '15px',
    fontFamily: "Josefin Sans , sans-serif",
    display: 'flex',
    cursor: 'pointer',
  },
  diCssdeck: {
    color: 'rgba(9, 182, 47, 0.75)',
    },
  linklogo: {
    display: 'flex',
    fontSize: '1.5rem',
    textDecorationLine: 'none',
    alignItems: 'center',
    color:'black'
  },
  
  textitem: {
    paddingLeft: '40px',
    fontFamily: "Josefin Sans , sans-serif",
    color: 'black',
    cursor: 'pointer',
    display: 'flex',
    '&:hover': {
      background: "#f77754",
      "&:before":{  
        position: 'absolute', 
        content: '""',
        width: '6px',
        height: '100%',
        background: "black",
        left: '0',
        top: '0',
        transition: '.3s',
        opacity: '1', 
    },
  },  
},
listItemText:{
  fontSize:'16px',
},
  folow: {
    display:"flex",
    width:"150px",
    margin:"0 auto",
    marginTop:'10px',
    justifyContent:"space-around",
    color:"black",
  },	
  link: { 
    textDecoration: 'none',  
  },

  
  
});

export default function Drawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >

   <div className={classes.list}>   
     <IconButton     
       edge="start"
       color="inherit"
       aria-label="close drawer"
       className={classes.menuButton}
       onClick={() => setOpen(false)}
     >
    <MenuIcon  cursor="pointer" />
    <Typography className={classes.typography} >
    <Link to="/" className={classes.linklogo}> 
     MyCook
    </Link>
    </Typography>
   </IconButton>    
    <Divider />

          <List>
          <Link to="/"  className={classes.link}>
               <ListItem  className={classes.textitem}>
               <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
               <ListItemText primary= "Settings" />
               </ListItem>
          </Link>
          <ListItem  className={classes.textitem}>
               <ListItemIcon>{<LanguageIcon />}</ListItemIcon>
               <ListItemText primary= "Language" />
               </ListItem>

         <Collapsible trigger={      
         <ListItem  className={classes.textitem}>
               <ListItemIcon>{<Brightness6Icon />}</ListItemIcon>
               <ListItemText  classes={{primary:classes.listItemText}} primary= "Theme" />
               <BsChevronDown />
          </ListItem> 
        }>
               <ListItem  className={classes.textitem}>
               <ListItemIcon>{<Brightness7Icon style={{color:"#FCBE11"}} />}</ListItemIcon>
               <ListItemText classes={{primary:classes.listItemText}} primary= "Light theme" />
               </ListItem>
               <ListItem  className={classes.textitem}>
               <ListItemIcon>{<Brightness3Icon style={{color:"black"}} />}</ListItemIcon>
               <ListItemText classes={{primary:classes.listItemText}} primary= "Dark theme" />
               </ListItem>
          
        </Collapsible>



          <Divider />
          <Link to="/"  className={classes.link}>
               <ListItem  className={classes.textitem} >
               <ListItemIcon>{<HelpOutlineIcon />}</ListItemIcon>
               <ListItemText primary= "Help & Support" /> 
               </ListItem>
          </Link>        
          <Link to="/"  className={classes.link}>
               <ListItem  className={classes.textitem} >
               <ListItemIcon>{<SecurityIcon />}</ListItemIcon>
               <ListItemText primary= "Privacy & Security" />
               </ListItem>
          </Link>   
          <Link to="/"  className={classes.link}>
               <ListItem  className={classes.textitem} >
               <ListItemIcon>{<FeedbackIcon />}</ListItemIcon>
               <ListItemText primary= "Send feedback" />
               </ListItem>
          </Link>    
          <Divider /> 
         
          <Typography style={{marginTop:"30px"}}align="center">
          Follow us
          </Typography>  
          <Box className={classes.folow}>
                <Link href="https://github.com/ikram-ferhat" >
                 <FacebookIcon style={{color:"black"}}/>
                </Link>
              
                <Link href="/"  >
                <InstagramIcon style={{color:"black"}} />
                </Link>
                           
                <Link href="/" >
                 <TwitterIcon style={{color:"black"}} />
                </Link>
			       </Box>          
         
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}