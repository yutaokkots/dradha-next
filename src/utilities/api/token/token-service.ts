/**
 * Retrieves the token from client's local storage, or null if token is expired or does not exist. 
 * 
 * @returns {string | null} Returns a token, or null. 
 */
interface TokenPayload {
    exp:number;
}

export const getToken = ():string|null => {
    const token = localStorage.getItem("token") ?? null;
    if (!token){
        return null
    }
    const payload:TokenPayload = JSON.parse(window.atob(token.split('.')[1]))
    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('token');
        return null
    }
    return token
}

/**
 * Removes the token from client's local storage.
 * 
 * @returns void 
 */
export const removeToken = ():void => {
    localStorage.remove("token");
}

/**
 * Sets string to client's local storage.
 * 
 * @params {string} access
 * @returns void 
 */
export const setToken = (access:string):void => {
    localStorage.setItem("token", access);
}