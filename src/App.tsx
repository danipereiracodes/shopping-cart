import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
//Components
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Cart from "./Cart";

//Styles
import { Wrapper } from "./Item/Item.styles";
import { StyledButton } from "./App.styles";

//types
export type cartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<cartItemType[]> =>
	await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as cartItemType[]);
	
	const { data, error, isLoading } = useQuery<cartItemType[]>(
		"products",
		getProducts
	);
	
	

	const getTotalItems = (items:cartItemType[]) => items.reduce((acc: number , item)=> acc + item.amount, 0);
	const handleAddToCart = (clickedItem: cartItemType) => {
		setCartItems(prev => {
			//is item already in the cart?
			const isItem = prev.find((item)=> item.id === clickedItem.id);
			if (isItem) {
				return prev.map((item) => (
					item.id === clickedItem.id
					? {...item, amount:item.amount + 1}
					: item 
				))
			}
			//Firs time item is added
			return [...prev, {...clickedItem, amount: 1}]
			
		})
		
		
		setIsCartOpen(true);

	};

	useEffect(()=> {
		window.scrollTo(0, 0);
		
	},[isCartOpen])

	const handleRemoveFromCart = (id: number) =>  {
		setCartItems(prev => prev.reduce((acc,item) => {
			 if (item.id === id) {
				 if (item.amount === 1) return acc;
				 return [...acc,{...item, amount:item.amount - 1}]
			 } else {
				 return [...acc, item];
			 }
		}, [] as cartItemType[]))
	};

	if (isLoading) return <LinearProgress />;
	if (error) return <p>Something went wrong</p>;

	return (
		
		<Wrapper>
			<Drawer anchor='right' open={isCartOpen} onClose={()=> setIsCartOpen(false)}>
			<Cart  cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
			</Drawer>
			< StyledButton onClick={()=>setIsCartOpen(true)}>
			<Badge badgeContent={getTotalItems(cartItems)} color='error' >
				<AddShoppingCart />
			</Badge>
			</StyledButton >
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item handleAddToCart={handleAddToCart} item={item} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;
