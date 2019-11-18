import React from "react";
import { Grid } from "@material-ui/core";
import SunIcon from "@material-ui/icons/WbSunnyOutlined";
import StarBorder from "@material-ui/icons/StarBorder";

import UserGeneratedListContainer from "./Components/UserGeneratedListContainer";
import HeaderBar from "./Components/HeaderBar";
import LinkWithIcon from "./Components/LinkWithIcon";

export default function App() {
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
          <LinkWithIcon text="Important" icon={<StarBorder />} href="/today" />
        </Grid>
        <Grid item xs={2}>
          N
        </Grid>
      </Grid>
      <UserGeneratedListContainer />
    </>
  );
}
