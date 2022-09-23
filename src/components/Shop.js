import Item from "./Item";
import { useState } from 'react';
import Navbar from "./Navbar";
import chicken from '../images/chicken.jpg';
import groucho from "../images/groucho.jpg";
import usb_rock from "../images/usb-rock.jpg";
import useless from "../images/useless.jpg";
import whoopee from "../images/whoopee.jpg";
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
  const [items,setItems]=useState(ITEM_DATA)
console.log(items)
    return (
        <div>
    <Navbar />
    <div className="mai">
    <div className="items">
    {items.map(item=>{
return  <Item id={item.itemID} title={item.itemTitle} image={item.itemImage} />
    })}
       
        </div>
    </div>    
    </div>
    )
}

export default Shop;