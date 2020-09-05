import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 390,
    height: 200
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Project = (props) => {
  const { title, description, dueDate, projectIdentifier } = props;

  const classes = useStyles();

  return (
    <Grid container item xs={3}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {
              dueDate && `Due: ${dueDate}`
            }
          </Typography>
          <Typography variant="body2" component="p">
            {description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;

// <Box bgcolor="white">
// <Grid container>
//   <Grid
//     container
//     item
//     direction="column"
//     justify="center"
//     alignItems="flex-start"
//     xs={9}
//     spacing={2}
//   >
//     <Grid item>{title}</Grid>
//     <Grid item>{description}</Grid>
//     <Grid item>{dueDate}</Grid>
//   </Grid>
//   <Grid
//     container
//     item
//     direction="column"
//     justify="flex-start"
//     alignItems="flex-end"
//     xs={3}
//     spacing={2}
//     style={{ marginTop: "5px", marginRight: "2px" }}
//   >
//     <Grid item>A</Grid>
//     <Grid item>B</Grid>
//   </Grid>
// </Grid>
// </Box>
