function getPasswordStrength(value = '') {
  if (!value) {
    return null
  }

  if (value.length < 6) {
    return {
      label: 'Weak',
      activeBars: 1,
      activeClass: 'bg-red-500',
      textClass: 'text-red-400',
    }
  }

  if (value.length < 10) {
    return {
      label: 'Medium',
      activeBars: 2,
      activeClass: 'bg-amber-400',
      textClass: 'text-amber-400',
    }
  }

  return {
    label: 'Strong',
    activeBars: 3,
    activeClass: 'bg-volt',
    textClass: 'text-volt',
  }
}

function PasswordStrength({ value = '' }) {
  const strength = getPasswordStrength(value)

  if (!strength) {
    return null
  }

  return (
    <div className="flex gap-1.5 mt-2 items-center">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            index < strength.activeBars ? strength.activeClass : 'bg-white/10'
          }`}
        ></div>
      ))}

      <span className={`text-xs font-body ml-1 ${strength.textClass}`}>{strength.label}</span>
    </div>
  )
}

export default PasswordStrength