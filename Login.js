import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
// import { useState } from "react";

import React ,{useEffect, useReducer, useState} from "react";
import Card from "../UI/Card/Card";

const emailReducer =(state,action)=>
{
    if(action.type=== "USER_INPUT")
    {
        return { value:action.val, isValid:action.val.includes("@")}
    }  

    if(action.type=== "INPUT_BLUR")
    return { 
        value:state.value, isvalid:state.value.includes("@")
    }


return{ value:"" , isvalid:false};

}


const passwordReducer =(state,action)=>
{
    if(action.type=== "USER_INPUT")
    {
        return { value:action.val, isValid:action.val.includes('@')}
    }
    if(action.type=== "INPUT_BLUR")
    return { 
        value:state.value, isvalid:state.value.includes("@")
    }


return{
value:"" , isvalid:false};

}


const Login=(props)=>{
  const [enteredEmail, setEnteredEmail]=useState('');
  const [emailIsValid, setEmailIsValid]=useState('');
  const [enteredPassword, setEnteredPassword]=useState('');
  const [passwordIsValid, setPasswordIsValid]=useState('');

  const [formIsValid, setFormIsValid]= useState(false);

 const [email, dispatchEmail]= 
 useReducer(emailReducer,{value:"",isvalid:null});


 const [password, dispatchPassword]= 
 useReducer(passwordReducer,{value:"",isvalid:null});

    useEffect(()=>
    {
      let timer= setTimeout(()=>
      {
        console.log("input has changed");
        setFormIsValid(
            enteredEmail.includes('@') &&
            enteredPassword.trim().length > 6
           
            // email.isValid && password.isValid
           
            );
      }, 500)
 return ()=>
 {
    console.log("Return is called");
    clearTimeout(timer);
 }

    },[email.isValid,password.isValid])

  const emailChangeHandler = (event)=>{
  
    setEnteredEmail(event.target.value);
    
    //   dispatchEmail({type:"USER-INPUT", val:event.target.value})

    setFormIsValid(
        event.target.value.includes('@') &&
        password.value.trim().length > 6
    );
  };

  const passwordChangeHandler=(event)=>{

     setEnteredPassword(event.target.value);


    // dispatchPassword({type:"USER-INPUT", val:event.target.value})

     setFormIsValid(
        event.target.value.trim().length > 6 &&
        email.includes('@') 
     );
  };
  const validateEmailHandler=()=>{

    setEmailIsValid(email.includes('@'));

    // dispatchEmail({type:"INPUT_BLUR"});
  };
const validatePasswordHandler=()=>{

  setPasswordIsValid(password.value.trim().length > 6);
//   dispatchPassword({type:"INPUT_BLUR"});


};

const submitHandler= (event)=>{

    event.preventDefault();
    localStorage.setItem("loggedIn","1");
    props.onLogin(email.value, password.value);
};

return(
    
        <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <div
            className={`${classes.control} ${
                email.isValid === false ? classes.invalid :''
            
            }`}>
          <label htmlFor="email">Email</label>
          <input
          type="text"
          id="email"
          value={email.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          />
          </div>
          <div 
          className={`${classes.control} 
          ${ password.isValid === false ? classes.invalid : ''}`}
          >

          <label htmlFor="password">Password</label>
          <input
          type="text"
          id="password"
          value={password.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          />
          </div>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disbled={!formIsValid}>
                Login
            </Button>

          </div>
        </form>
    </Card>
    

);
        };

   export default Login;     
