export const ADD_TO_CART_PRODUCT = "ADD_TO_CART_PRODUCT";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART"
export const ONCE_DETELE_PRODUCT = "ONCE_DETELE_PRODUCT"
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART"
export const CART = "CART";

export const addToCartProduct = (id) => ({
    type: ADD_TO_CART_PRODUCT,
    payload: {id},
});

export const deleteCartProduct = (id) => ({
    type: DELETE_PRODUCT_CART,
    payload: {id},
})
export const onceDeleteProduct = (id) => ({
    type: ONCE_DETELE_PRODUCT,
    payload: {id},
})
export const onceAddProduct = (id) => ({
    type: ADD_PRODUCT_CART,
    payload: {id},
})
