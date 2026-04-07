import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import ProductCard from '../components/ProductCard'
import { useProductData } from '../context/ProductContext'
import axios from 'axios'

const Breadcrumbs = ({ category, name }) => (
  <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8">
    <a className="hover:text-white flex items-center gap-1.5 transition-colors" href="/products">
      <i className="ri-arrow-left-line text-xs"></i>
      Products
    </a>
    <span>/</span>
    <span className="capitalize text-white/50">{category}</span>
    <span>/</span>
    <span className="text-white/70 clamp-1 max-w-60">{name}</span>
  </nav>
)

const ProductGallery = ({ image, name }) => (
  <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square animate-scale-in shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
    />
  </div>
)

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2 text-sm">
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, idx) => (
        <i key={idx} className={`ri-star-${idx < Math.round(rating) ? 'fill' : 'line'} text-[14px]`}></i>
      ))}
    </div>
    <span className="font-semibold text-white/70">{rating}</span>
    <span className="text-white/40">({reviews?.length} reviews)</span>
  </div>
)

const FeaturePill = ({ icon, title, desc }) => (
  <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
    <i className={`text-volt text-lg ri-${icon}`}></i>
    <p className="text-white/60 text-[11px] font-body font-semibold mt-1">{title}</p>
    <p className="text-white/25 text-[10px] font-body">{desc}</p>
  </div>
)

const ProductSummary = ({ product, toggleFavorite, isFavorite, addToCart, isInCart, productId }) => {
  const pid = Number(productId) || 0
  const showPrev = pid !== 78
  const showNext = pid !== 107

  return (
  <div className="flex flex-col gap-5 animate-fade-up">
    <span className="badge bg-volt/10 text-volt border border-volt/20 capitalize w-fit text-xs px-3 py-1 rounded-full">
      {product?.category}
    </span>
    <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">{product?.name}</h1>
    <Rating rating={product?.rating} reviews={product?.reviews} />
    <div className="py-4 border-y border-white/8">
      <span className="font-heading font-bold text-4xl text-volt">${product?.price}</span>
    </div>
    <p className="text-white/50 font-body text-sm leading-relaxed">{product?.description}</p>
    <div className="flex gap-3">
      {isInCart(product?.id) ? (
        <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 bg-green-500/15 text-green-400 border border-green-500/25 hover:bg-green-500/25">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          Added to Cart
        </button>
      ) : (
        <button 
          onClick={() => addToCart(product)}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95 bg-volt text-ink hover:bg-volt-light border border-volt"
        >
          <i className="ri-shopping-cart-line text-lg"></i>
          Add to Cart
        </button>
      )}
      <button 
        onClick={() => toggleFavorite(product)}
        className={`p-3.5 border rounded-2xl transition-all ${
          isFavorite(product?.id) 
            ? 'bg-red-500/15 border-red-500/30 text-red-400' 
            : 'border-white/10 text-white/40 hover:text-rose-400 hover:border-rose-400/30'
        }`}
      >
        {isFavorite(product?.id) ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart fill-red-400">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        )}
      </button>
    </div>
    <div className="grid grid-cols-3 gap-3 mt-1">
      <FeaturePill icon="truck-line" title="Free Delivery" desc="On orders $50+" />
      <FeaturePill icon="shield-check-line" title="Secure Pay" desc="256-bit SSL" />
      <FeaturePill icon="refund-2-line" title="Easy Returns" desc="30-day policy" />
    </div>
    <div className="flex gap-3 mt-6">
      {showPrev && (
        <NavLink 
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl transition-all text-white text-sm font-body" 
          to={`/product/${Math.max(1, pid - 1)}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Previous
        </NavLink>
      )}
      {showNext && (
        <NavLink 
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl transition-all font-heading font-semibold text-sm" 
          to={`/product/${pid + 1}`}
        >
          Next 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </NavLink>
      )}
    </div>
  </div>
)}

const RelatedProducts = ({ products }) => (
  <section className="mt-16">
    <h2 className="font-heading font-bold text-2xl mb-6">Related Products</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </section>
)

const Product = () => {

  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { products, toggleFavorite, isFavorite, addToCart, isInCart } = useProductData();
  console.log(singleProduct)

  useEffect(() => {
    const fetchProd = async () => {
      setLoading(true);
      try {
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        setSingleProduct(res.data || {});
      } catch (err) {
        console.error(err);
        const fallback = products.find((p) => String(p?.id) === String(id));
        setSingleProduct(fallback || {});
      } finally {
        setLoading(false);
      }
    }

    fetchProd();
  }, [id, products])


  const related = (products || [])
    .filter(
      (item) =>
        item?.id !== singleProduct?.id &&
        item?.category === singleProduct?.category
    )
    .slice(0, 5)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {loading ? (
        <div className="h-6 w-48 bg-white/10 rounded animate-pulse mb-8" />
      ) : (
        <Breadcrumbs category={singleProduct?.category} name={singleProduct?.name} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
        {loading ? (
          <div className="bg-white/5 rounded-3xl p-10 flex items-center justify-center aspect-square animate-pulse" />
        ) : (
          <ProductGallery image={singleProduct?.images?.[0]} name={singleProduct?.name} />
        )}
        {loading ? (
          <div className="flex flex-col gap-4">
            <div className="h-6 w-20 bg-white/10 rounded animate-pulse" />
            <div className="h-10 w-3/4 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
            <div className="h-14 w-32 bg-white/10 rounded animate-pulse" />
            <div className="h-20 w-full bg-white/10 rounded animate-pulse" />
            <div className="h-12 w-full bg-white/10 rounded animate-pulse" />
          </div>
        ) : (
          <ProductSummary 
            product={singleProduct} 
            toggleFavorite={toggleFavorite} 
            isFavorite={isFavorite}
            addToCart={addToCart}
            isInCart={isInCart}
            productId={id}
          />
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="h-64 bg-white/5 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <RelatedProducts products={related} />
      )}
    </div>
  )
}

export default Product