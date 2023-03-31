import React from 'react'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Checkout = ({open,setOpen,data}) => {

    function handleClose(){
        setOpen(false);



    }
  return (
            <>

        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
      style={{ margin:"2rem"}}
      >
        <DialogTitle id="alert-dialog-title">
          Checkout Page
        </DialogTitle>
       {
        data.map((product)=>{
            return (
                <div>
                 <DialogContent>
                   <img src={product.images} alt="img" style={{width:"80px"}} />
                   <p style={{textDecoration:"line"}}>Title: {product.title}</p>
                    <p>Start Date <span>{product.start}</span></p>  {"  "} { "  "}     
                    <p>End Date <span>{product.end}</span></p>          
                 </DialogContent>
                </div>
            )
        })
       }
        
      </Dialog>


            </>

  )
}

export default Checkout;
