import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";

const processPayment = asyncHandler(async (req, res) => {
  try {
    const { amount, paymentMethod } = req.body;
    const response = await axios.post(
      "https://payment-gateway-url.com/payments",
      {
        amount,
        paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYMENT_GATEWAY_API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
export { processPayment };
