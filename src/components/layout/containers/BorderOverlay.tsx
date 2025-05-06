import React from 'react'

interface BorderOverlayProps {
  /** Optional: Additional classes to apply to the overlay */
  className?: string
  /** Optional: Content to render inside the overlay */
  children?: React.ReactNode
}

/**
 * An absolutely positioned overlay component with vertical borders,
 * centered horizontally with a max-width.
 */
const BorderOverlay: React.FC<BorderOverlayProps> = ({ className = '', children }) => {
  return (
    <div
      className={`
        pointer-events-none absolute left-1/2 z-[1] 
        h-full w-full max-w-screen-lg
         -translate-x-1/2 overflow-hidden
        border-b-0 border-l border-r border-t-0
        border-solid border-[#d9d9d9]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default BorderOverlay
