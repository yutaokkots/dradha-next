"use client";

import React from 'react'
import Hamburger from './Hamburger';
import NavToggler from '@/components/primitives/NavToggler';
import { useMenuStore } from '@/lib/store';

interface NavBarMobileProps {
    // Space for additional props
}
const NavBarMobile:React.FC<NavBarMobileProps> = () => {
    const { menuToggle } = useMenuStore();

    return (
        <div>
            <div className="h-[70px] w-screen fixed top-0 z-10 border-2 border-red-200 
                    smcustom:hidden">            
                <div className="h-full smcustom:hidden">
                    <div className="smcustom:hidden h-full items-center flex justify-end border-2 border-yellow-200 ">
                        {/* <div className="smcustom:hidden h-full items-center flex center border-2 p-2 border-blue-200 "> */}
                            <NavToggler>
                                <Hamburger/>
                            </NavToggler>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavBarMobile;
