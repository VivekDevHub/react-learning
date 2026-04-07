const ProductRow = ({ product }) => {
  return (
    <a
      className="group flex items-center gap-3 p-3 bg-white/3 hover:bg-white/8 border border-white/10 hover:border-volt-30 rounded-2xl transition-all duration-200 hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
      href={`/products/${product.id}`}
    >
      <div className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shrink-0 p-1.5 border border-white/30">
        <img src={product.images[0]} alt={product.title} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white/80 text-xs font-body clamp-1">{product.title}</p>
        <p className="text-volt font-heading font-bold text-sm mt-0.5">${product.price}</p>
      </div>
      <button className="shrink-0 w-7 h-7 bg-volt-10 hover:bg-volt text-volt hover:text-ink rounded-lg flex items-center justify-center transition-all">
        <i className="ri-shopping-bag-line text-sm"></i>
      </button>
    </a>
  )
}

const ProductListSection = ({ title, iconClass, ctaHref = '/products', products }) => {
  return (
    <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading font-bold text-lg flex items-center gap-2 text-white">
          <i className={`${iconClass} text-base`}></i> {title}
        </h2>
        <a className="text-volt text-xs hover:text-volt-light flex items-center gap-1" href={ctaHref}>
          See all <i className="ri-arrow-right-line text-[11px]"></i>
        </a>
      </div>

      <div className="space-y-2">
        {products.map((p) => (
          <ProductRow key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductListSection