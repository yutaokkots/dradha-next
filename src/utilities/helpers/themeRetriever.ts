/*
 * Retrieve an item from local storage based on the provided key.
 * @param - a key
 * @returns - value from local storage
*/
const themeRetrieval = (): 'lighttheme'|'darktheme' => {
    const storedItem = localStorage.getItem("theme");
    if (storedItem == null){
        return "darktheme"
    } else {
        return storedItem as 'lighttheme' | 'darktheme';
    }
}

export default themeRetrieval;