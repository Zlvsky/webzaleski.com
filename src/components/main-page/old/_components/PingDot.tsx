export const PingDot = () => {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 duration-150"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
    </span>
  )
}
