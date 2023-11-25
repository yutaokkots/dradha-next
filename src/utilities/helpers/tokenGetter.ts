/** 
 * Retrieves the saved token from localhost, and checks to see if the token is valid (not expired).
 * 
 * @returns {string | null} - Return the token.
*/
export const tokenGetter = () => {
    const token = localStorage.getItem("token")
    if (!token){
        return null;
    }
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('Token');
        return null;
    }
    return token
}

/** 
 * Removes the saved token from localhost.
 * 
 * @returns {void} 
*/
export const tokenRemover = () => {
    localStorage.remove("token")
}