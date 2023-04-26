// import React from "react";
// import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
// import { Add, Details } from "@mui/icons-material";
// import { render } from "react-dom";

// interface Product {
// 	id: number;
// 	name: string;
// 	description: string;
// 	price: number;
// 	img: string;
//   }

 

//   const initialProducts: Product[] = [
// 	{
// 		id: 0,
// 		name: "TC 2017 LS",
// 		description: "VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 34.95,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 1,
// 		name: "TC 2017 Shorts",
// 		description: "VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 25.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 2,
// 		name: "TC 2016 Red SS",
// 		description:
// 			"VC Ultimate's fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC's FlexLight performance material – soft, lightweight and moisture wicking.",
// 		price: 74.0,
// 		img: "https://unsplash.it/200",
// 	},

// 	{
// 		id: 3,
// 		name: "TC 2016 Dark SS",
// 		description:
// 			"VC Ultimate's fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams!, from our Team Canada Collection.",
// 		price: 35.99,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 4,
// 		name: "TC 2016 Light SS",
// 		description:
// 			"Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys",
// 		price: 35.99,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 5,
// 		name: "Goat Shorts",
// 		description: "This just in... VC's NEW signature 'GOAT' style athletic shorts now with pockets!",
// 		price: 29.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 6,
// 		name: "Friction Gloves",
// 		description:
// 			"This is the glove that started it all! Friction Gloves work great in every condition: rain, sweat, humidity, dust, you name it. If you play ultimate, you'll love these gloves.",
// 		price: 34.95,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 7,
// 		name: "TC 2017 LS",
// 		description: "VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 34.95,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 8,
// 		name: "TC 2017 Shorts",
// 		description: "VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 25.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 9,
// 		name: "TC 2016 Red SS",
// 		description:
// 			"VC Ultimate's fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC's FlexLight performance material – soft, lightweight and moisture wicking.",
// 		price: 74.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 10,
// 		name: "TC 2016 Dark SS",
// 		description:
// 			"VC Ultimate's fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC's FlexLight performance material – soft, lightweight and moisture wicking.",
// 		price: 35.99,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 11,
// 		name: "TC 2016 Light SS",
// 		description:
// 			"Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys are made with VC's FlexLight performance material – soft, lightweight and moisture wicking.",
// 		price: 35.99,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 12,
// 		name: "Goat Shorts",
// 		description: "This just in... VC's NEW signature 'GOAT' style athletic shorts now with pockets! Made with our FlexLight material.",
// 		price: 29.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 13,
// 		name: "Friction Gloves",
// 		description:
// 			"This is the glove that started it all! Friction Gloves work great in every condition: dry, hot, rain, snow, you name it. They will help",
// 	price: 19.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 14,
// 		name: "TC 2017 LS",
// 		description: "VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 34.95,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 15,
// 		name: "TC 2017 Shorts",
// 		description: "VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.",
// 		price: 25.0,
// 		img: "https://unsplash.it/200",
// 	},
// 	{
// 		id: 16,
// 		name: "TC 2016 Red SS",
// 		description:
// 			"VC Ultimate's fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC's FlexLight performance material – soft, lightweight and moisture wicking.",
// 		price: 74.0,
// 		img: "https://unsplash.it/200",
//     },
// ];

// const addToCart = (product: Product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (product: Product) => {
//     setCart(cart.filter(item => item.id !== product.id));
//   };

//   const somaprodutos = cart.reduce((acc, product) => {
// 	return acc + product.price;
// 	  }, 0);

// 	    const classes = useStyles();



//   return (
    