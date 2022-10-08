import "./App.css";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  
  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        {/* <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              deleteItem={deleteItem}
              cartPage={true}
              count={
                cart.length > 0
                  ? cart.reduce((prev, curr) => prev + curr.itemQuantity, 0)
                  : 0
              }
              total={
                cart.length > 0
                  ? cart.reduce(
                      (prev, curr) => prev + curr.itemPrice * curr.itemQuantity,
                      0
                    )
                  : 0
              }
            />
          }
        /> */}
      </Routes>
    
  );
}

export default App;
