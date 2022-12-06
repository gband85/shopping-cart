import "./App.css";
import Home from "./components/Home";
import { Link, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import Root from "./components/Root";
import ErrorPage from "./ErrorPage";

function App() {
  const [cart, setCart] = useState(function () {
    if (window.localStorage.getItem("cart") !== null)
      return JSON.parse(window.localStorage.getItem("cart"));
    else return [];
  });
  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (itemToAdd) => {
    let newCart;
    const exist = cart.some(function (cartItem) {
      return cartItem.itemID == itemToAdd.itemID;
    });
    // console.log(exist)
    if (exist) {
      newCart = cart.map(function (cartItem) {
        if (cartItem.itemID == itemToAdd.itemID) {
          return {
            ...cartItem,
            itemQuantity: cartItem.itemQuantity + itemToAdd.itemQuantity,
          };
          //  cartItem;
          // console.log(cartItem)
        }
        return cartItem;
      });
      console.log(newCart);
    } else {
      newCart = [...cart, itemToAdd];
    }

    setCart(newCart);
  };
  const deleteItem = (id) => {
    const remainingItems = cart.filter((item) => id !== item.itemID);
    console.log(remainingItems);
    setCart(remainingItems);
  };
  const router = createBrowserRouter([
    {
      // path: "/",
      element: <Root cart={cart} addToCart={addToCart} deleteItem={deleteItem} count={
        cart.length > 0
          ? cart.reduce((prev, curr) => prev + curr.itemQuantity, 0)
          : 0
      }/>,
    errorElement: <ErrorPage/>,
    children: [
          {
      path: "/",
     element: <Home/>,
    },
    {
      path: "/shop",
      element: <Shop addToCart={addToCart}/>
    }
    ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
