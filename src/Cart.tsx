import CartItem from "./CartItem";
// styles
import { CartWrapper } from "./Cart.styles";

// types 
import { cartItemType } from "./App";


type Props = {
    cartItems:cartItemType[],
    handleAddToCart:(clickedItem:cartItemType) => void;
    handleRemoveFromCart:(id: number) => void;
} 

const Cart:React.FC<Props> = ({ cartItems,handleAddToCart, handleRemoveFromCart}) => {
    const getTotalPrice = (items: cartItemType[]) => 
	items.reduce((acc: number, item) => acc + item.amount * item.price, 0).toFixed(2);

return <CartWrapper>
    <h2>Your shopping cart</h2>
    {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
    {cartItems?.map((item)=> <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>)}
  <h2>Total: {getTotalPrice(cartItems)}€</h2>
</CartWrapper>
}


export default Cart;