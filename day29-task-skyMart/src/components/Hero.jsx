import { userData } from "../context/AuthContext"

const badges = [
  { title: '20+', subtitle: 'Products Available', accent: 'volt' },
  { title: 'Free', subtitle: 'Delivery on ₹999+', accent: 'glass' },
]

function StatBadge({ title, subtitle, accent }) {
  const accentClasses =
    accent === 'volt'
      ? 'bg-volt-10 border-volt-20 text-volt'
      : 'bg-transparent border-white/80 text-white'

  return (
    <div className={`rounded-2xl px-6 py-4 text-center border ${accentClasses}`}>
      <p
        className={`font-heading font-bold ${accent === 'volt' ? 'text-4xl' : 'text-2xl'
          }`}
      >
        {title}
      </p>
      <p className="text-white/40 text-xs font-body mt-1">{subtitle}</p>
    </div>
  )
}

const Hero = () => {

  const { user } = userData();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/80 p-8 sm:p-12 mb-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="text-volt-soft text-sm font-body tracking-widest uppercase mb-3">
            Good morning 👋
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Welcome back,
            <br />
            <span className="text-volt">{user?.name?.split(" ")[0]}!</span>
          </h1>
          <p className="text-white/40 font-body max-w-md">
            Discover today&apos;s picks — hand-curated products across electronics,
            fashion, and more.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <a className="btn-volt rounded-xl flex items-center gap-2" href="/products">
              Shop Now <i className="ri-arrow-right-line text-sm"></i>
            </a>
            <a className="btn-ghost rounded-xl flex items-center gap-2" href="/products">
              View All Products
            </a>
          </div>
        </div>

        <div className="shrink-0 flex flex-col gap-3">
          {badges.map((badge) => (
            <StatBadge key={badge.title} {...badge} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero