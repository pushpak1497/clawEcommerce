import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const placeOrder = asyncHandler(async (req, res) => {
  const { products, total } = req.body;
  const userId = req.user._id;
  const order = await Order.create({
    user: userId,
    products,
    total,
  });
  for (const item of products) {
    await Product.findByIdAndUpdate(item.product, {
      $inc: { stock: -item.quantity },
    });
  }
  res.status(200).json(new ApiResponse(200, order, "order placed"));
});

const getOrders = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const orders = await Order.find(userId);
  if (!orders) {
    throw new apiError(500, "Please try again");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, orders, "orders fetched successfully"));
});
export { placeOrder, getOrders };
