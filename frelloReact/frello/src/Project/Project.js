import React from "react";
import { Box, Grid } from "@material-ui/core";

const Project = (props) => {
  const { title, description, dueDate } = props;

  return (
    <Grid container item xs={3}>
      <Box bgcolor="white">
        <Grid container>
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="flex-start"
            xs={9}
            spacing={2}
          >
            <Grid item>{title}</Grid>
            <Grid item>{description}</Grid>
            <Grid item>{dueDate}</Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            justify="flex-start"
            alignItems="flex-end"
            xs={3}
            spacing={2}
            style={{ marginTop: "5px", marginRight: "2px" }}
          >
            <Grid item>A</Grid>
            <Grid item>B</Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Project;
