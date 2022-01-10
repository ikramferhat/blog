import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from "../../components/Image/SigUpimage/signUP.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    margin:"0px auto",

  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 16),

  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '40vh',
  },
  overlay: {
    display: 'flex',
    flexDirection:'column',
    width: '100%',
    height: '100%',
    background : 'rgba(0, 0, 0, 0.5)',
    opacity : '1',
    justifyContent:'center'   
  },
  paperLogin:{
    textAlign: 'center',
    color:'white'
  },
  ButtonSignup: {
    marginTop: theme.spacing(3),
    color:"#fff",
    backgroundColor:"black"
  },
  paper: {
    margin: theme.spacing(10, 6),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
 
  
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
    <Container maxWidth="md" >
    <Grid container  xs={12} sm={12}  className={classes.root} component={Paper} elevation={7} square >
      <Grid item xs={12} sm={7} md={7}  component={Paper} square  elevation={0}>
     <div className={classes.paper}>
        <Grid align='center'>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>

     <form className={classes.form} noValidate>
       <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField id="firstName" name="firstName" required fullWidth label='First Name' placeholder="Enter your first name"  />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField  id="lastName" name="lastName"required fullWidth label='Last Name' placeholder="Enter your last name"/>
          </Grid>
          <Grid item xs={12}>
          <TextField  id="email" name="email" required fullWidth label='Email Address' placeholder="Enter your email"  />
          </Grid>
         
          <Grid item xs={12}>
          <TextField id="password" name="password" type="password" required fullWidth label='Password' placeholder="Enter your password"  />
          </Grid>
          <Grid item xs={12}>
          <TextField id="confirmpassword" name="confirmpassword" type="password" required fullWidth label='Confirm Password' placeholder="Confirm your password"  />
          </Grid>
          <br />
          
          <Grid item xs={12}>
          <FormControl component="fieldset" >
               <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row  defaultValue="female" aria-label="gender" name="gender" >
                   <FormControlLabel value="female" control={<Radio />} label="Female" />
                   <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
          </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="accept" color="primary" name="accept" />}
              label="I accept the terms and conditions."
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.ButtonSignup}
              >
              Sign Up
            </Button>
            </Grid>
            </Grid>
          </form>        
        </div>
      </Grid>
      
      <Grid item xs={12} sm={5} md={5} className={classes.image} component={Paper} square elevation={0}> 
      <div className={classes.overlay}>
      <div  className={classes.paperLogin}>  
        <Typography component="h3" variant="h7">
         Already Have an Account ?
        </Typography>
       <Button size="small" variant="contained" className={classes.ButtonSignup} href="/signup">Sign In {'>>'}</Button>
      </div>
      </div>
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}