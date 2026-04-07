import StatCard from './StatCard'

const stats = [
  { value: '20K+', label: 'Products' },
  { value: '50K+', label: 'Users' },
  { value: '4.9★', label: 'Rating' },
]

function HeroPanel() {
  return (
    <div className="flex-1 flex flex-col justify-center relative z-10">
      <p className="text-volt text-sm font-body font-medium mb-4 tracking-widest uppercase">
        Welcome back
      </p>

      <h1 className="font-heading font-bold text-5xl leading-tight mb-6">
        Shop the future.
        <br />
        <span className="text-volt">Today.</span>
      </h1>

      <p className="text-white/40 text-base font-body max-w-sm leading-relaxed">
        Thousands of products, lightning-fast delivery, and prices that make
        your wallet happy.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-12">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default HeroPanel