import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../theme/theme";
import { ThemeProvider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  menuButtons: {
    display:"flex",
    flexDirection:"row",
  },
  item: {
    fontSize: "14px",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

export default function MiddleBar() {
  const classes = useStyles();
  const [activeBtn, setActiveBtn] = useState("posts");
  const clear = () => {
    console.log("hello mimi");
  };

  return (
    <ThemeProvider theme={theme}>
      <Toolbar className={classes.toolbar}>     
        <Box  className={classes.menuButtons}>
          {["posts","videos", "photos", "users", "all"].map((item) => (
            <Link
              style={{ textDecoration: 'none' }}
              component="button"
              variant="body2"
              onClick={() =>[clear(), setActiveBtn(item)]}
              color={activeBtn === item ? "textPrimary" : "textSecondary"}
              className={classes.item}
              key={item}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </ThemeProvider>
  );
}