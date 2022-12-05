import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar"

const Root=()=>{
    return (
    <>
    <Navbar/>
          <div className="container">
      {/* <div className={overlay}></div> */}
      <div className="main">
        <Outlet/>
      </div>
      {/* <Cart/> */}
      </div>
      </>
      )
}

export default Root;