"use client"
import React from 'react';
import { useMenuStore } from '@/lib/store';


interface HamburgerProps {
    // Space for additional props
}

const Hamburger:React.FC<HamburgerProps> = () => {
  const {menuToggle} = useMenuStore();

  return (
    <>  
      <div className="w-9 h-9 ">
        { menuToggle ?
            <div className="w-full h-full flex items-center relative  border-2 rounded-md border-gray-500 ">
                <div>
                <span className="h-0.5 w-10/12 z-11 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gray-500 rotate-45"></span>
                <span className="h-0.5 w-10/12 z-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gray-500 -rotate-45"></span>
                </div>
            </div>
            :
            <div className="w-full h-full flex flex-col justify-between items-center px-1 py-2 border-2 rounded-md border-gray-500 ">
                  <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
                  <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
                  <span className="h-0.5 w-11/12 rounded-sm bg-gray-500"></span>
            </div>
        }
        </div>
    </>
  )
}

export default Hamburger;
