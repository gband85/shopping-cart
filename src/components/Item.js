import './Item.css'

const Item=(props)=>{
    return (
        <div class="card">
        <a href={props.href}>
            <img src={props.image} class="card__img" alt=""/>
        
          {/* <div class="card__overlay"> */}
            <h3 class="card__title">{props.title}</h3>
            <input type="number" min="0" max="10" value="0"></input>
            <button type="submit">Add to Cart</button>
          {/* </div> */}
        </a>
      </div>
    )
}

export default Item;