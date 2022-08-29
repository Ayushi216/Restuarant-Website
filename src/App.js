import React, { Fragment, useState } from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  //const [cartisShown, setCartIsShown] = useState(false)
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
