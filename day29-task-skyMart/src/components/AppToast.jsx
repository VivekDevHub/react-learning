const AppToast = ({ message, variant = 'error' }) => {
  const iconMap = {
    error: 'ri-close-circle-line',
    success: 'ri-checkbox-circle-line',
    info: 'ri-information-line',
  }

  const iconClass = iconMap[variant] ?? iconMap.info

  return (
    <div className={`app-toast app-toast--${variant}`}>
      <div className={`app-toast__icon-wrap app-toast__icon-wrap--${variant}`}>
        <div className="app-toast__icon-ring"></div>
        <i className={`${iconClass} app-toast__icon`}></i>
      </div>
      <div role="status" aria-live="polite" className="app-toast__message">
        {message}
      </div>
    </div>
  )
}

export default AppToast