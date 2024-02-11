import React, { useContext } from "react";
import { AddtoCart } from "./Home";

const Cart = () => {
  const RecievedAddtocart = useContext(AddtoCart);

  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Cart;
