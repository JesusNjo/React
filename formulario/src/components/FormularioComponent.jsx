import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const focusRef = useRef();
    console.log(focusRef)

    const incialForm={
        userName: '',
        email : '',
        password: ''
    }


    const{formState,userName,email,password, onInputChange} = useForm(incialForm);

    
    const onSubmit=(e)=>{
        
        
        e.preventDefault();
        const numbers = /[0-9]/g;
        const letters = /['a-z']/gi;
        if(numbers.test(password) && letters.test(password)){
            console.log(formState)
        }else{
            alert('La contraseña debe tener al menos 8 digitos numeros y letras');
            return
        }
    }

    useEffect(() => {
      focusRef.current.focus()
    
     
    }, [])
    

    return(
        <form onSubmit={onSubmit}>

        <div className="form-group">
          <label htmlFor="userName"><span>*</span> User name</label>
          <input 
          type="text"
          className="form-control"
           id="userName" 
           placeholder="Enter user name"
           value={userName}
           ref={focusRef}
           onChange={onInputChange} 
           required autoComplete="off"/>
           
          <br/>
        </div>

        <div className="form-group">
          <label htmlFor="email"><span>*</span> Email address</label>
          <input 
          type="email"
          className="form-control"
           id="email" 
           placeholder="Enter email"
           value={email}
           onChange={onInputChange} required />
          <br/>
        </div>


        <div className="form-group">
          <label htmlFor="password"><span>*</span> Password</label>
          <input 
          type="password" 
          
          className="form-control" 
          id="password" 
          placeholder="Password"
          value={password}
          onChange={onInputChange} required autoComplete="off"/>
        </div>


        <div className="form-check">
          <input 
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" required/>


          <label className="form-check-label" htmlFor="exampleCheck1">Are you agree with the terminals?</label>
        </div>

        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}