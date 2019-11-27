import React from "react";
import { Grid, Divider, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  WbSunnyOutlined as SunIcon,
  StarBorder as StarIcon,
  Add as AddIcon
} from "@material-ui/icons";

import UserGeneratedListContainer from "./Components/UserGeneratedListContainer";
import HeaderBar from "./Components/HeaderBar";
import LinkWithIcon from "./Components/LinkWithIcon";

export default function App() {
  const useStyles = makeStyles(theme => ({
    fab: {
      textAlign: "right"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <HeaderBar />
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={4}>
          <LinkWithIcon text="Today" icon={<SunIcon />} href="/today" />
        </Grid>
        <Grid item xs={2}>
          N
        </Grid>
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={4}>
          <LinkWithIcon text="Important" icon={<StarIcon />} href="/today" />
        </Grid>
        <Grid item xs={2}>
          N
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <UserGeneratedListContainer />
      <div className={classes.fab}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}
