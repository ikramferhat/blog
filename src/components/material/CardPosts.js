import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import salad from "../Image/Carousel-images/salad.png";
import { CardActionArea } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
   
  },
  media: {
    height:200,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
   
    <Card className={classes.root} elevation={2} >
       <CardHeader
        /*action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        avatar={props.avatar}
        title={props.titleavatar}
      />       
      <CardMedia
        className={classes.media}
        component={props.component}
        image={props.src}
        autoPlay 
        controls 
        />
      <CardContent>
        <Typography variant="body1"  component="p">
        {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h5">  
          {props.desc}
           </Typography>  
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
     </Card>
  );
}