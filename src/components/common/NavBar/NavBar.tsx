import React from 'react';
import ThemeToggler from '@/components/primitives/ThemeToggler';

import NavBarMobile from './NavBarMobile';

interface NavBarProps {
    // Space for additional props
}

const NavBar:React.FC<NavBarProps> = () => {
    return(
        <>
            {/* <div className="h-full">
                <div className="smcustom:hidden h-full items-center flex justify-end border-2 border-yellow-200 ">
                    <div className="h-full items-center flex center border-2 p-2 border-blue-200 ">
                        <NavToggler>
                            <Hamburger/>
                        </NavToggler>
                    </div>
                </div>
            </div> */}
            <NavBarMobile />
            <nav>
                {/* <div className="smcustom:hidden h-full items-center flex center  p-2  "> */}
                <div className="hidden smcustom:h-screen smcustom:visible smcustom:fixed smcustom:flex smcustom:flex-col smcustom:items-start smcustom:w-[150px] border-2 border-blue-200">
                    <ThemeToggler />
                    <div>Name</div>
                    <div>Home</div>
                    <div>Self</div>
                    <div>Project</div>
                    <div>Sign in</div>
                </div>
                {/* </div> */}
            </nav>

        </>
    )
}

export default NavBar;