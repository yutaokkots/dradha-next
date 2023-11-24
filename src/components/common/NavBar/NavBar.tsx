import React from 'react';
import ThemeToggler from '@/components/primitives/ThemeToggler';
import Hamburger from './Hamburger';

interface NavBarProps {
    // Space for additional props
}

const NavBar:React.FC<NavBarProps> = () => {
    return(
        <div className="h-[75px] w-screen fixed top-0 z-10 border-2 border-red-200 
                smcustom:h-screen smcustom:w-[150px] smcustom:left-0 smcustom:border-2 smcustom:border-green-500">
            
            <div className="">
                <div className="smcustom:hidden h-full flex flex-1 justify-end border-2 border-yellow-200 ">
                    <div className="h-full  flex center border-2 border-blue-200 ">
                        <Hamburger/>
                    </div>
                </div>
                
            </div>
            <nav>
                <div className="hidden smcustom:visible smcustom:fixed smcustom:flex smcustom:flex-col smcustom:items-start smcustom:w-[15vw]">
                    <ThemeToggler />
                    <div>Name</div>
                    <div>Home</div>
                    <div>Self</div>
                    <div>Project</div>
                    <div>Sign in</div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;