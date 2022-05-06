import React, { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
//Components
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

//Styles
import { Wrapper } from "./Item/Item.styles";

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
	const { data, error, isLoading } = useQuery<cartItemType[]>(
		"products",
		getProducts
	);
	console.log("Data", data);
	const getTotalItems = null;
	const handleAddToCart = (clickedItem: cartItemType) => null;
	const handleRemoveFromCart = null;

	if (isLoading) return <LinearProgress />;
	if (error) return <p>Something went wrong</p>;

	return (
		<Wrapper>
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
