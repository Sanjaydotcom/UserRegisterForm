import { makeStyles } from '@material-ui/core/styles';
const primary = "#324466";

export default makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgrounColor: primary
  },

  roots: {
    width: 'auto',
    backgroundColor: primary,
    color: theme.palette.text.primary,
    height: "73px!important",
    paddingTop: "10px",
  },
  stepper: {
    width: 'auto',
    height: "60px",

    marginLeft: "theme.spacing(2)",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down(600 + theme.spacing(1) * 2)]: {
      width: "auto",
     
    
    },
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary
  },
}));
