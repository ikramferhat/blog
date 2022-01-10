import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({

    griditem: {
		padding: theme.spacing(2, 2),

	},
	Boxitem: {
		marginBottom: '18px'
	},
	itemFolow: {
		marginRight: '18px',
		color:"inherit",
		textAlign: 'center',
	    '@media(max-Width: 970px)' : { 
			textAlign: 'left',
			marginRight: '8px',
		  },},	
  }));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box
	     px={{ xs: 3, sm:10 }}//px	padding-left, padding-right
		 py={{ xs: 5, sm: 10 }} //py	padding-top, padding-bottom	
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
		  <Grid item xs={12} sm={3} className={classes.griditem}>
              <Box borderBottom={1} className={classes.Boxitem}>Pages</Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                 About
                </Link>
              </Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                  Write
                </Link>
              </Box>
            </Grid>

			<Grid item xs={12} sm={3} className={classes.griditem}>
              <Box borderBottom={1} className={classes.Boxitem}>Account</Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                 Sign UP
                </Link>
              </Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                Login
                </Link>
              </Box>
            </Grid>

			<Grid item xs={12} sm={3} className={classes.griditem}>
              <Box borderBottom={1} className={classes.Boxitem}>Help</Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box className={classes.Boxitem}>
                <Link href="/" color="inherit">
                Contact
                </Link>
              </Box>
            </Grid>
			<Grid item xs={12} sm={3} className={classes.griditem}>
              <Box borderBottom={1} className={classes.Boxitem}>Folow Us</Box>
              <Box>
                <Link href="https://github.com/ikram-ferhat" className={classes.itemFolow}>
                 <FacebookIcon/>
                </Link>
              
                <Link href="/"  className={classes.itemFolow}>
                <InstagramIcon />
                </Link>
                           
                <Link href="/" className={classes.itemFolow}>
                 <TwitterIcon />
                </Link>
			       </Box>            
            </Grid>		
          </Grid>

          <Box textAlign="center" 
		  pt={{ xs: 5, sm: 10 }} //pt padding-top
		  pb={{ xs: 5, sm: 0 }} //pb  padding-bottom
		  > 
            My Cook &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
