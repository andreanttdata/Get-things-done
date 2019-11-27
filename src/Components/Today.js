import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

const useStyles = makeStyles(theme => ({
  title: {},
  date: {}
}));

function Today() {
  const classes = useStyles();
  const currentDay = dayjs().format("dddd D MMMM");

  return (
    <div>
      <Typography className={classes.title} variant="h4">
        My day
      </Typography>
      <Typography className={classes.date} variant="h5">
        {currentDay}
      </Typography>
    </div>
  );
}

export default Today;
