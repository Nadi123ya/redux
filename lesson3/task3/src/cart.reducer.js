
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const cart = {
    products: [],
};

const cartReducer = (state = cart, action) => {
    switch (action.type) {
      case ADD_PRODUCT: {
        return {
          ...state,
          products: state.products.concat(action.payload.productData),
        };
      }
      case REMOVE_PRODUCT: {
        console.log()
        const newList = state.products.filter(
          (product) => product.id != action.payload.productId
        );
        return {
          ...state,
          products: newList,
        };
      }
      default:
        return state;
    }
  };

export default cartReducer;