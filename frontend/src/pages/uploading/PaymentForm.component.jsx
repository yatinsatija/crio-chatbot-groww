import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Select from 'react-select';


import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
// import { storage, firestore } from "../../firebase/firebase.utils";
import ImageUpload from "./imageupload.component";
// 
const handleChange=(event)=> {

  const file = Array.from(event.target.files);
  this.setState({ file });   
}

const actions = [
  { label: "Stocks", value: "stock" },
  { label: "Mutual Funds", value: "mf" },
  { label: "Fixed Deposits", value: "fd" }
];
// const fileuploadHandler = () => {

//   const storageRef = storage().ref();
// this.state.file.forEach((file) => {
//   storageRef
//       .child(`images/${file.name}`)
//       .putFile(file).then((snapshot) => {
//   })
// });
// }

export default function PaymentForm() {
  const [productname, setProductname] = useState("");
  // const [expirydate, setExpiryDate] = useState("");
  // const [description,setDescription]=useState("");
    const [producttype,setProducttype]=useState("");
      const [currentprice, setCurrentPrice] = useState("");
  const [idvalue,setIdValue]=useState("");
  const [idper,setIdPer]=useState("");
     const [mfper,setMfPer] =useState("");
  const [mfyear,setMfYear]=useState("");
  const [fdcmp,setFdCmp]=useState("");
const [fdint,setFdInt]=useState("");
 const [fdYear,setFdYear]=useState("");
 var stocks = [productname,currentprice,idvalue,idper];
  var mf = [productname,mfper,mfyear];
  var fd = [fdcmp,fdint,fdYear];
  // var status2 = [productname,expirydate,description];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Product Type
      </Typography>
             <div className="container" >
   <div className="row" >
      
    <div className="col-md-4" style={{width:"50%"}}>
        
    {/* <Select value={selectedOption} options={ actions } onChange={e =>  setProducttype(e.target.value)} /> */}
     <select id="producttype" defaultValue="Select Product Type"
             onChange={(e) =>   setProducttype(e.target.value)  }>
        <option value="none">None</option>       
       <option value="stocks">Stocks</option>
       <option value="mf">Mutual Funds</option>
       <option value="fd">Fixed Deposits</option>
     </select>
     </div>
     {localStorage.setItem("producttype",producttype)}
    
    </div>
  </div>
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        {producttype === "stocks" ? (
          <Grid  item xs={12} md={6}>
            <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Product Name
        </Typography>
            <TextField
              required
              id="product-name"
              style={{width:"100%"}}
              // label="Product Name"
              fullWidth
              // autoComplete="cc-number"
              onChange={(e) => {
                setProductname(e.target.value);
                localStorage.setItem("productname",productname);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            
           </Grid>
           <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Current Price
      </Typography>
          <TextField
            required
            id="current-price"
            style={{width:"100%"}}
            // label="Current Price"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setCurrentPrice(e.target.value);
              localStorage.setItem("currentprice",currentprice);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Incrment Decrement Value
      </Typography>
          <TextField
            required
            id="id-value"
            // label="Increment Decrement Value"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setIdValue(e.target.value);
              localStorage.setItem("idvalue",idvalue);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Increment Decrement Percentage
      </Typography>
          <TextField
            required
            id="id-per"
            // label="Incrment Decrement Percentage"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setIdPer(e.target.value);
              localStorage.setItem("idper",idper);
            }}
          />
          {localStorage.setItem("stocks", JSON.stringify(stocks))}
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
          </Grid>
          
          
        
        ) : (
          <></>
        )}
        {producttype === "mf" ? (
          <Grid item xs={12} md={6}>
            <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Product Name
        </Typography>
            <TextField
              required
              id="product-name"
              // label="Product Name"
              fullWidth
              // autoComplete="cc-number"
              onChange={(e) => {
                setProductname(e.target.value);
                localStorage.setItem("productname",productname);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            
           </Grid>
           <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
              Mutual Fund Price
      </Typography>
          <TextField
            required
            id="mf-price"
            // label="Current Price"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setMfPer(e.target.value);
              localStorage.setItem("mfper",mfper);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Mutual Fund Year
      </Typography>
          <TextField
            required
            id="mf-year"
            // label="Increment Decrement Value"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setMfYear(e.target.value);
              localStorage.setItem("mfyear",mfyear);
            }}
          />
          {localStorage.setItem("mf", JSON.stringify(mf))}
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        
          </Grid>
          
          
        
        ) : (
          <></>
        )}
        {producttype === "fd" ? (
          <Grid item xs={12} md={6}>
            <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Company Name
        </Typography>
            <TextField
              required
              id="company-name"
              // label="Product Name"
              fullWidth
              // autoComplete="cc-number"
              onChange={(e) => {
                setFdCmp(e.target.value);
                localStorage.setItem("fdcmp",fdcmp);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            
           </Grid>
           <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Percentage
      </Typography>
          <TextField
            required
            id="percentage"
            // label="Current Price"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setFdInt(e.target.value);
              localStorage.setItem("fdint",fdint);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Number of Years
      </Typography>
          <TextField
            required
            id="id-value"
            // label="Increment Decrement Value"
            fullWidth
            // autoComplete="cc-number"
            onChange={(e) => {
              setFdYear(e.target.value);
              localStorage.setItem("fdYear",fdYear);
            }}
          />
          {localStorage.setItem("fd", JSON.stringify(fd))}
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        
          </Grid>
          
          
        
        ) : (
          <></>
        )}
        
        
        
        
        <Grid item xs={12}>
        <label className="fileUploaderContainer">
        <Typography variant="h6" gutterBottom>
        Click here to upload Images<br/>
      </Typography>
            
           
             <ImageUpload />
          </label>
        </Grid>
        

      </Grid>
    </React.Fragment>
  );
}

