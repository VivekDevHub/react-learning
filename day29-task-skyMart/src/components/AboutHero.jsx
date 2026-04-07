const AboutHero = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-14 animate-fade-in">
      <div className="w-14 h-14 bg-volt rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
        <i className="ri-flashlight-fill text-ink text-2xl"></i>
      </div>
      <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
        {title} <span className="text-volt">{highlight}</span>
      </h1>
      <p className="text-white/40 font-body text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}

export default AboutHero