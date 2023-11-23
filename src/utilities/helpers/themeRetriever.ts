/*
 * Retrieve the saved theme setting from local storage based on the provided key.
 * 
 * @returns - value from local storage
*/
const themeRetrieval = (): 'light'|'dark' => {
    const storedItem = localStorage.getItem("theme");
    if (storedItem == null){
        return "dark"
    } else {
        return storedItem as 'light' | 'dark';
    }
}

export default themeRetrieval;