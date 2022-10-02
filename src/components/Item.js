import { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [item, setItem] = useState(()=>{
    if (props.displayItem) {
      return (
    {
    itemID: props.itemID,
    itemQuantity: 1,
    itemTitle: props.itemTitle,
    itemImage: props.itemImage,
    itemPrice: props.itemPrice,
  }
      )
}
else {
  return (
    {
    itemID: props.itemID,
    itemQuantity: props.itemQuantity,
    itemTitle: props.itemTitle,
    itemImage: props.itemImage,
    itemPrice: props.itemPrice,
  }
      )
}
});
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(item)
    setItem({...item, itemQuantity: 0})
    props.addItem(item);
  };
  const handleChange = (e) => {
    setItem({ ...item, itemQuantity: parseInt(e.target.value) });
  };
  const decreaseQuantity = ()=>setItem({ ...item, itemQuantity: item.itemQuantity-1});

  const increaseQuantity = ()=>setItem({ ...item, itemQuantity: item.itemQuantity+1});

  if (props.displayItem) {
    return (
      <div className="card">
        <a href={props.href}>
          <img
            src={props.itemImage}
            className="card__img"
            alt=""
            id="itemImage"
          />

          {/* <div class="card__overlay"> */}
          <h3 className="card__title" id="itemTitle">
            {props.itemTitle}
          </h3>
          <h3>${props.itemPrice}</h3>
          <form onSubmit={handleSubmit}>
          <div className="number-input">
         <button type="button" onClick={decreaseQuantity}>-</button>  
         <input
              type="number"
              value={item.itemQuantity}
              onChange={handleChange}
              id="itemQuantity"
            /><button type="button" onClick={increaseQuantity}>+</button>
            </div>
            <button type="submit">Add to Cart</button>
          </form>

          {/* </div> */}
        </a>
      </div>
    );
  } else {
    return (
      <div className="card">
        <a href={props.href}>
          <img
            src={props.itemImage}
            className="card__img"
            alt=""
            id="itemImage"
          />

          {/* <div class="card__overlay"> */}
          <h3 className="card__title" id="itemTitle">
            {props.itemTitle}
          </h3>
          <h3>${props.itemPrice}</h3>
          <h3>Quantity: {props.itemQuantity}</h3>
          <button onClick={() => props.deleteItem(props.itemID)}>delete</button>
          {/* </div> */}
        </a>
      </div>
    );
  }
};

export default Item;
