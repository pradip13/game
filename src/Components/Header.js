import React from 'react';

const Header = ({cart,setOpen}) => {
    // console.log(cart)
  return (
    <>
        <div style={{background:"grey",padding:"10px"}}>
        <nav clasName="navbar navbar-dark bg-dark d-flex">
        <div className='d-flex' style={{justifyContent:"space-between"}}>
         <a clasName="navbar-brand" style={{color:"#fff"}}>Navbar</a>
          <form clasName="form-inline" >
            <span>{cart}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" 
          alt="img" style={{width:"20px", height:"20px",color:"#fff"}}
          onClick={()=> setOpen(true)}
       />
    </form>
   </div>
    </nav>
        </div>
    </>
  )
}

export default Header;
