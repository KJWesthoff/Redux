import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "../utils/actions";




const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      console.log("UPDATE_RUNNING")
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      console.log("ADD_TO_CART_RUNNING")  
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      console.log("ADD_MULTIPLE_TO_CART_RUNNING")
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      console.log("UPDATE_CART_QUANTITY_RUNNING")
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART_RUNNING")
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      console.log("CLEAR_CART_RUNNING")
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      console.log("TOGGLE_CART_RUNNING")
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      console.log("UPDATE_CATEGORIES_RUNNING")
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      console.log("UPDATE_CURRENT_RUNNING")
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export default reducer;