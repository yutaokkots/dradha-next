/**
 * Sends an OAuth Request. 
 * @description Sends an OAuth request to an OAuth2 provider to retrieve an Authorization Grant. 
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */

const DEV_URL = process.env.DEVELOPMENT_URL

export interface SendRequestOptions {
    payload?: any;
}

const oAuthRequests = async (
        {payload=null}: SendRequestOptions):Promise<any> => {
    // @type options - RequestInit 
    const options:RequestInit = {};
    // @type headersInit - HeadersInit 
    const headersInit: HeadersInit = {};
    options.headers = headersInit;
    options.method = "POST";

    if (payload){
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }

    try {
        const response = await fetch(`${DEV_URL}/${endpoint}`, options)
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        return response.json();
    } catch (error){
        console.error('An error occured during the HTTP request:', error)
        throw new Error('Bad Request');
    }
}

export default oAuthRequests;