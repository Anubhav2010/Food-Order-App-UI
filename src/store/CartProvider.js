import CartContext from "./cart-context";

const CartProvider = (props) => {

  const addItemtoCartHandler = (props) => {};

  const removeItemfromCartHandler = (props) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemfromCartHandler,
  };


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
