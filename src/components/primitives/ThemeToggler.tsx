"use client";

import React, { useState, useEffect } from "react"
import themeSetter from "@/utilities/helpers/themeSetter";
import themeGetter from "@/utilities/helpers/themeGetter";
import { useThemStore, ThemeStates } from "@/lib/store";

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
    const {themeState, themeToggler, themeStateSetter}:ThemeStates = useThemStore()
    //const [pageTheme, setPageTheme] = useState<"light"|"dark">('dark')

    useEffect(() => {
        const root = document.getElementsByTagName('html')[0]
        const currentTheme = themeGetter()
        if (currentTheme == "light"){
            themeStateSetter("light")
            themeSetter("light")
            root.classList.remove("dark")
            root.classList.add("light")
        } else {
            themeStateSetter("dark")
            themeSetter("dark")
            root.classList.remove("light")
            root.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        
        const root = document.getElementsByTagName('html')[0]
        if (themeState == "light"){
            themeToggler()
            themeSetter("dark")
            root.classList.remove("light")
            root.classList.add("dark")
        } else {
            themeToggler()
            themeSetter("light")
            root.classList.remove("dark")
            root.classList.add("light")
        }

    }
    return (
        <button
            id="dark-light-theme-toggler"
            role="button" 
            aria-label="Toggle Dark/Light Theme"
            onClick={toggleTheme}>
                {themeState == "dark" ?
                    <div className="border-2 rounded-sm text-sm px-1">light</div>
                    :
                    <div className="border-2 rounded-sm text-sm px-1">dark</div>
                }
        </button>
    )
}

export default ThemeToggler;