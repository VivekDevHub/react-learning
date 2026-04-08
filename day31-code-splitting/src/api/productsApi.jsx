import axios from "axios";

export let fetchProducts = async () => {
  console.log("api call triggerred...");
  let res = await axios.get("https://dummyjson.com/products");
  return res;
};