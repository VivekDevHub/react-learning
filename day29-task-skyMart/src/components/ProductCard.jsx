import { useNavigate } from "react-router"
import { productData } from "../context/ProductContext";

const StarRow = ({ rating }) => {
  const full = Math.round(rating)
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, idx) => (
        <i
          key={idx}
          className={`ri-star-${idx < full ? 'fill text-amber-400' : 'line text-white/25'} text-[12px]`}
        ></i>
      ))}
    </div>
  )
}

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const { addToCart, cart } = productData();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
  }

  const inCart = cart.some((p) => p.id === product.id);

  return (
    <article className="product-card flex flex-col group bg-[#111] border border-white/10 hover:border-volt-20 rounded-3xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)] animate-[scale-in_0.25s_ease-out]" onClick={handleNavigate}>
      <div className="relative aspect-4/3 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/60 text-white/80 backdrop-blur-sm capitalize">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-white/30 text-[11px] uppercase tracking-[0.12em] font-body clamp-1">
          {product.category}
        </p>
        <h3 className="font-body font-semibold text-white/85 text-sm leading-snug clamp-2 flex-1">
          {product.title}
        </h3>

        <div className="flex items-center gap-1.5 text-[11px]">
          <StarRow rating={product.rating} />
          {/* <span className="text-white/30">({product.reviews})</span> */}
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/8">
          <span className="font-heading font-bold text-lg text-volt">${product.price}</span>
          <button
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold font-body transition-all duration-150 active:scale-95 ${
              inCart
                ? "bg-green-500/15 text-green-400 border border-green-500/20"
                : "bg-volt text-ink hover:bg-volt-light"
            }`}
            onClick={handleAdd}
          >
            <i className={inCart ? "ri-check-line text-xs" : "ri-shopping-cart-line text-xs"}></i>
            {inCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  )
}
export default ProductCard