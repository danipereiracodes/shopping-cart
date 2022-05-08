import { Button } from "@mui/material";
//types
import { cartItemType } from "./App";
// styles
import { CartItemWrapper } from "./CartItem.styles";
import Item from "./Item/Item";

type Props = {

    item:cartItemType;
    handleAddToCart:(clickedItem: cartItemType) => void;
    handleRemoveFromCart:(id:number) => void;

}

const CartItem: React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
    return (<CartItemWrapper>
        <div><h3>{item.title}</h3></div>
        <div className='info'>
            <p>Price: {item.price}€</p>
            <p>Amount: {item.amount}</p>
            
            <div className='buttons'>
                <Button size='small' disableElevation variant='contained' onClick={() => handleRemoveFromCart(item.id)}>
                    -
                </Button>
                
                <Button size='small' disableElevation variant='contained' onClick={() => handleAddToCart(item)}>
                    +
                </Button>
            </div>
            
        </div>
        <img src={item.image} alt={item.title} />
        <p>Total price: {(item.amount * item.price).toFixed(2)}€</p>
    </CartItemWrapper>)
    
}

export default CartItem;