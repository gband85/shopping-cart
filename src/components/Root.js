import { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar"

const Root=(props)=>{
    const [cartVisibility, setCartVisibility]=useState(false);

    const toggleCart=()=>{
      console.log("go!")
      setCartVisibility(!cartVisibility)
  
    }
  let overlay;
  if (cartVisibility) {
    overlay="overlay open";
  }
  else {
    overlay="overlay";
  }
    return (
    <>
    <Navbar toggleCart={toggleCart} count={props.count}/>
          <div className="container">
      <div className={overlay}></div>
        <Outlet/>
        <Cart
        addItem={props.addToCart}
          cart={props.cart}
          deleteItem={props.deleteItem}
          count={
                props.cart.length > 0
                  ? props.cart.reduce((prev, curr) => prev + curr.itemQuantity, 0)
                  : 0
              }
              total={
                props.cart.length > 0
                  ? props.cart.reduce(
                      (prev, curr) => prev + curr.itemPrice * curr.itemQuantity,
                      0
                    )
                  : 0
              }
          cartVisibility={cartVisibility}
          toggleCart={toggleCart}
        /> 
      </div>
      </>
      )
}

export default Root;