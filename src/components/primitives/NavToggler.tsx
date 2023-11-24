"use client";
import React, {useState} from 'react';

interface NavTogglerProps {
    children: React.ReactNode
}

const NavToggler:React.FC<NavTogglerProps> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleTheme = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <button onClick={toggleTheme}>
                {children}
            </button>
        </>
    )
}


export default NavToggler;