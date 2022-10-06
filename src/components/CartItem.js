import { useState } from "react";
import "./Item.css";

const CartItem = (props) => {
  const [item, setItem] = useState(  
    {
    itemID: props.itemID,
    itemQuantity: props.itemQuantity,
    itemTitle: props.itemTitle,
    itemImage: props.itemImage,
    itemPrice: props.itemPrice,
  }
);

  const handleChange = (e) => {
    setItem({ ...item, itemQuantity: parseInt(e.target.value) });
  };
  const decreaseQuantity = () => {
    if (item.itemQuantity === 1) {
      return;
    }
    setItem({ ...item, itemQuantity: item.itemQuantity - 1 });
    
      props.addItem({...item,itemQuantity: -1})
    
  };
  const increaseQuantity = () => {
    setItem({ ...item, itemQuantity: item.itemQuantity + 1 });
    
      props.addItem({...item,itemQuantity: 1})
    
  }
  
  
    return (
      <div className="card card--cart">

          <img
            src={props.itemImage}
            className="card__img card__img--small"
            alt=""
            id="itemImage"
          />

          {/* <div class="card__overlay"> */}
          <div className="card__body">
          <div>
          <h3 className="card__title" id="itemTitle">
            {props.itemTitle}
          </h3>
          <h3>${props.itemPrice}</h3>
          </div>
          <div className="number-input">
              <button className="number-input__button" type="button" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="number"
                value={props.itemQuantity}
                onChange={handleChange}
                id="itemQuantity"
                className="number-input__field number-input__field--small"
              />
              <button className="number-input__button" type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          <button className="delete__btn" onClick={() => props.deleteItem(props.itemID)}>delete</button>
          {/* </div> */}
        </div>
      </div>
    );
  
};

export default CartItem;
