import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, stock, description } = req.body;
  if (!(name || price || stock)) {
    throw new ApiError(401, "All fields are required");
  }
  const product = await Product.create({
    name,
    price,
    stock,
    description,
  });
  if (!product) {
    throw new ApiError(500, "please try product creating again");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, product, "product created successfully"));
});

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res
    .status(200)
    .json(new ApiResponse(200, products, "products fetched successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { name, price, stock, description } = req.body;
  if (!productId) {
    throw new ApiError(403, "please provide productId");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "product not found");
  }
  const newProduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: { name, price, stock, description },
    },
    { new: true }
  );
  if (!newProduct) {
    throw new ApiError(500, "please try again");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, newProduct, "product updated successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    throw new ApiError(403, "please provide productId");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "product not found");
  }
  await Product.findByIdAndDelete(productId);
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "product deleted successfully"));
});
export { createProduct, getProducts, updateProduct, deleteProduct };
