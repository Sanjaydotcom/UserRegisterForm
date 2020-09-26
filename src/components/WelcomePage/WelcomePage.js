import React, {useEffect ,useState} from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import useStyles from './style';

export default function WelcomePage(props) {
    const classes = useStyles();
    const [userName, setUserName]= useState("")
    useEffect(() => {
       const values= JSON.parse(localStorage.getItem('formValues'));
       setUserName(values.fullName)
      });
  return (
  <>
     <div className={classes.pageContainer}>
     <Grid container spacing={3} >
        <Grid item xs={12} sm={12} className={classes.content}>
        <Typography component="h6" variant="h1" align="center">
        <Box  fontWeight="600" letterSpacing={3}>
               WELCOME
               </Box >
             </Typography>

               <Typography className={classes.useName} component="h5" variant="h1" align="center">
               <Box fontWeight="400" color="primary" letterSpacing={3}>
               {userName}
               </Box >
         
             </Typography>
        </Grid>
        </Grid>
        </div>
  </>
  );
}
