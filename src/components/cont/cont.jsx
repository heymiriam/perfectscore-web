import React from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import "./cont.scss";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeImage from '../../assets/pic1.jpg';
import DesignImage from '../../assets/kalen-emsley-Mn7GEjKA7HM-unsplash.jpg';
//import {InfoData} from "../../data/infoData";


const useStyles = makeStyles((theme) => ({
    
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:"black",
      color:"white",
        
    },
  }));
const ColLeft =styled.div`
    order: ${({reverse})=>(
        reverse ? "2" : "1"
    )};
`;

const ColRight =styled.div`
order: ${({reverse})=>(
    reverse ? "1" : "2"
)};

@media screen and (min-width: 768px){
    order: ${({reverse})=>(
        reverse ? "2" : "1"
    )}; 
}
`;
export default function  Cont({reverse}){
    const classes = useStyles();
    return(
        <section className="section">
           
            <div className="cont">
          
                <div className="sect">
                    <ColLeft className="col-left">
                        <h1 className="heading">Expore our beautiful cabins</h1>
                        <p className="paragraph">Some of the properties that we represent require special access and are only visible to our Private Office network and registered visitors.</p>
                        <p className="paragraph">If you would like to view details on these Network Private listings, please register using the link below</p>
                        <Button primary="true"><Link to="/properties">View Home</Link></Button>
                    </ColLeft>
                    <ColRight className="col-right" reverse={reverse}>
                        <img className="img"  src={HomeImage} alt="home" />
                    </ColRight>
                </div>
           
                <div className="shape"></div>
               <div className="sect">
               <ColRight className="col-right" reverse={reverse}>
               <img className="img"  src={DesignImage} alt="home" />
                </ColRight>
                <br></br><br></br><br></br><br></br>
                <ColLeft className="col-left">
                    <h1 className="heading">Modern Designs</h1>
                    <p className="paragraph">Some of the properties that we represent require special access and are only visible to our Private Office network and registered visitors.</p>
                    <p className="paragraph">If you would like to view details on these Network Private listings, please register using the link below</p>
                    <Button primary="true"><Link to="/properties">View Home</Link></Button>
                </ColLeft>
                </div>

            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                <Typography variant="body1" align="center">CÄBIN 2021</Typography>
                </Container>
            </footer>
        </section>
    )
}