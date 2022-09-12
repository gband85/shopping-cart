import Item from "./Item";
import Navbar from "./Navbar";

const Shop=()=>{
    return (
        <div>
    <Navbar />
    <div className="mai">
        <Item title={"cat"}/>
    </div>    
    </div>
    )
}

export default Shop;