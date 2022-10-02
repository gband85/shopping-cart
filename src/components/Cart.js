import Item from "./Item";
import Navbar from "./Navbar";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const deleteItem = (id) => {
    console.log("cart!");
    props.deleteItem(id);
  };

  // if (props.cartPage) {
  //   return (
  //     <div>
  //       <Navbar count={props.count}/>
  //       <div className="cart">
  //         {props.count > 0 ? (
  //           <h3># of items: {props.count}</h3>
  //         ) : (
  //           <h3>Your Cart is empty!</h3>
  //         )}
  //         <h3>Total: ${props.total}</h3>
  //         <div className="cart__items">
  //           {props.cart.map((item) => {
  //             return (
  //               <Item
  //               addItem={props.addToCart}
  //                 itemID={item.itemID}
  //                 itemTitle={item.itemTitle}
  //                 itemImage={item.itemImage}
  //                 deleteItem={deleteItem}
  //                 itemQuantity={item.itemQuantity}
  //                 itemPrice={item.itemPrice}
  //               />
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } 
  // else {
    let visible;
    if (props.cartVisibility) {
visible = "cart show";
    }
    else {
      visible="cart hide";
    }
    return (
      <div className={visible}>
                  {props.count > 0 ? (
            <h3># of items: {props.count}</h3>
          ) : (
            <h3>Your Cart is empty!</h3>
          )}
        <h3>Total: ${props.total}</h3>
        <div className="cart__items">
          {props.cart.map((item) => {
            return (
              <Item
              addItem={props.addItem}
                itemID={item.itemID}
                itemTitle={item.itemTitle}
                itemImage={item.itemImage}
                deleteItem={deleteItem}
                itemQuantity={item.itemQuantity}
                itemPrice={item.itemPrice}
              />
            );
          })}
        </div>
      </div>
    );
  // }
};

export default Cart;
