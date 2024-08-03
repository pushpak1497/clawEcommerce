import React, { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/orders/cart"
        );
        setCart(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.product.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
