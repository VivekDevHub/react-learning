import axios from "axios";

export let fetchProducts = async ({ pageParam = 1 }) => {
  try {
    let limit = 20;
    let skip = (pageParam - 1) * limit;
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return res.data;
  } catch (error) {
    console.log("error in product api", error);
  }
};

// 1-1x20= 0
// 2-1 x 20 = 20
// 3-1 x 20 = 40