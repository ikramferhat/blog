import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  
      paper: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:"100%",
        display:"flex"
      },
      overlay: {
        width: '400px',
        height: '300px',
        background : 'black',
        opacity : '1',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        margin: theme.spacing(5, 5),
        padding: theme.spacing(1, 2),
        "&:hover":{       
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        '@media(max-Width: 1024px)' : {
          width: '300px',
          height: '300px',
        },
      },
      paperSignup:{
        textAlign: 'center',
        color:'white',       
    
      },
      title: {
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        fontWeight:"bold",
        '@media(max-Width: 768px)' : {
          fontSize: "14px",
        },
      },

      description: {
        marginTop: "15px",
        color: "white",
        fontSize: "13px",
        textAlign: "center",
        '@media(max-Width: 768px)' : {
          fontSize: "12px",
        },
       
      },
      ButtonSignup: {
        marginTop: theme.spacing(3),
        padding:"10px 10px",
        color:"#f77754",
        background:"transparent",
      },
     
   
    }));

export default function PaperCarouselBottom(props) {
    const classes = useStyles();

    return (
       <Paper className={classes.paper}
       style={{backgroundImage: `url(${props.image})`}}>
         <div  className={classes.overlay}>
         <div  className={classes.paperSignup}>
        <Typography className={classes.title}>
        {props.title}
        </Typography>
        <Typography className={classes.description}>
        {props.description}
        </Typography>
       <Button   className={classes.ButtonSignup}>Read more{' >>'}</Button>
         </div>
         </div>         
       </Paper>
        
    );
  }
   