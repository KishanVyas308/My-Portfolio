import React from 'react'

const ShimmerButton = ({
  title, icon, position, otherClasses, handleClick
}: {
  title: string,
  icon: React.ReactNode,
  position?: string,
  otherClasses?: string,
  handleClick?: () => void
}) => {
  return (

    // Button code
    <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-slate-50 gap-2 ` + otherClasses} onClick={handleClick}>
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </button>


  )
}

export default ShimmerButton
