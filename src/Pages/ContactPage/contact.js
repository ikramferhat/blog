import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Simplecard from '../../components/material/Card';
import SecurityIcon from '@material-ui/icons/Security';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Maps from '../../components/Sections/MapsSection/maps';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0, 16),
  },
  Grid_1: {
    margin:"20px auto",
    padding: theme.spacing(1,3),
   },
  Grid_2: {
    margin:"10px auto",
  },
  Grid_3: {
    margin:"70px auto",
  },
  GridItemCard: {
    '@media(max-Width: 970px)' : { 
      marginBottom: theme.spacing(2),
    }
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '30vh',
    backgroundColor: "black"
  },
  paperForm: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
  },
  paperInfo: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(2), 
  },
  submit: {
    marginTop: theme.spacing(1),
    color:"#fff",
    backgroundColor:"black"
   },
  Title: {
    position: 'relative', 
    fontSize: '2rem', 
    letterSpacing: 1.25,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "&:after":{  
      position: 'absolute', 
      content: '""',
      display:"block",
      left: '0',
      top: '50px',
      right:'0',
      bottom: '0',
      width: '100px',
      height: '2px',
      background: "#f77754",
      transition: "0.3s ease 0s, left 0.3s ease 0s",
      margin:"0 auto"
    }
  },
  Description: {
    fontSize: '1rem', 
  },
  InformationTypography: {
    color:"white",
    display: 'flex',
    marginBottom:'20px'
  },
  InformationTypoTitle: {
    marginBottom:'20px',
    color:"white"
  }
  
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>

     <Grid container >
    <Grid xs={12} sm={10} item className={classes.Grid_1}>
      <Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.Title}>
          Contact Us
      </Typography>
      <Typography variant="h7" align="center" color="textSecondary" className={classes.Description} paragraph>
        We’re here to help and answer any question you might have.<br />
         We look forward to hearing from you
      </Typography>
    </Grid>

    <Grid container  xs={12} sm={10} className={classes.Grid_2}  component={Paper} elevation={7}  square >
       <Grid item xs={12} sm={6} square >
        <div className={classes.paperForm}>
        <Grid align='left'>
          <Typography align='left'  variant="caption"  gutterBottom>Send your request!</Typography>
       </Grid>
       <form className={classes.form} noValidate>
       <Grid container spacing={3}> 
          <Grid item xs={12} sm={6} md={6}>
          <TextField id="name" name="name" required fullWidth label='Name' placeholder="Enter your name"  />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          <TextField  id="phone" name="phone" required fullWidth label='Phone' placeholder="Enter your phone"/>
          </Grid>
          <Grid item xs={12}>
          <TextField  id="email" name="email" required fullWidth label='Email Address' placeholder="Enter your email"  />
          </Grid>
          <Grid item xs={12}>
          <TextField id="message" label="Message" required fullWidth placeholder="Your message"  multiline maxRows={1}/>       
          </Grid>                  
          <Grid item xs={12}>
            <Button type="submit" variant="contained" className={classes.submit}>
              Send
            </Button>
          </Grid>
          </Grid>
        </form>         
        </div>
    </Grid>
    <Grid item xs={12} sm={6}  className={classes.image} square > 
      <div className={classes.paperInfo}>
        <Typography variant="h7" component="h3" className={classes.InformationTypoTitle}>Contact Information</Typography>
        <Typography className={classes.InformationTypography}><EmailIcon/> <span style={{marginLeft:"20px"}}>xyz@email.com</span></Typography>
        <Typography className={classes.InformationTypography}><PhoneIcon  /> <span style={{marginLeft:"20px"}}>+33.00.00.00</span></Typography>
        <Typography className={classes.InformationTypography}><LocationOnIcon /> <span style={{marginLeft:"20px"}}>Address</span></Typography>
      </div>
    </Grid>  
    </Grid>

    <Grid container justifyContent="space-around" sm={8}   className={classes.Grid_3}  square >
    <Grid item xs={12} sm={5}  align="center" square className={classes.GridItemCard} >
        <Simplecard
         icon={<HelpOutlineIcon fontSize="large"  />}
         title={'Help & Support'}
         content={'Have questions, complaints or feature requests? head to our Help Center.'}
         button={'Get support'}
         >
        </Simplecard>
    </Grid>
    <Grid item xs={12} sm={5}  align="center" square className={classes.GridItemCard}>
        <Simplecard
         icon={<SecurityIcon fontSize="large"/>}
         title={'Security'}
         content={'Report security issues and vulnerabilities.'}
         button={'Learn how'}>
        </Simplecard>
    </Grid>
    </Grid>

    
   </Grid>
    </Container>
  );
}



