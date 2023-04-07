import { useState } from "react";

import "./App.css";
import ProductsPage from "./Components/ProductsPage";

function App() {
  const [basket, setBasket] = useState([]);
  console.log(basket);
  return (
    <div className="App">
      <ProductsPage basket={basket} setBasket={setBasket} />
    </div>
  );
}

export default App;
