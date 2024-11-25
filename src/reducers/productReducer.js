import {
	ADD_PRODUCT_CART,
	ADD_TO_CART_PRODUCT,
	DELETE_PRODUCT_CART,
	ONCE_DETELE_PRODUCT,
} from "../actions/productAction";
import p7 from "./images/prodcut7.svg";
import p1 from "./images/product1.svg";
import p2 from "./images/product2.svg";
import p3 from "./images/product3.svg";
import p4 from "./images/product4.svg";
import p5 from "./images/product5.svg";
import p6 from "./images/product6.svg";
import p8 from "./images/product8.svg";
import p9 from "./images/product9.svg";

const initialState = [
	{
		id: 1,
		img: p1,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "red",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "S",
		inCart: false,
	},
	{
		id: 2,
		img: p2,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "black",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "Xs",
		inCart: false,
	},
	{
		id: 3,
		img: p3,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "grey",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "L",
		inCart: false,
	},
	{
		id: 4,
		img: p4,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "yellow",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "S",
		inCart: false,
	},
	{
		id: 5,
		img: p5,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "pink",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "S",
		inCart: false,
	},
	{
		id: 6,
		img: p6,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "grey",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "Xs",
		inCart: false,
	},
	{
		id: 7,
		img: p7,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "black",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "Xs",
		inCart: false,
	},
	{
		id: 8,
		img: p8,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "pink",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "L",
		inCart: false,
	},
	{
		id: 9,
		img: p9,
		name: "ELLERY X M'O CAPSULE",
		quantity: 0,
		color: "yellow",
		discription:
			"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
		size: "S",
		inCart: false,
	},
];

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART_PRODUCT:
			return state.map((pr) =>
				pr.id === action.payload.id
					? { ...pr, inCart: true, quantity: pr.quantity + 1 }
					: pr
			);
		case DELETE_PRODUCT_CART:
			const res = state.map((pr) => {
				if (pr.id === action.payload.id && pr.quantity > 0) {
					return {
						...pr,
						quantity: 0,
						inCart: false,
					};
				}
				return pr;
			});
			return res;
		case ONCE_DETELE_PRODUCT:
			const res2 = state.map((pr) => {
				if (pr.id === action.payload.id && pr.quantity > 0) {
					return {
						...pr,
						quantity: pr.quantity - 1,
						inCart: pr.quantity - 1 !== 0,
					};
				}
				return pr;
			});
			return res2;
		case ADD_PRODUCT_CART:
			const res3 = state.map((pr) => {
				if (pr.id === action.payload.id && pr.quantity > 0) {
					return {
						...pr,
						quantity: pr.quantity + 1,
					};
				}
				return pr;
			});
			return res3;
		default:
			return state;
	}
};

export default productReducer;
