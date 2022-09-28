// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

function App() {
  
  const [cart,setCart]=useState(function(){
    if (window.localStorage.getItem('cart')!==null)
  return  JSON.parse(window.localStorage.getItem('cart'))
  else return [];
  })
  useEffect(() => {
    const data = window.localStorage.getItem('cart');
    if ( data !== null ) setCart(JSON.parse(data));
  }, []);

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
    },[cart])

  const addToCart=(itemToAdd)=>{
    let newCart;
 const exist=cart.some(function(cartItem) {return cartItem.itemID==itemToAdd.itemID
 });
// console.log(exist)
if (exist) {
 newCart=cart.map(function(cartItem){
    if (cartItem.itemID==itemToAdd.itemID) {
    return  {...cartItem,itemQuantity: cartItem.itemQuantity+itemToAdd.itemQuantity}
    //  cartItem;
    // console.log(cartItem)
    }
    return cartItem
  })
  console.log(newCart)
}
else {
newCart=[...cart,itemToAdd]
}

 setCart(newCart);

  }
  const deleteItem=(id)=>{

  
      const remainingItems = cart.filter((item) => id !== item.itemID);
      console.log(remainingItems)
    setCart(remainingItems);
  }


    //  }, [cart])
// useEffect(()=>{
//   setCart(JSON.parse(window.localStorage.getItem('cart')));
// },[])
    

    // console.log(cartItems)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart}  deleteItem={deleteItem} count={cart.length>0 ? cart.reduce((prev,curr)=>prev+curr.itemQuantity,0,) : 0}/>} />
      <Route path="/cart" element={<Cart cart={cart} deleteItem={deleteItem} cartPage={true} count={cart.length>0 ? cart.reduce((prev,curr)=>prev+curr.itemQuantity,0,) : 0}/> } />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
