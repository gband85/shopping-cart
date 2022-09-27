import Item from "./Item";
import Navbar from "./Navbar";
import "./Cart.css"
import { useState,useEffect } from "react";

const Cart=(props)=>{
return (
    <div className="cart">
{props.cart.map(item=>{
return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={props.deleteItem} itemQuantity={item.itemQuantity}/>
})}
                </div>
)
}

export default Cart;