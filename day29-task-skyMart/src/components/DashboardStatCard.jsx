const DashboardStatCard = ({ iconClass, value, label, hint, accent }) => {
  const accentClasses =
    accent === 'blue'
      ? 'bg-blue-500/10 text-blue-400'
    : accent === 'amber'
      ? 'bg-amber-500/10 text-amber-400'
    : accent === 'purple'
      ? 'bg-purple-500/10 text-purple-400'
      : 'bg-volt-10 text-volt'

  return (
    <div className="bg-[#111] border border-white/80 rounded-3xl p-6 flex items-start gap-4">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${accentClasses}`}>
        <i className={`${iconClass} text-xl`}></i>
      </div>
      <div>
        <p className="font-heading font-bold text-2xl text-white">{value}</p>
        <p className="text-white/50 text-sm font-body">{label}</p>
        <p className="text-white/25 text-xs font-body mt-0.5">{hint}</p>
      </div>
    </div>
  )
}

export default DashboardStatCard