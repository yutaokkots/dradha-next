/** 
 * Retrieve the saved theme setting from local storage with the key, "theme".
 * 
 * @returns - value from local storage
*/
const themeGetter = (): 'light'|'dark' => {
    const storedItem = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (storedItem == null) {
        return "light";
    } else {
        return storedItem as 'light' | 'dark';
    }
}

export default themeGetter;