import React, {useState}from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import ReactPlayer from 'react-player';
import heroVideo from './Cuttingupchicken.mp4';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({  
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      position: 'relative',
      background : 'white',
      top:'0',
      zIndex: '1',
        '& video': {
          objectFit: 'cover',
        
        },
      },
      overlay: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background : 'rgba(0, 0, 0, 0.5)',
      },
      title: {
        color: "white",
        fontSize: "48px",
        textAlign: "center",
        '@media(max-Width: 768px)' : {
          fontSize: "40px",
        },
        '@media(max-Width: 480px)' : {
          fontSize: "32px",
        },       
      },

      description: {
        marginTop: "15px",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        maxWidth: "600px",
        '@media(max-Width: 768px)' : {
          fontSize: "24px",
        },
        '@media(max-Width: 480px)' : {
          fontSize: "18px",
        },       
      },

      Button:{
        fontSize: "12px",
        marginTop: "32px",
        padding: "10px 40px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color:"white",
        backgroundColor:"#f77754"

      }
})
const Hero= () => {
    const classes = useStyles();
    return(
        <section className={classes.root}>
        <ReactPlayer
          url={heroVideo}
          playing
          loop
          muted
          width="100%"
          height="70vh"
          background="white"
        />
        <div className={classes.overlay}>
        <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center"
         padding="8px 24px"
         height="100%" 
         color="#fff"
        >
          <Typography  component="h1" variant="h7" className={classes.title}>
          What's for dinner! 
          </Typography>
          <Typography  className={classes.description}>
          Get a free meal plan and share your recipes with us
          </Typography>
          <Button color="primary" variant="contained" className={classes.Button}>
          explore more
          </Button>
        </Box>
        </div>
        </section>

    );
}

export default Hero;
