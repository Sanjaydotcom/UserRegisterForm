import React from 'react';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.roots}>
      <div position="absolute" className={classes.appBar}>
        <Grid container spacing={2} className={classes.stepper} >
      
          <Grid item xs={12} lg={12} md={12} sm={12} justify="center" >
            {props.children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
