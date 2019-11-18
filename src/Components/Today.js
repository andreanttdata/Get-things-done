import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {}
}));

function Today() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h3">
        My day
      </Typography>
    </div>
  );
}

export default Today;
