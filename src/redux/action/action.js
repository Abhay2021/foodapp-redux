/********IT Supply Action TYPE AND DATA (payload) to reducers for performing action on data in store */
import {ADD_TO_CART,INCREMENT,DECREMENT,DELETE,EMPTY_CART} from './actionTypes';

export const addToCart = content => ({
  type: ADD_TO_CART,
  payload: content
});

export const incrementCart = content => ({
  type: INCREMENT,
  payload: content
});

export const decrementCart = content => ({
  type: DECREMENT,
  payload: content
});

export const deleteProduct = content => ({
  type: DELETE,
  payload: content
});


export const emptyCartData = () => ({
  type: EMPTY_CART,
  payload: {}
});