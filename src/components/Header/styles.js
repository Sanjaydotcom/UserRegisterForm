import { makeStyles } from '@material-ui/core/styles';
const primary = "#324466"; 

export default makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgrounColor:primary
  },
  roots: {
    width: 'auto',
      backgroundColor: primary,
    color: theme.palette.text.primary,
    height:"60px!important",
    paddingTop:"10px"
  },
  stepper: {
    width: 'auto',
    height:"60px",
    position:"relative",
    top:"-10px",
      marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary
  },
}));
