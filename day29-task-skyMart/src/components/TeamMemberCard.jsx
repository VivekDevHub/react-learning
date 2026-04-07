
const TeamMemberCard = ({ name, role, badge, badgeColor }) => {
  return (
    <div className="bg-[#111] border border-white/80 rounded-2xl p-5 text-center">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-bold text-xl mx-auto mb-3 ${badgeColor}`}
      >
        {badge}
      </div>
      <p className="font-body font-semibold text-white/80 text-sm">{name}</p>
      <p className="text-white/30 text-xs mt-0.5">{role}</p>
    </div>
  )
}

export default TeamMemberCard
