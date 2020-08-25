import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={1}>LOGO</Grid>
            <Grid item container direction="row" xs={2} spacing={3}>
              <Grid item>User</Grid>
              <Grid item>HOME</Grid>
              <Grid item>signout</Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
