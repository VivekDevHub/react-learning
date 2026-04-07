const CallToAction = ({ title, subtitle, actionLabel, href }) => {
  return (
    <div className=" border border-volt/20 rounded-3xl p-8 sm:p-10 text-center animate-scale-in">
      <h2 className="font-heading font-bold text-2xl text-white mb-3">{title}</h2>
      <p className="text-white/40 font-body text-sm mb-6 max-w-2xl mx-auto">{subtitle}</p>
      <a className="btn-volt inline-flex items-center gap-2 px-8 py-3.5 text-base font-heading font-bold" href={href}>
        {actionLabel}
        <i className="ri-arrow-right-line text-base"></i>
      </a>
    </div>
  )
}

export default CallToAction