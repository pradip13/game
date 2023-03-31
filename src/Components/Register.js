import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';
import "../App.css"
const Register = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password || !phone){
            setFlag(true); 
        }else{
            setFlag(false);
            localStorage.setItem('Email',JSON.stringify(email) );
            localStorage.setItem('password',JSON.stringify(password) );
            console.log('saved in local storage');
            setLogin(!login);
        }
     
    }

    function handleClick(){
        setLogin(!login)
    }

  return (

    <div>
      <div className="container outer" style={{width:"40%"}}>
        {login ?(
            <form onSubmit={handleSubmit}>
            <h4>Registeration Form</h4>
            <div className='form-group mt-3'>
               
                <input type="text" placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)}  />

            </div>

            <div className='form-group mt-3'>
               
                <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />

            </div>

            <div className='form-group mt-3'>
             
                <input type="password" 
                placeholder='Password' 
                className='form-control'
                onChange={(e)=>setPassword(e.target.value)}
                 />

            </div>

            <div className='form-group mt-3'>
          
                <input type="text" placeholder='Phone' className='form-control' onChange={(e)=>setPhone(e.target.value)} />

            </div> <br />
            <button type='submit' style={{borderRadius:"5px",border:"none",padding:"10px",background:"#85adad"}}>Register Here</button>
            <p onClick={handleClick} className="mt-3" style={{cursor:"pointer"}}><span style={{color:"blue"}}> Login?</span></p>

            {
                flag && (
                    <Alert color='primary' variant='danger' > 
                    PLease fill every field
                    
                    </Alert>
                )
            }
        </form>
        ) :(

        <Login /> 
        )}
      </div>
    </div>
  )
}

export default Register;
