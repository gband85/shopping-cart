import { useState } from "react";
import "./Item.css";

const ShopItem = (props) => {
  const [itemQuantity, setItemQuantity] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();

     props.addItem({...props.item,itemQuantity});
    setItemQuantity(1);
  };
  const handleChange = (e) => {
    setItemQuantity(parseInt(e.target.value));
  };
  const decreaseQuantity = () => {
    if (itemQuantity === 1) {
      return;
    }
    setItemQuantity(itemQuantity - 1);

  };
  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1 );

  }
    return (
      <div className="card">

          <img
            src={props.item.itemImage}
            className="card__img"
            alt=""
            id="itemImage"
          />

          {/* <div class="card__overlay"> */}
          <div>
          <h3 className="card__title" id="itemTitle">
            {props.item.itemTitle}
          </h3>
          <h3>${props.item.itemPrice}</h3>
          </div>
          <form onSubmit={handleSubmit} className="item-form">
            <div className="number-input">
              <button type="button" onClick={decreaseQuantity} className="number-input__button">
                -
              </button>
              <input
                type="number"
                value={itemQuantity}
                onChange={handleChange}
                id="itemQuantity"
                className="number-input__field"
              />
              <button type="button" onClick={increaseQuantity} className="number-input__button">
                +
              </button>
            </div>
            <button type="submit" className="btn btn__add-item">Add to Cart</button>
          </form>

          {/* </div> */}
        
      </div>
    );
  
};

export default ShopItem;
