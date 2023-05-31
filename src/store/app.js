import { initStore } from "./index";
import products from "../data.json";
const configureStore = () => {
  const actions = {
    ADD_CART: (state, item) => {
      const updatedCart = [...state.cart];
      const existsIndex = updatedCart.findIndex((el) => el.slug === item.slug);
      if (existsIndex < 0) {
        updatedCart.push(item);
      } else {
        updatedCart[existsIndex].quantity += item.quantity;
      }
      return { cart: updatedCart };
    },

    REMOVE_ALL: (state) => {
      return { cart: [] };
    },

    CHANGE_QUANTITY: (state, { quantity, slug }) => {
      const updatedCart = [...state.cart];
      const existsIndex = updatedCart.findIndex((el) => el.slug === slug);
      updatedCart[existsIndex].quantity = quantity;
      return { cart: updatedCart };
    },
    TOGGLE_MENU: (state) => {
      const newMenuState = !state.ui.menuIsOpen;
      return { ui: { ...state.ui, menuIsOpen: newMenuState } };
    },
  };

  initStore(actions, { products, cart: [], ui: { menuIsOpen: false } });
};

export default configureStore;
