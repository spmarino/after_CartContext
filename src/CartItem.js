import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ product }) => {
  const { DelItem } = useContext(CartContext);
  const { title, price, id } = product;
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => DelItem(id)}>borrar item</button>
    </div>
  );
};

export default CartItem;
