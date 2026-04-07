const Brand = () => {
  return (
    <div className="flex items-center gap-3 relative z-10">
      <div className="w-10 h-10 bg-volt rounded-2xl flex items-center justify-center">
        <i className="ri-flashlight-fill text-ink text-lg"></i>
      </div>
      <span className="font-heading font-bold text-2xl">
        Sky<span className="text-volt">Mart</span>
      </span>
    </div>
  )
}

export default Brand