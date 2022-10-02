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
    if (item.itemQuantity < 1) return;
    // console.log(item)
    setItem({ ...item, itemQuantity: 1 });
    props.addItem(item);
  };
  const handleChange = (e) => {
    setItem({ ...item, itemQuantity: parseInt(e.target.value) });
  };
  const decreaseQuantity = () => {
    if (item.itemQuantity === 1) {
      return;
    }
    setItem({ ...item, itemQuantity: item.itemQuantity - 1 });
    if (!props.displayItem) {
      props.addItem({...item,itemQuantity: -1})
    }
  };
  const increaseQuantity = () => {
    setItem({ ...item, itemQuantity: item.itemQuantity + 1 });
    if (!props.displayItem) {
      props.addItem({...item,itemQuantity: 1})
    }
  }
  if (props.displayItem) {
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
              <button type="button" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="number"
                value={item.itemQuantity}
                onChange={handleChange}
                id="itemQuantity"
              />
              <button type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button type="submit" className="btn__add-item">Add to Cart</button>
          </form>

          {/* </div> */}
        
      </div>
    );
  } else {
    return (
      <div className="card card--cart" style={{flexDirection: 'row'}}>

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
              <button type="button" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="number"
                value={item.itemQuantity}
                onChange={handleChange}
                id="itemQuantity"
              />
              <button type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          <button onClick={() => props.deleteItem(props.itemID)}>delete</button>
          {/* </div> */}
        </div>
      </div>
    );
  }
};

export default Item;
