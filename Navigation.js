import React from "react";
import classes from "./Navigation.module.css";

const Navigation=(props)=>{
    return(
        <nav className={classes.nav}>
<ul>
                <li>
                <a href="/">Home</a>
                </li>
                {props.isLoggedIn && (
                    <li>
                        <a href="/">About Us</a>
                    </li>
                )}

                {props.isLoggedIn && (
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                )}
                {props.isLoggedIn &&(
                   <li>
                    <button onClick={props.onLogout}>Admin </button>
                   </li> 

                   
                
                )}


            </ul>
        </nav>
    );
};

export default Navigation;