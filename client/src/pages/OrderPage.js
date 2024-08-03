import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/orders",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} - Total: ${order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderPage;
