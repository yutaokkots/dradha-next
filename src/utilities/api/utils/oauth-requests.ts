/**
 * Sends an OAuth Request. 
 * @description Sends an OAuth request to an OAuth2 provider to retrieve an Authorization Grant. 
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */
import { SendRequest, SendRequestOptions } from "./send-requests";
const GITHUB_ID = process.env.GITHUB_OAUTH_ID || ""
const GITHUB_URL = process.env.GITHUB_OAUTH_URL || ""
const GITHUB_STATE = process.env.GITHUB_OAUTH_STATE || ""
const REDIRECT_URL = process.env.REDIRECT_URL || ""


const oauthConfig = {
    url: GITHUB_URL,
    client_id: GITHUB_ID,
    redirect_uri: REDIRECT_URL,
    state: GITHUB_STATE,
}

export const oAuthGithub = () => {
    const { url, client_id, redirect_uri, state } = oauthConfig;
    const queryParams = new URLSearchParams({
        client_id,
        redirect_uri,
        state,
    });
        
    return `${url}${queryParams.toString()}`;
}



// export class OAuthRequests {
//     private configs: GithubOptions;
//     private response: any;
//     private error: any;

//     constructor(){
//         this.configs = oauthConfig;
//     }
    
//     sendRequest = async ():Promise<any> => {
//         const options:RequestInit = {};
//         const header:HeadersInit = {};
//         options.headers = header;
//         options.method = method
//         const { url, client_id, redirect_uri, state } = this.configs;
//         const queryParams = new URLSearchParams({
//             client_id,
//             redirect_uri,
//             state,
//         });
    
//         const urlAddress = `${url}${queryParams.toString()}`;
//         try {
//             const response = await fetch(urlAddress)
//             if (!response.ok) {
//                 throw new Error(`HTTP error. Status: ${response.status}`);
//             }
//             this.response = response
//             console.log(response)
//         } catch (error){
//             console.error('An error occured during the HTTP request:', error)
//             throw new Error('Bad Request');
//         }
//     }
//     responseRetrieval = () => {
//         return this.response
//     }

// }