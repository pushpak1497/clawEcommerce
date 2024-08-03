import { ApiResponse } from "../utils/apiResponse.js";
const cart = {};

const addToCart = (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  if (!cart[userId]) {
    cart[userId] = [];
  }

  const item = cart[userId].find((item) => item.productId === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    cart[userId].push({ productId, quantity });
  }
  res.status(200).json(new ApiResponse(200, cart[userId], "added to cart "));
};

const getCart = (req, res) => {
  const userId = req.user._id;
  res
    .status(200)
    .json(new ApiResponse(200, cart[userId], "fetched cart items"));
};

export { addToCart, getCart };
