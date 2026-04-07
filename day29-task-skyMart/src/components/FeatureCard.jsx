const FeatureCard = ({ iconClass, iconColor = '', title, subtitle }) => {
  return (
    <div className="bg-[#111] border border-white/80 rounded-2xl p-5 flex items-center gap-4">
      <i className={`${iconClass} text-xl ${iconColor}`}></i>
      <div>
        <p className="font-body font-semibold text-white/80 text-sm">{title}</p>
        <p className="text-white/30 text-xs">{subtitle}</p>
      </div>
    </div>
  )
}

export default FeatureCard