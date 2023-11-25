
export class TokenService {
    private token: string | null;

    constructor(){
        this.token = localStorage.getItem("token");
    }

    getToken() {
        const token = localStorage.getItem("token");
        if (!token){
            this.token = null
            return null
        }
        const payload = JSON.parse(window.atob(token.split('.')[1]))
        if (payload.exp < Date.now() / 1000){
            localStorage.removeItem('Token');
            this.token = null
            return null
        }
        this.token = token
        return this.token
    }

    removeToken() {
        localStorage.remove("token")
    }

}
