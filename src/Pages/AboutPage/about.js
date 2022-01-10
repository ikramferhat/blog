import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from "../../components/Image/About-image/about.png";


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 16),
  },
  root: {
    margin:"50px auto",
    padding: theme.spacing(0,2),

  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '60vh',
    animation: "$fadeIn 3s linear infinite",
    '@media(Height: 1366px)' : {
      backgroundPosition: 'top',
    },
    },
    "@keyframes fadeIn": {
      "0%, 100%": {
        transform: "translateY(0rem)"
      },
      "50%": {
        transform: "translateY(1rem)"
      }
    },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  left: {
    padding: theme.spacing(0,0),
  },
  Title: {
    position: 'relative', 
    fontSize: '2rem', 
    letterSpacing: 1.25,
    fontWeight: "bold",
    marginTop:"30px",
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "&:after":{  
      position: 'absolute', 
      content: '""',
      left: '0',
      top: '50px',
      right:'0',
      bottom: '0',
      width: '100px',
      height: '2px',
      background: "#f77754",
      
    }
  },
  
 }));


export default function About() {
  const classes = useStyles();

  return (
     
        <Container maxWidth="lg" className={classes.container} >
        <Grid container xs={12} sm={10}  className={classes.root} spacing={3}  >         
          <Grid item xs={12} sm={6} square >
            <div>
              <Typography  component="h5" variant="h2" align="left" color="textPrimary" noWrap className={classes.Title} >
              About Us
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" paragraph>
                about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about 
            
              </Typography>
             </div>
        </Grid>
         <Grid item xs={12} sm={6} className={classes.image} />            
       </Grid>
      </Container>
       
  );
}