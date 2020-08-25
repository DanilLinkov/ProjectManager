import React from "react";
import { Grid } from "@material-ui/core";
import Project from "../Project/Project";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingTop: "10px",
    paddingLeft: "150px",
    paddingRight: "150px",
    marginTop: "5px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.projectContainer}>
      <Project
        title="Test"
        description="Lorem ipsum gasd afaw afwefawe awef awef asia aisd"
        dueDate="25/08/20"
      />
      <Project
        title="Test"
        description="Lorem ipsum gasd afaw afwefawe awef awef asia aisd"
        dueDate="25/08/20"
      />
      <Project
        title="Test"
        description="Lorem ipsum gasd afaw afwefawe awef awef asia aisd"
        dueDate="25/08/20"
      />
      <Project
      title="Test"
      description="Lorem ipsum gasd afaw afwefawe awef awef asia aisd"
      dueDate="25/08/20"
    />
    </Grid>
  );
};

export default Home;
