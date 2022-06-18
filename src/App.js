import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Header from "./Header";
import "./header.css";
import ItemDetailContainer from "./ItemDetailContainer";
import { productList } from "./data";
import CartContextProvider from "./CartContext";
import Cart from "./Cart";



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer productList={productList} />}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer productList={productList} />}
        />
        <Route
          path="/product/:id"
          element={<ItemDetailContainer productList={productList} />}
        />
         <Route
          path="/cart"
          element={<Cart  />}
        />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
