import React from 'react';

interface HamburgerProps {
    // Space for additional props
}

const Hamburger:React.FC<HamburgerProps> = () => {
  return (
    <>
        <div className="w-11 h-11 flex flex-col justify-between items-center px-1 py-2 border-2 rounded-md border-gray-500 ">
            <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
            <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
            <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
        </div>
    </>
  )
}

export default Hamburger;