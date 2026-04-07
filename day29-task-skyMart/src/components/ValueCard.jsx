const ValueCard = ({ iconClass, title, description }) => {
  return (
    <div className="bg-[#111] border border-white/80 hover:border-volt/25 rounded-2xl p-6 transition-all duration-200 flex gap-4 animate-scale-in">
      <div className="w-10 h-10 bg-volt/10 rounded-xl flex items-center justify-center shrink-0 text-volt">
        <i className={`${iconClass} text-base`}></i>
      </div>
      <div>
        <h3 className="font-heading font-bold text-white text-base mb-1">{title}</h3>
        <p className="text-white/40 font-body text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ValueCard