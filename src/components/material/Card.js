import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    Card: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        height:'100%',
        padding: theme.spacing(1,5),
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },
      CardContent: {
        flexGrow: 1,
      },
      cardActions: {
        margin:"auto"
      },
      title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }
    
    }));

const Simplecard = (props) => {
    const classes = useStyles()

    return (
        <Card className={classes.Card} square elevation={0}>
            <CardContent className={classes.CardContent}>
                {props.icon}
                <Typography  gutterBottom variant="h7" component="h4" className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.content}                  
                </Typography>
            </CardContent>
          <CardActions  className={classes.cardActions}>
                <Button size="small" >
                {props.button}
                </Button>
          </CardActions>
        </Card>
    )
}

export default Simplecard
