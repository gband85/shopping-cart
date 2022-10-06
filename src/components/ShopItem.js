import { useState } from "react";
import "./Item.css";

const ShopItem = (props) => {
  const [item, setItem] = useState(
      
    {
    itemID: props.itemID,
    itemQuantity: 1,
    itemTitle: props.itemTitle,
    itemImage: props.itemImage,
    itemPrice: props.itemPrice,
  }
      );


  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.itemQuantity < 1) return;

    
    props.addItem(item);
    setItem({ ...item, itemQuantity: 1 });
  };
  const handleChange = (e) => {
    setItem({ ...item, itemQuantity: parseInt(e.target.value) });
  };
  const decreaseQuantity = () => {
    if (item.itemQuantity === 1) {
      return;
    }
    setItem({ ...item, itemQuantity: item.itemQuantity - 1 });

  };
  const increaseQuantity = () => {
    setItem({ ...item, itemQuantity: item.itemQuantity + 1 });

  }
    return (
      <div className="card">

          <img
            src={props.itemImage}
            className="card__img"
            alt=""
            id="itemImage"
          />

          {/* <div class="card__overlay"> */}
          <div>
          <h3 className="card__title" id="itemTitle">
            {props.itemTitle}
          </h3>
          <h3>${props.itemPrice}</h3>
          </div>
          <form onSubmit={handleSubmit} className="item-form">
            <div className="number-input">
              <button type="button" onClick={decreaseQuantity} className="number-input__button">
                -
              </button>
              <input
                type="number"
                value={item.itemQuantity}
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
