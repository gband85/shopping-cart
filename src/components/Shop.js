import Item from "./Item";
import { useState } from 'react';
import uniqid from "uniqid";
import Navbar from "./Navbar";
import chicken from '../images/chicken.jpg';
import groucho from "../images/groucho.jpg";
import usb_rock from "../images/usb-rock.jpg";
import useless from "../images/useless.jpg";
import whoopee from "../images/whoopee.jpg";
import Cart from "./Cart";
import './Shop.css'

const Shop=()=>{
  const ITEM_DATA=[
     {
      itemID: "122863",
      itemTitle: "Rubber Chicken",
      itemImage: chicken,
    },
    {
      itemID:  "122864",
      itemTitle: "Groucho Glasses",
      itemImage: groucho,
    },
    {
      itemID:  "122865",
      itemTitle: "USB Pet Rock",
      itemImage: usb_rock,
    },
    {
      itemID:  "122866",
      itemTitle: "Useless Box",
      itemImage: useless,
    },
    {
      itemID:  "122867",
      itemTitle: "Whoopee Cushion",
      itemImage: whoopee,
    },
  ]
  const CART_DATA=
  
   [
    
      {
        itemID:  "122866",
        itemTitle: "Useless Box",
        itemImage: useless,
        itemQuantity: "4",
      },
      {
        itemID:  "122867",
        itemTitle: "Whoopee Cushion",
        itemImage: whoopee,
        itemQuantity: "2",
      },
    
  ]

  const [items,setItems]=useState(ITEM_DATA);
  const [cart,setCart]=useState([]);
  const addItem=(item)=>{
 const newCart=[...cart];
console.log(item)
newCart.push(item)
//  console.log(newCart)
 setCart([...cart,item]);
console.log(cart)
  }
// console.log(items)
    return (
        <div>
    <Navbar />
    <div className="mai">
    <Cart cart={cart}/>
    <div className="items">
    {items.map(item=>{
return  <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} addItem={addItem}/>
    })}
       
        </div>
    </div>    
    </div>
    )
}

export default Shop;