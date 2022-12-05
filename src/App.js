import "./App.css";
import Home from "./components/Home";
import { Link, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import Root from "./components/Root";

function App() {
  const router = createBrowserRouter([
    {
      // path: "/",
      element: <Root/>,
    
    children: [
          {
      path: "/",
     element: <Home/>,
    },
    {
      path: "/shop",
      element: <Shop/>
    }
    ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
