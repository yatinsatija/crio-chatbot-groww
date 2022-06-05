
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { useEffect, useState } from "react";


import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
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
    marginLeft: theme.spacing(5),
  },
}));



export default function Review() {
  const classes = useStyles();
  const producttype=localStorage.getItem("producttype");
  
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Summary of the Order
      </Typography>
      
      

      {/* {{extract()}} */}

      <List disablePadding>
        
      {producttype === "stocks" ? (
        <div>
           <Typography variant="body2">Product Name :{localStorage.getItem("productname")} </Typography>
          <Typography variant="body2">Current Price: {localStorage.getItem("currentprice")}</Typography>
          <Typography variant="body2">Increment Decrement Value: {localStorage.getItem("idvalue")}</Typography>
          <Typography variant="body2">Increment Decrement Percentage : {localStorage.getItem("idper")}</Typography>
        </div>
         
        
        ) : (
          <></>
        )}
        {producttype === "mf" ? (
        <div>
           <Typography variant="body2">Product Name :{localStorage.getItem("productname")} </Typography>
          <Typography variant="body2">Mutual Fund Price: {localStorage.getItem("mfper")}</Typography>
          <Typography variant="body2">Mutual Fund Year: {localStorage.getItem("mfyear")}</Typography>
          {/* <Typography variant="body2">Increment Decrement Percentage : {localStorage.getItem("idper")}</Typography> */}
        </div>
         
        
        ) : (
          <></>
        )}
        {producttype === "fd" ? (
        <div>
           <Typography variant="body2">Company Name :{localStorage.getItem("fdcmp")} </Typography>
          <Typography variant="body2">Percentage: {localStorage.getItem("fdint")}</Typography>
          <Typography variant="body2">Number of Years: {localStorage.getItem("fdYear")}</Typography>
          {/* <Typography variant="body2">Increment Decrement Percentage : {localStorage.getItem("idper")}</Typography> */}
        </div>
         
        
        ) : (
          <></>
        )}
           

          
        

      </List>
      
    </React.Fragment>
  );
}