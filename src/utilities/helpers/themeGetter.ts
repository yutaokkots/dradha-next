/*
 * Retrieve the saved theme setting from local storage based on the provided key.
 * 
 * @returns - value from local storage
*/
const themeGetter = (): 'light'|'dark' => {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
    }
    const storedItem = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;

    if (storedItem == null) {
        return "dark";
    } else {
        return storedItem as 'light' | 'dark';
    }
    // const storedItem = localStorage.getItem("theme");
    // if (storedItem == null){
    //     return "dark"
    // } else {
    //     return storedItem as 'light' | 'dark';
    // }
}

export default themeGetter;