import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
const primary = indigo[800]; 

export default makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgrounColor:primary
  },
  root: {
    width: 'auto',
      backgroundColor: primary,
    color: theme.palette.text.primary,
    height:"60px"
  },
  stepper: {
    width: 'auto',
    height:"60px",
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
