import {createContext} from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  deleteItem: () => {},
});

export default CartContext;
