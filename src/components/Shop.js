import Item from "./Item";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Navbar from "./Navbar";
import chicken from "../images/chicken.jpg";
import groucho from "../images/groucho.jpg";
import usb_rock from "../images/usb-rock.jpg";
import useless from "../images/useless.jpg";
import reading_cat from "../images/reading_cat.gif";
import whoopee from "../images/whoopee.jpg";
import  snake  from "../images/snake.jpg"
import Cart from "./Cart";
import "./Shop.css";

const Shop = (props) => {
  const ITEM_DATA = [
    {
      itemID: 122863,
      itemTitle: "Rubber Chicken",
      itemImage: chicken,
      itemPrice: 9.95,
    },
    {
      itemID: 122864,
      itemTitle: "Groucho Glasses",
      itemImage: groucho,
      itemPrice: 2.95,
    },
    {
      itemID: 122865,
      itemTitle: "USB Pet Rock",
      itemImage: usb_rock,
      itemPrice: 6.95,
    },
    {
      itemID: 122866,
      itemTitle: "Useless Box",
      itemImage: useless,
      itemPrice: 7.95,
    },
    {
      itemID: 122867,
      itemTitle: "Reading Cat",
      itemImage: reading_cat,
      itemPrice: 599.95,
    },
    {
      itemID: 122868,
      itemTitle: "Whoopee Cushion",
      itemImage: whoopee,
      itemPrice: 1.95,
    },
    {
      itemID: 122868,
      itemTitle: "Snake in a can",
      itemImage:  snake,
      itemPrice: 5.95,
    },
  ];
  const CART_DATA = [
    // {
    //   itemID: "122866",
    //   itemTitle: "Useless Box",
    //   itemImage: useless,
    //   itemQuantity: "4",
    // },
    // {
    //   itemID: "122867",
    //   itemTitle: "Whoopee Cushion",
    //   itemImage: whoopee,
    //   itemQuantity: "2",
    // },
  ];

  const [items, setItems] = useState(ITEM_DATA);
  const [cartVisibility, setCartVisibility]=useState(false);

  const addItem = (itemToAdd) => {
    props.addToCart(itemToAdd);

    // console.log(cart)
  };
  const deleteItem = (id) => {
    props.deleteItem(id);
    // console.log("shop!")
    // const remainingItems = cart.filter((item) => id !== item.itemID);
    // setCart(remainingItems);
  };
  const toggleCart=()=>{
    console.log("go!")
    setCartVisibility(!cartVisibility)

  }
  // console.log(items)
  return (
    <div>
      <Navbar count={props.count} toggleCart={toggleCart}/>
      <div className="mai">
    <Cart
        addItem={addItem}
          cart={props.cart}
          deleteItem={deleteItem}
          count={props.count}
          total={props.total}
          cartVisibility={cartVisibility}
        /> 
        <div className="display-items">
          {items.map((item) => {
            return (
              <Item
                itemID={item.itemID}
                itemTitle={item.itemTitle}
                itemImage={item.itemImage}
                addItem={addItem}
                displayItem={true}
                itemPrice={item.itemPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
