import Item from "./Item";
import Navbar from "./Navbar";
import "./Cart.css"
import { useState,useEffect } from "react";

const Cart=(props)=>{
const deleteItem=(id)=>{
    console.log("cart!")
    props.deleteItem(id);
}

    if (props.cartPage) {
        return (
            <div>
            <Navbar/>
            <div className="cart">
        {props.count>0 ? <h3># of items: {props.count }</h3> : <h3>Your Cart is empty!</h3>}
        <h3>{props.total}</h3>
        <div className="items">
        {props.cart.map(item=>{
        return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={deleteItem} itemQuantity={item.itemQuantity} itemPrice={item.itemPrice}/>
        })}
</div>
                        </div>
                </div>        
        )
    }
else {
    return (
        <div className="cart">
   {props.count>0 ? <h3># of items: {props.count}</h3> : null}
   <h3>{props.total}</h3>
   <div className="items">
    {props.cart.map(item=>{
    return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={deleteItem} itemQuantity={item.itemQuantity} itemPrice={item.itemPrice}/>
    })}
    </div>
                    </div>
    )
}
}

export default Cart;