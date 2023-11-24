import React from 'react'
import ThemeToggler from '@/components/primitives/ThemeToggler'

const NavBar:React.FC = () => {
    return(
        <nav className="h-screen md:flex md:w-[15vw] md:fixed flex-col md:items-start z-10 border-2 border-red-200">
            <ThemeToggler />
            <div>Name</div>
            <div>Home</div>
            <div>Self</div>
            <div>Project</div>
            <div>Sign in</div>
        </nav>
    )
}

export default NavBar;