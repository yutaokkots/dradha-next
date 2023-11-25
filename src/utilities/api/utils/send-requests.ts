import * as userService from '../users/user-service'
const DEV_URL = "" //import.meta.env.VITE_DEV_URL
/**
 * Sends an HTTP request to an api endpoint. 
 * @description Sends an HTTP request and retrieves a response, with an option to include a payload. 
 * @param {string} endpoint - The url endpoint.
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - The HTTP method. 
 * @param {any} payload - The data sent along with the HTTP request.
 * @returns {Promise<object>} response - The json object returned from the API.
 * @throws {Error} - Throws an error if the response was unsuccessful. 
 */
interface SendRequestTypes {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    payload?: any;
}

export const sendRequests = async (
        {endpoint, 
            method="GET", 
            payload=null}: SendRequestTypes):Promise<any> => {
    // @type options - RequestInit
    const options:RequestInit = {};
    // @type headersInit - HeadersInit
    const headersInit: HeadersInit = {};
    options.headers = headersInit;
    options.method = method;

    if (payload){
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }
    const token = userService.getToken();
    if (token){
        options.headers = options.headers || [];
        options.headers['Authorization'] = `Bearer ${token}`;
    }
    try{
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