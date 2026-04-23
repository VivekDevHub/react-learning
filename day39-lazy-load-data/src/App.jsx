import React, { useEffect } from "react";
import { fetchProducts } from "./api/productApis";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

const App = () => {
  let { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, pages) => {
      let total = lastPage.total;
      let loaded = pages.length * 20;

      if (loaded >= total) return undefined;

      // 1. 50 >= 194 = false
      // 1. 100 >= 194 = false
      // 1. 150 >= 194 = false
      // 1. 194 >= 194 = true

      return pages.length + 1;
    },
  });

  useEffect(() => {
    let handleScrollToFetch = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScrollToFetch);

    return () => {
      window.removeEventListener("scroll", handleScrollToFetch);
    };
  }, []);

  console.log("data->", data);

  if (isLoading) return <h1>Loading..</h1>;

  return (
    <div className="p-6 flex flex-col gap-4">
      {data.pages.map((page) =>
        page.products.map((elem) => <h1>{elem.title}</h1>),
      )}
      <div>
        {hasNextPage ? (
          <button
            className="bg-blue-600 text-white p-4"
            onClick={fetchNextPage}
          >
            Load more
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default App;
