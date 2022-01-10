import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: "pointer",
        color: theme.palette.text.secondary,
        width:"100px",
        fontSize: '13px', 

      },
    cardMedia: {
      paddingTop:"40%",
      borderRadius: '50%',
      backgroundSize: 'contain',
    },
    
    }));

const CarouselCard= (props) => {
    const classes = useStyles()

    return (
        <Card className={classes.card} elevation={0} square>  
        <CardMedia  
        className={classes.cardMedia} 
          component="img"
          style={{backgroundImage: `url(${props.image})`}}
        />   
          <CardContent>    
          <Typography variant="h7" component="h8">  
          {props.title}
           </Typography>     
        </CardContent>  
        </Card>

    )
}

export default CarouselCard
