import { Wrapper } from "../App.styles";
import { Button } from "@mui/material";

import { cartItemType } from "../App";

type Props = {
    item:cartItemType,
    handleAddToCart:(clickedItem:cartItemType) => void;

}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
    return (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div><h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}€</h3>
        </div>
        <button onClick={()=>handleAddToCart(item)}>Add to cart</button>
    </Wrapper>
    
)
}


export default Item;