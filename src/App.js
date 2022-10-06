// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
