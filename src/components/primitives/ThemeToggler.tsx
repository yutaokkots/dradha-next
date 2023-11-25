"use client";

import React, { useState } from "react"
import themeSetter from "@/utilities/helpers/themeSetter";
/**
 * ThemeToggler component allows toggling between light and dark themes.
 *
 * @description This component manages the page theme state and updates the HTML root element
 * with the 'dark' class to apply dark mode styles. It provides a button that, when clicked,
 * toggles between light and dark themes. The current theme is reflected in the pageTheme state.
 *
 * @state {string} pageTheme - Represents the current theme ('light' or 'dark').
 *
 * @function toggleTheme - Toggles the 'dark' class on the HTML root element and updates the
 * pageTheme state accordingly. It also calls an external function (themeSetter) to persist
 * the theme preference, e.g., in local storage.
 * 
 * @returns {JSX.Element} - A button component that indicates 'LIGHT' or 'DARK' based on the
 * current theme.
 */
const ThemeToggler= () => {
    const [pageTheme, setPageTheme] = useState<"light"|"dark">('dark')

    const toggleTheme = () => {
        const root = document.getElementsByTagName('html')[0]
        if (root.classList.toggle("dark")){
            setPageTheme("dark")
            themeSetter("dark")
            root.classList.remove("light")
        } else{
            setPageTheme("light")
            themeSetter("light")
            root.classList.add("light")
        }
    }
    return (
        <button
            onClick={toggleTheme}>
                {pageTheme == "dark" ?
                    <div className="border-2 rounded-sm text-sm px-1">light</div>
                    :
                    <div className="border-2 rounded-sm text-sm px-1">dark</div>
                }
        </button>
    )
}

export default ThemeToggler;