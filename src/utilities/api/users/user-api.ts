import { routes } from "../routes"
import sendRequest, { SendRequestOptions } from "../utils/send-requests"
const BASE_URL = routes.auth

interface userDataOptions {
    userData: any | null | undefined;
}

// class-based AuthService
export class AuthService {
    private baseURL: string;

    constructor(){
        this.baseURL = BASE_URL;
    }

    login({ userData }: userDataOptions) {
        const options:SendRequestOptions = {
            endpoint: `${this.baseURL}/login`,
            method: "POST",
            payload: userData
        }
        return sendRequest(options)
    }
}

// usage
// const authService = new AuthService()



// AuthService (function-based)
// export const login = (userData:userDataOptions) => {
//     return sendRequest(`${BASE_URL}/login`, "POST", userData)
// }