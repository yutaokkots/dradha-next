/**
 * Sends an OAuth Request. 
 * @description Sends an OAuth request to an OAuth2 provider to retrieve an Authorization Grant. 
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */

import { routes } from "../routes"
import { SendRequest } from "../utils/send-requests"


const GITHUB_ID = process.env.NEXT_PUBLIC_GITHUB_OAUTH_ID || ""
const REDIRECT_URL = process.env.NEXT_PUBLIC_REDIRECT_URL || ""
const BASE_URL = routes.oauth
const SCOPE = "read:user, user:email"

// Sends a request to receive an authorization token
const oAuthGithubStateGet = () => {
    const sr = new SendRequest()
    return sr.sendRequest(`${BASE_URL}/callback/state`)
}

// Creates a github OAuth params to send with the initial OAuth request. 
const oAuthGithubLink = () => {
    const queryParams = new URLSearchParams({
        client_id: GITHUB_ID,
        redirect_uri: REDIRECT_URL,
        scope: SCOPE
    });
    return `?${queryParams.toString()}`;
}

// Creates a randomly generated string for the Github OAuth state param. 
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

// Compares two Github OAuth state params. 
export const oAuthGithubStateComparison = (state1:string|null, state2:string|null) => {
    if (state1 === "" || state2 === ""){
        return false
    }
    return state1 === state2
}

// Sends Github OAuth token to back-end for processing. 
export const oAuthGithubAPI = (token:string) => {

}


// export
export const oAuthGithubUtils = {
    oAuthGithubAuthorizationCode: oAuthGithubAuthorizationCode,
    oAuthGithubLink: oAuthGithubLink,
    oAuthGithubStateComparison: oAuthGithubStateComparison,
    oAuthGithubStateGet :oAuthGithubStateGet 
}