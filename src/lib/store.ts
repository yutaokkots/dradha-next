// State management using Zustand. https://github.com/pmndrs/zustand
import { create } from 'zustand';

/**
 * State for the dark/light theme for the site.
 * @state {'dark'|'light'|null} themeState - represents the strings, 'dark' or 'light'.
 * @function themeToggler - switches the theme state between 'dark' and 'light'.
 * @function themeStateSetter - sets the theme state. 
 */
export interface ThemeStates {
    themeState: 'dark'|'light'| null;
    themeToggler: () => void;
    themeStateSetter: (theme:'dark'|'light') => void;
}
export const useThemStore = create<ThemeStates>((set, get) => ({
    themeState: "dark",
    themeToggler: () => {
        set({
            themeState: get().themeState == "dark" ? "light" : "dark"
        })
    },
    themeStateSetter: (theme) => {
        set({
            themeState: theme
        })
    } 
}))

/** 
 * State for hiding or showing menu.
 * 
 * @state {boolean} menuState - Represents a boolean for displaying or hiding a menu.
 * @function menuToggler - Switches the menuState state between true and false. 
 */
interface MenuStates {
    menuState:boolean;
    menuToggler:() => void
}
export const useMenuStore = create<MenuStates>((set, get) => ({
    menuState: false,
    menuToggler: () => {
        set({
            menuState: !get().menuState
        });      
    }
}))

/** 
 * State for hiding or showing authorization (login/signup).
 * 
 * @state {boolean} authModalState - Represents a boolean for displaying or hiding the authorization modal.
 * @function toggler - Switches the menuState state between true and false. 
 * @state {boolean} registrationLoginState - Represents a boolean for displaying or hiding the registration/login screen inside the modal.
 * @function registrationLoginToggler - Switches the registrationLoginState state between true and false. 
 */

export interface AuthModalStates {
    authModalState: boolean;
    authModalToggler:() => void;
    registrationLoginState: boolean;
    registrationLoginToggler:() => void;
}
export const useAuthModalStore = create<AuthModalStates>((set, get) => ({
    authModalState: false,
    authModalToggler: () => {
        set({
            authModalState: !get().authModalState
        })
    },
    registrationLoginState: true,
    registrationLoginToggler: () => {
        set({
            registrationLoginState: !get().registrationLoginState
        })
    }
}))

/** 
 * State for storing hiding or showing authorization (login/signup)
 * 
 * @state {string} user - The user that has logged in.
 */
interface AuthStates {
    user: string;
}

/** 
 * State for OAuth2 verification states
 * 
 * @state {string} githuboauthstate - A temporarily created random string
 *                  to verify the login process. 
 */
export interface VerificationAuthOptions {
    githubOauthState: string
    githubOauthStateReset: () => void;
    setGithubOauthState: (link:string) => void;
}
export const useVerificationAuthState = create<VerificationAuthOptions>((set, get) => ({
    githubOauthState: "",
    githubOauthStateReset: () => {
        set({
            githubOauthState: ""
        })
    },
    setGithubOauthState: (link) => {
        set({
            githubOauthState: link
        })
    }
}))