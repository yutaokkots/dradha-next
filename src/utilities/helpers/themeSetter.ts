/** 
 * Sets the saved theme setting to local storage based on the key, "theme".
 * 
 * @returns - void
*/
const themeSetter = (theme: 'light'|'dark' ) => {
    localStorage.setItem("theme", theme);
}

export default themeSetter