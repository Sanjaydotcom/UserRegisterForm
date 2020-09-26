import React from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.roots}>
      <div position="absolute" className={classes.appBar}>
        <Grid container spacing={3} className={classes.stepper} >
        <Grid item xs={3} lg={3} md={3} sm={1}></Grid>
          <Grid item xs={6} lg={6} md={6} sm={10} justify="center" >
            {props.children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
