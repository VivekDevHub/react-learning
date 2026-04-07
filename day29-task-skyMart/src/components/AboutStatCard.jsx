const AboutStatCard = ({ iconClass, value, label }) => {
  return (
    <div className="bg-[#111] border border-white/80 rounded-2xl p-5 text-center animate-scale-in">
      <div className="w-12 h-12  text-volt rounded-xl flex items-center justify-center mx-auto mb-3">
        <i className={`${iconClass} text-lg`}></i>
      </div>
      <p className="font-heading font-bold text-2xl text-white">{value}</p>
      <p className="text-white/30 text-xs font-body mt-1">{label}</p>
    </div>
  )
}

export default AboutStatCard