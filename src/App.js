import "./App.css";
import Home from "./components/Home";
import { Link, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  const router = createBrowserRouter([
    {
       path: "/",
      element: <Home/>,
    },
    {
      path: "/shop",
      element: <Shop/>
    }
  
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
