import { getToken, removeToken } from "../token/token-service"

/**
 * 
 */

interface registerOptions {
    userData: 
}
export const register = async ():Promise<any> => {
    // 
}

export const getUserName = () => {
    const token = getToken()
    // parse the token and return the username
}

export const logOut = () => {
    removeToken();
}

