import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";

export let useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5000,
  });
};