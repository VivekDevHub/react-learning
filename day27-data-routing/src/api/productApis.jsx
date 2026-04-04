import axios from "axios";

 const getAllProducts = async () => {
  try {
    let res = await axios.get("https://dummyjson.com/products");
    console.log("api hitted");
    console.log(res.data.products);
    
    return res.data.products;
  } catch (error) {
    console.error("error in Products api", error);
    return []; 
  }
};
export {getAllProducts}