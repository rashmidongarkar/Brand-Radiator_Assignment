import React from 'react';
import classes from "./Customer.module.css";

const Customer =(props)=>{
return(
<li className={classes.customer}>
    <h1>{props.id}</h1>
    <h2>{props.name}</h2>
    <h3>{props.email}</h3>
    <h4>{props.tel}</h4>
    <p>{props.feedback}</p>
</li>

);
};


export default Customer;