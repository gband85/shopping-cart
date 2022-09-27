import { useState } from 'react';
import './Item.css'

const Item=(props)=>{
  const [item,setItem]=useState({
    itemID: props.itemID,
    itemQuantity: "",
itemTitle: props.itemTitle,
itemImage: props.itemImage,

  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(item)
    props.addItem(item)
  }
  const handleChange=(e)=>{
setItem({...item,itemQuantity: parseInt( e.target.value),})
  }
  
  if (props.displayItem) {
  return (
    <div className="card">
    <a href={props.href}>
        <img src={props.itemImage} className="card__img" alt="" id='itemImage'/>
    
      {/* <div class="card__overlay"> */}
        <h3 className="card__title" id='itemTitle'>{props.itemTitle}</h3>
        <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="10" value={item.itemQuantity} onChange={handleChange} id="itemQuantity"/>
        <button type="submit">Add to Cart</button>
        </form>

      {/* </div> */}
    </a>
  </div>
)
  }
  else {
    return (
      <div className="card">
      <a href={props.href}>
          <img src={props.itemImage} className="card__img" alt="" id='itemImage'/>
      
        {/* <div class="card__overlay"> */}
          <h3 className="card__title" id='itemTitle'>{props.itemTitle}</h3>
          <h3>Quantity: {props.itemQuantity}</h3>
  <button onClick={()=>props.deleteItem(props.itemID)}>delete</button>
        {/* </div> */}
      </a>
    </div>
  )
  }

}

export default Item;