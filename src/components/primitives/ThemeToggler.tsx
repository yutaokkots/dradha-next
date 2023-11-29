"use client";

import React, { useEffect } from "react"
import { themeSetter, htmlClassThemeSetter } from "@/utilities/helpers/themeSetter";
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

    useEffect(() => {
        const currentTheme = themeGetter()
        if (currentTheme == "light"){
            themeStateSetter("light")
            themeSetter("light")
            htmlClassThemeSetter("light")
        } else {
            themeStateSetter("dark")
            themeSetter("dark")
            htmlClassThemeSetter("dark")
        }
    }, [])

    const toggleTheme = () => {
        if (themeState == "light"){
            themeToggler()
            themeSetter("dark")
            htmlClassThemeSetter("dark")
        } else {
            themeToggler()
            themeSetter("light")
            htmlClassThemeSetter("light")
        }
    }
    return (
        <button
            id="dark-light-theme-toggler"
            role="button" 
            aria-label="Toggle Dark/Light Theme"
            onClick={toggleTheme}>
                {themeState == "light" ?
                    <div className="border-2 rounded-sm text-sm px-1">dark</div>
                    :
                    <div className="border-2 rounded-sm text-sm px-1">light</div>
                }
        </button>
    )
}

export default ThemeToggler;