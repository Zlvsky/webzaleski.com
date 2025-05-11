export const PingDot = () => {
  return (
    <span className="relative flex h-2 w-2">
      <span className="duration-[2.5s] absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
    </span>
  )
}
