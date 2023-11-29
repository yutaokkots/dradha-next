/** 
 * Sets the saved theme setting to local storage based on the key, "theme".
 * 
 * @returns - void
*/
export const themeSetter = (theme: 'light'|'dark' ) => {
    localStorage.setItem("theme", theme);
}

export const htmlClassThemeSetter = (theme: 'light'|'dark') => {
    const root = document.getElementsByTagName('html')[0]
    if (theme == 'light'){
        root.classList.remove("dark")
        root.classList.add("light")
    } else if (theme == 'dark'){
        root.classList.remove("light")
        root.classList.add("dark")
    }
}