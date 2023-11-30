/**
 * Sends an OAuth Request. 
 * @description Sends an OAuth request to an OAuth2 provider to retrieve an Authorization Grant. 
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */
const GITHUB_ID = process.env.GITHUB_OAUTH_ID || ""
const GITHUB_URL = process.env.GITHUB_OAUTH_URL || ""
const GITHUB_STATE = process.env.GITHUB_OAUTH_STATE || ""
const REDIRECT_URL = process.env.REDIRECT_URL || ""

const oAuthConfigGithub = {
    url: GITHUB_URL,
    client_id: GITHUB_ID,
    redirect_uri: REDIRECT_URL,
    state: GITHUB_STATE,
}

export const oAuthGithub = () => {
    const { url, client_id, redirect_uri, state } = oAuthConfigGithub;
    const queryParams = new URLSearchParams({
        client_id,
        redirect_uri,
        state,
    });
        
    return `${url}?${queryParams.toString()}`;
}