import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProject, fetchProject } from "../redux/Actions/Actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 350,
      },
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const AddProject = ({ errors, createProject }) => {
  const classes = useStyles();
  const history = useHistory();

  const [ useProject,setProject ] = useState({
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
    errors: {}
  })
  // name
  // id
  // desc
  // start date
  // end date

  const onChange = (e) => {
      setProject({
          ...useProject,
          [e.target.name]: e.target.value,
      });
  }

  const onSubmit = (e) => {
      createProject(useProject);
      if(Object.keys(errors).length==0){
        history.push("/");
      }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box
        bgcolor="white"
        width="600px"
        margin="auto"
        marginTop="20px"
        padding="20px"
        borderRadius="20px"
      >
        <Grid
          container
          direction="column"
          justify="centre"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <TextField
              error={false}
              name="projectName"
              label="Project name"
              defaultValue=""
              helperText="Incorrect entry."
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              error={false}
              name="projectIdentifier"
              label="Project ID"
              defaultValue=""
              helperText="Incorrect entry."
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              error={false}
              fullWidth
              name="description"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label="Start date"
              name="start_date"
              type="date"
              defaultValue=""
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              name="end_date"
              label="End date"
              type="date"
              defaultValue=""
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
            />
          </Grid>
          <Grid>
            <Button variant="contained" color="default" onClick={onSubmit}>
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

const mapStateToProps = (state) => {
    return {
        errors: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddProject);
