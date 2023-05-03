import React from "react";
import AddCustomer from "../Customers/AddCustomer";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
// import CustomersList from "../Customers/CustomersList";
// import Customer from "../Customers/Customer";
// import CustomersList from "../Customers/CustomersList";
const Home = (props)=>{
     return(
<Card className={classes.home}>
    <h1>Welcome back!</h1>
    <AddCustomer />
    {/* <CustomersList />
    <Customer /> */}
</Card>



     );
};

export default Home;