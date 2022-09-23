import { useState } from 'react';
import './Item.css'

const Item=(props)=>{
  const [item,setQuantity]=useState({
    itemID: props.itemID,
    itemQuantity: "",
    
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log()
    props.addItem(item)
  }
  const handleChange=(e)=>{
setQuantity(e.target.value)
  }
    return (
        <div class="card">
        <a href={props.href}>
            <img src={props.image} class="card__img" alt=""/>
        
          {/* <div class="card__overlay"> */}
            <h3 class="card__title">{props.title}</h3>
            <form onSubmit={handleSubmit}>
            <input type="number" min="0" max="10" value={item.itemQuantity} onChange={handleChange}/>
            <button type="submit">Add to Cart</button>
            </form>

          {/* </div> */}
        </a>
      </div>
    )
}

export default Item;