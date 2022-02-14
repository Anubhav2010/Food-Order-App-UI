import { useCallback, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartisShown, setCartisShown]=useState(false);

  const CartShowHandler=()=>{
    setCartisShown(true);
  }

  const CartisHidden=()=>{
    setCartisShown(false);
  }
  
  return (
    <CartProvider>
      {cartisShown && <Cart  onCloseCart={CartisHidden}/>}
      <Header onShowCart={CartShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
