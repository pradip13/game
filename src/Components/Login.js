import React, { useState } from 'react';
import { Alert  } from 'react-bootstrap';
import Home from './Home';
import "../App.css"

const Login = () => {

    const [emaillog,setEmaillog] = useState("");
    const[passwordlog,setPasswordlog] = useState("");
    const [flaglog,setFlaglog] = useState(false);
    const [home,setHome] = useState(true);


    function handlelogin(e){
        e.preventDefault();
        let pass = localStorage
        .getItem("password")
        .replace(/"/g, "");
      let email = localStorage.getItem("Email").replace(/"/g, "");

       if(!emaillog || !passwordlog){
        setFlaglog(true);
       }else if(passwordlog !== pass || emaillog !== email){
        setFlaglog(true)
       }else{
        setHome(!home);
        setFlaglog(false);
       }

    }
  return (
    <div className='inner'>
        {home ? (
        <form onSubmit={handlelogin}>
        <h4>Login</h4>
        <div className='form-group'>
               
                <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setEmaillog(e.target.value)} />

            </div>

            <div className='form-group mt-3'>
              
                <input type="password" 
                placeholder='password' 
                className='form-control'
                onChange={(e)=>setPasswordlog(e.target.value)}
                 />

            </div>
            <button type='submit' className='mt-3'style={{borderRadius:"5px",border:"none",padding:"10px",background:"#85adad"}}>Login</button>
            {
                flaglog && (
                    <Alert color='primary' variant='danger' > 
                    PLease fill correct password
                    
                    </Alert>
                )
            }
        </form>
        ):(
        <Home />
        )}
      
      
</div>
  )
}

export default Login;
