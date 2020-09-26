import { makeStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import bgImg from "../../img/bg.jpg";
const primary = indigo[800]; 
export default makeStyles(theme => ({

    pageContainer:{
        width:"100%",
        height:"100vh",
      
      backgroundImage:`url(${bgImg})`,
      backgroundPosition:" fixed",
      backgroundSize:"cover",
      overflow:"hidden",
      opacity: "0.8",
    },
    content:{
        marginTop:"25vh"
    },
    useName:{
        color: "#f25436" 
    }
}));
