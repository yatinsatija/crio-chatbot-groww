import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm.component";
import PaymentForm from "./PaymentForm.component";
import Review from "./Review.component";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { storage, firestore } from "../../firebase/firebase.utils";
import Axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
 
}));

const steps = [ "Product details", "Review the Details"];

function getStepContent(step) {
  switch (step) {
    // case 0:
    //   return <AddressForm />;
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const stocks = localStorage.getItem("stocks");
  const sdata=JSON.parse(stocks);
  const mf = localStorage.getItem("mf");
  const mdata=JSON.parse(mf);

  const fd = localStorage.getItem("fd");
  const fdata=JSON.parse(fd);


  // const [sdata,setSData]=useState([]);
  // const [mdata,setMData]=useState([]);
  // const [fdata,setFData]=useState([]);

  const type=localStorage.getItem("producttype");

  
  return (
    
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Upload Your Product
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for uploading.
                </Typography>
                <Typography variant="subtitle1">
                  You order has been successfully uploaded . Once we find a correct user we will notify you. This is a great inittiative taken by you . All the best.
                </Typography>
                
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e)=>{
                      
                  if(type==="stocks"){
                    



                    // setSData(JSON.parse(stocks)); 
                    // console.log(sdata);
                    Axios.post("http://localhost:3001/stocks", {
                      productname: sdata[0],
                      currentprice: sdata[1],
                      idvalue: sdata[2],
                      idper: sdata[3],
                      img: localStorage.getItem("url"),
                      
                    }).then((response) => {
                      console.log(response);
                    });
                  }
                  else if(type==="mf"){
                    Axios.post("http://localhost:3001/mf", {
                      productname: mdata[0],
                      mfper: mdata[1],
                      mfyear: mdata[2],
                      img: localStorage.getItem("url"),
                      
                    }).then((response) => {
                      console.log(response);
                    });
                  }
                  else if(type==="fd"){
                    Axios.post("http://localhost:3001/fd", {
                      fdcmp: fdata[0],
                      fdint: fdata[1],
                      fdYear: fdata[2],
                      img: localStorage.getItem("url"),
                      
                    }).then((response) => {
                      console.log(response);
                    });
                  }
                
                 history("/dashboard");

                }}

                    className={classes.button}
                  >
                    Submit
                  </Button>
                  
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
}
