import Hero from '../components/Hero'
import DashboardStatCard from '../components/DashboardStatCard'
import CategoryCard from '../components/CategoryCard'
import ProductListSection from '../components/ProductListSection'
import FeatureCard from '../components/FeatureCard'
import { useProductData } from '../context/ProductContext'


const features = [
  {
    title: 'Fast Delivery',
    subtitle: 'Same-day on select items',
    iconClass: 'ri-flashlight-line',
    iconColor: 'text-volt',
  },
  {
    title: 'Secure Payments',
    subtitle: '100% encrypted checkout',
    iconClass: 'ri-shield-check-line',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Best Prices',
    subtitle: 'Price-match guarantee',
    iconClass: 'ri-price-tag-3-line',
    iconColor: 'text-green-400',
  },
]

const Home = () => {

  const { catagoryBifercation, products, getCartCount, getCartTotal } = useProductData();

  const statCards = [
    {
      value: getCartCount(),
      label: 'Cart Items',
      hint: 'In your bag',
      accent: 'volt',
      iconClass: 'ri-box-3-line',
    },
    {
      value: `$${getCartTotal().toFixed(2)}`,
      label: 'Cart Value',
      hint: 'Ready to checkout',
      accent: 'blue',
      iconClass: 'ri-line-chart-line',
    },
    {
      value: '5',
      label: 'Top Products',
      hint: 'Highly rated',
      accent: 'amber',
      iconClass: 'ri-star-line',
    },
    {
      value: Object.keys(catagoryBifercation).length,
      label: 'Categories',
      hint: 'To explore',
      accent: 'purple',
      iconClass: 'ri-price-tag-3-line',
    },
  ]

  const getRandomItems = (arr, count = 5) => {
    const shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
  };




  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Hero />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
        {statCards.map((card) => (
          <DashboardStatCard key={card.label} {...card} />
        ))}
      </div>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-xl">Shop by Category</h2>
          <a
            className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
            href="/products"
          >
            View All <i className="ri-arrow-right-line text-xs"></i>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.keys(catagoryBifercation).map((cat) => (
            <CategoryCard key={cat} label={cat} emoji={"📦"} count={catagoryBifercation[cat]} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ProductListSection
          title="Top Rated"
          iconClass="ri-star-line"
          products={getRandomItems(products, 5)}
          ctaHref="/products?sort=rating-desc"
        />
        <ProductListSection
          title="New Arrivals"
          iconClass="ri-flashlight-line"
          products={getRandomItems(products, 5)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default Home