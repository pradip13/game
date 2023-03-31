import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./Product.css";
import Header from './Header';
import Checkout from './Checkout';


const Home = () => {

  const [cart,setCart] = useState(0);
  const [data,setData] = useState([]);
  const [open , setOpen ] = useState(false);
  // const [productCart,setProductCart] = useState([]);
  
  
function handleSave(item){
  // console.log(newData)

  // setData({...data, item});
  data.push(item);
  setData(data)
  console.log(data);
  // console.log(newData);
  setCart(cart+1);

};




  let gameData = [
    {
      id:"1",
      title:"pubg game",
      images:"https://cdn.pixabay.com/photo/2020/07/07/08/57/pubg-5379783_1280.png",
      start:"10 march",
      end:"11 march"
    },
    {
      id:"2",
      title:"action game",
      images:"https://cdn.pixabay.com/photo/2017/01/19/19/24/chess-1993141__480.jpg",
      start:"25 march",
      end:"26 march"
    },
    {
      id:"3",
      title:"fire game",
      images:"https://cdn.pixabay.com/photo/2019/09/05/13/20/giant-4454027_1280.jpg",
      start:"12 march",
      end:"13 march"
    },
    {
      id:"4",
      title:"clash game",
      images:"https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_1280.jpg",
      start:"15 march",
      end:"16 march"
    },

  ];





  return (
    <>
  


      <Header setCart={setCart} cart={cart}  setOpen={setOpen} />
      <Checkout open={open} setOpen={setOpen} data={data} />



    <div className='product'>
      {
        gameData.map((item)=>{
          return(
            <>

            <Card style={{ width: '18rem' , marginRight:"20px"}}>

            <Card.Img variant="top" src={item.images} />
            <Card.Body>
              <Card.Title style={{textAlign:"center",textTransform:"uppercase"}}>{item.title}</Card.Title>
              
            </Card.Body>
            <button 
            style={{border:"none",backgroundColor:'#F610D0',color:"#FFFFFF",padding:"1rem",textTransform:"uppercase"}}
            onClick={()=>handleSave(item)}
            
            
            >Add To cart</button>
            </Card>
            </>
              
              
              
              )
              
              
            })
          }
    </div>
 
          </>
  )
}

export default Home
