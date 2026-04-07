
const StatCard = ({ value, label }) => {
  return (
    <div className=" border border-white/80 rounded-2xl p-4 text-center">
      <p className="font-heading font-bold text-xl text-volt">{value}</p>
      <p className="text-white/40 text-xs font-body mt-1">{label}</p>
    </div>
  )
}

export default StatCard
