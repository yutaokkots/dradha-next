// State management using Zustand. https://github.com/pmndrs/zustand
import { create } from 'zustand';

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
 * @state {boolean} authModalState - Represents a boolean for displaying or hiding the registration/login modal.
 * @function toggler - Switches the menuState state between true and false. 
 */

interface AuthModalStates {
    authModalState: boolean;
    authModalToggler:() => void
}
export const useAuthModalStore = create<AuthModalStates>((set, get) => ({
    authModalState: false,
    authModalToggler: () => {
        set({
            authModalState: !get().authModalState
        })
    }
}))

/** 
 * State for storing hiding or showing authorization (login/signup)
 * 
 * @state {string} user - Ther user that has logged in.
 */
interface AuthStates {
    user: string;
}