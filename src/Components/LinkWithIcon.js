import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const ComponentToGo = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

function LinkWithIcon({ text, href, icon }) {
  const classes = useStyles();

  return (
    <Button
      /* variant="contained"
      color="default"
      className={classes.button} */
      color="primary"
      component={ComponentToGo}
      to={href}
      startIcon={icon}
    >
      {text}
    </Button>
  );
}

export default LinkWithIcon;
