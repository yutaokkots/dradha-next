/**
 * Sends an OAuth Request. 
 * @description Sends an OAuth request to an OAuth2 provider to retrieve an Authorization Grant. 
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */


const GITHUB_ID = process.env.NEXT_PUBLIC_GITHUB_OAUTH_ID || ""
const REDIRECT_URL = process.env.NEXT_PUBLIC_REDIRECT_URL || ""


const oAuthGithubLink = () => {
    const queryParams = new URLSearchParams({
        client_id: GITHUB_ID,
        redirect_uri: REDIRECT_URL,
    });
    return `?${queryParams.toString()}`;
}

// create random state code
const oAuthGithubAuthorizationCode = (stringLength:number):string => {
    let random:string = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length
    let counter = 0
    while (counter < stringLength){
        random += characters[Math.floor(Math.random() * charactersLength)]
        counter += 1
    }
    return random
}

// compare the states
export const oAuthGithubStateComparison = (state1:string|null, state2:string|null) => {
    if (state1 === "" || state2 === ""){
        return false
    }
    return state1 === state2
}

export const oAuthGithubUtils = {
    oAuthGithubAuthorizationCode: oAuthGithubAuthorizationCode,
    oAuthGithubLink: oAuthGithubLink,
    oAuthGithubStateComparison: oAuthGithubStateComparison
}