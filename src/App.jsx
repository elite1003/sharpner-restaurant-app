import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <Fragment>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
