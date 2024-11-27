import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error("An unexpected error occurred while fetching products.");
  }
};

const productService = {
  getProducts,
};

export default productService;
