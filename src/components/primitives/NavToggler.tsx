"use client";
import React, {useState} from 'react';
import { useMenuStore } from '@/lib/store';

/**
 * NavToggler component allows toggling between displaying or not displaying the menu.
 *
 * @description This component passes a React component as a prop, turning the prop
 * into a button that toggles between 'true' and 'false to manage displaying a menu.
 * It saves the state in the zustand store and can be accessed with 'useMenuStore'.
 *
 * @state {boolean} menuToggle - Represents a boolean for displaying or hiding a menu
 *
 * @function handleTheme - On a button click, activates the 'toggler' function that is 
 * provided by the 'useMenuStore'
 * 
 * @returns {ReactNode} - Passes through the React Node prop
 */

interface NavTogglerProps {
    children: React.ReactNode
}

const NavToggler:React.FC<NavTogglerProps> = ({ children }) => {
    const menuState = useMenuStore((state) => state.menuState);
    const menuToggler = useMenuStore((state) => state.menuToggler);

    const handleTheme = () => {
       menuToggler()
    }

    return (
        <>
            <button 
                role="button" 
                aria-pressed="false"
                onClick={handleTheme}>
                {children}
            </button>
        </>
    )
}


export default NavToggler;