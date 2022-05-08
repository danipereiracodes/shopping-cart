import CartItem from "./CartItem";
// styles
import { CartWrapper } from "./Cart.styles";
// types 
import { cartItemType } from "./App";
import { VoidExpression } from "typescript";

type Props = {
    cartItems:cartItemType[],
    handleAddToCart:(clickedItem:cartItemType) => void;
    handleRemoveFromCart:(id: number) => void;
} 

const Cart:React.FC<Props> = ({cartItems,handleAddToCart, handleRemoveFromCart}) => {
return <CartWrapper>
    <h2>Your shopping cart</h2>
    {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
    {cartItems?.map((item)=> <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>)}
   
</CartWrapper>
}


export default Cart;