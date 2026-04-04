import axios from "axios";

export let getAllProducts = async () => {
  try {
    let res = await axios.get("https://dummyjson.com/products");
    console.log("api hitted");

    return res.data.products;
  } catch (error) {
    console.log("error in Products api");
  }
};