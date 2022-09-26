import Item from "./Item";
import Navbar from "./Navbar";
import "./Cart.css"

const Cart=(props)=>{
    
return (
    <div className="cart">
{props.cartItems.map(item=>{
return <Item itemID={item.itemID} itemTitle={item.itemTitle} itemImage={item.itemImage} deleteItem={props.deleteItem}/>
})}
                </div>
)
}

export default Cart;