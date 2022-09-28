import Item from "./Item";
import Navbar from "./Navbar";
import "./Cart.css"
import { useState,useEffect } from "react";

const Cart=(props)=>{
    if (props.cartPage) {
        return (
            <div>
            <Navbar/>
            <div className="cart">
           <h3># of items: {props.count }</h3>
        {props.cart.map(item=>{
        return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={props.deleteItem} itemQuantity={item.itemQuantity}/>
        })}
                        </div>
                </div>        
        )
    }
else {
    return (
        <div className="cart">
        <h3># of items: {props.count}</h3>
    {props.cart.map(item=>{
    return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={props.deleteItem} itemQuantity={item.itemQuantity}/>
    })}
                    </div>
    )
}
}

export default Cart;