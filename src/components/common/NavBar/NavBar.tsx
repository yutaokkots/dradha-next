import React from 'react';
import ThemeToggler from '@/components/primitives/ThemeToggler';

import NavBarMobile from './NavBarMobile';
import SideBar from './SideBar';

interface NavBarProps {
    // Space for additional props
}

const NavBar:React.FC<NavBarProps> = () => {
    return(
        <div data-testid="navbar">
            <NavBarMobile />
            <SideBar />
        </div>
    )
}

export default NavBar;

            {/* <div className="h-full">
                <div className="smcustom:hidden h-full items-center flex justify-end border-2 border-yellow-200 ">
                    <div className="h-full items-center flex center border-2 p-2 border-blue-200 ">
                        <NavToggler>
                            <Hamburger/>
                        </NavToggler>
                    </div>
                </div>
            </div> */}