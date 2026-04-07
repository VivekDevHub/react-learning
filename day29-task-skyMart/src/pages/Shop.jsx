import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useProductData } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const StarRow = ({ rating }) => {
  const full = Math.round(rating);
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, idx) => (
        <i
          key={idx}
          className={`ri-star-${idx < full ? "fill text-amber-400" : "line text-white/25"} text-[12px]`}
        ></i>
      ))}
    </div>
  );
};

const Shop = () => {
  const { products } = useProductData();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [loading, setLoading] = useState(true);

  // Sync category from query string (?category=... or ?catagory=...)
  useEffect(() => {
    const queryCat = (
      searchParams.get("category") ||
      searchParams.get("catagory") ||
      ""
    ).toLowerCase();
    if (queryCat) setCategory(queryCat);

    const querySort = (searchParams.get("sort") || "").toLowerCase();
    if (querySort) setSort(querySort);
  }, [searchParams]);

  useEffect(() => {
    if (products && products.length) {
      const t = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [products]);

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category?.toLowerCase())),
  ];

  const filtered = (() => {
    let list = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q),
      );
    }

    if (category !== "all") {
      list = list.filter((p) => p.category?.toLowerCase() === category);
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        list.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return list;
  })();

  const hasFilters =
    search.trim().length > 0 || category !== "all" || sort !== "featured";

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-2">
          All Products
        </h1>
        <p className="text-white/40 text-sm">
          {loading
            ? "Loading products..."
            : `${filtered.length} products found`}
        </p>
      </header>

      <section className="bg-[#111] border border-white/10 rounded-3xl p-4 sm:p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="relative flex-1">
            <i className="ri-search-line text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2 text-sm"></i>
            <input
              className="field h-12 pl-10 pr-4"
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <i className="ri-close-line text-sm"></i>
              </button>
            )}
          </div>

          <div className="relative min-w-37.5">
            <select
              className="field h-12 pr-9 appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all"
                    ? "All Categories"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-white/30"></i>
          </div>

          <div className="relative min-w-35">
            <select
              className="field h-12 pr-9 appearance-none cursor-pointer"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating-desc">Top Rated</option>
              <option value="rating-asc">Lowest Rated</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-white/30"></i>
          </div>

          {hasFilters && (
            <button
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 px-4 h-12 rounded-2xl text-sm font-body transition-all shrink-0"
              onClick={clearFilters}
            >
              <i className="ri-close-line text-sm"></i> Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/6">
          {search.trim() && (
            <span className="badge bg-volt/15 text-volt border p-1 rounded-xl px-2 border-volt/20 text-xs gap-1">
              {search}
              <button onClick={() => setSearch("")}>
                <i className="ri-close-line text-[10px]"></i>
              </button>
            </span>
          )}
          {category !== "all" && (
            <span className="badge bg-volt/15 text-volt border p-1 rounded-xl px-2 border-volt/20 text-xs gap-1">
              {category}
              <button onClick={() => setCategory("all")}>
                <i className="ri-close-line text-[10px]"></i>
              </button>
            </span>
          )}
          {sort !== "featured" && (
            <span className="badge bg-volt/15 text-volt border p-1 rounded-xl px-2 border-volt/20 text-xs gap-1">
              {sort}
              <button onClick={() => setSort("featured")}>
                <i className="ri-close-line text-[10px]"></i>
              </button>
            </span>
          )}
        </div>
      </section>

      {loading ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="h-64 bg-white/5 border border-white/10 rounded-2xl animate-pulse"
            />
          ))}
        </section>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center py-24 gap-4 text-center">
          <i className="ri-shopping-bag-3-line text-5xl text-white/15"></i>
          <div>
            <p className="font-heading font-bold text-xl text-white/60">
              No products found
            </p>
            {search || category !== "all" || sort !== "featured" ? (
              <p className="text-white/30 text-sm mt-1">
                No results for your current filters
              </p>
            ) : null}
          </div>
          <button className="btn-ghost mt-2" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Shop;
