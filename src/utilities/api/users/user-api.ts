import { routes } from "../routes"
import sendRequest from "../utils/send-requests"
const BASE_URL = routes.auth

interface userDataType {
    userData: any | null | undefined;
}

export const login = (userData:userDataType) => {
    return sendRequest(`${BASE_URL}/login`, "POST", userData)
}
