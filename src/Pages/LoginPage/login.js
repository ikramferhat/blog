import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import img from "../../components/Image/Login-image/login.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    margin:"0px auto",

  },
  heroContent: {
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
    width: '100%',
    height: '100%',
    background : 'rgba(0, 0, 0, 0.5)',
    opacity : '1',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center'   
  },
  paperSignup:{
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  


  return (
    <div className={classes.heroContent}>
    <Container maxWidth="md" >
    <Grid container  xs={12} md={12}  className={classes.root} component={Paper} elevation={7} square >
      <Grid item xs={12} sm={7} md={7}  component={Paper}  elevation={0}>
        <div className={classes.paper}>
        <Grid align='center'>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>

     <form className={classes.form} noValidate>
       <Grid container spacing={2}>
        
          <Grid item xs={12}>
          <TextField  id="email" name="email" required fullWidth label='Email Address' placeholder="Enter your email" />
          </Grid>
         
          <Grid item xs={12}>
          <FormControl fullWidth required >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
           </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" name="remember" />}
              label="Remember me"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"  
              className={classes.ButtonSignup}            
            >
              Sign In
            </Button>
            </Grid>
            </Grid>
          </form>
          
        </div>
      </Grid>
      <Grid item  xs={12} sm={5} md={5} className={classes.image} component={Paper} square elevation={0}> 
      <div  className={classes.overlay}>
      <div  className={classes.paperSignup}>
        <Typography component="h3" variant="h7">
         Don't Have an Account?
        </Typography>
       <Button size="small" variant="contained"  className={classes.ButtonSignup} href="/signup">Signup {'>>'}</Button>
      </div>
      </div>
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}