import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Project from "../Project/Project";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/Actions/Actions";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    paddingTop: "10px",
    paddingLeft: "150px",
    paddingRight: "150px",
    marginTop: "5px",
  },
}));

const Home = ({ projects, getprojects }) => {
  const classes = useStyles();
  useEffect(() => {
    getprojects();
  }, []);

  console.log(projects)

  return (
    <Grid container direction="row" className={classes.projectContainer}>
      <Project
        title="Test"
        description="Lorem ipsum gasd afaw afwefawe awef awef asia aisd"
        dueDate="25/08/20"
      />
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.projectName}
          description={project.description}
          dueDate={project.end_date}
        />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getprojects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
