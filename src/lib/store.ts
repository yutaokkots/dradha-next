import { create } from 'zustand';

/** 
 * State management using Zustand. https://github.com/pmndrs/zustand
 * Contains multiple states, including:
 * 
 * @state {boolean} menuToggle - Represents a boolean for displaying or hiding a menu.
 * @function toggler - Switches the menuToggle state between true and false. 
 * 
 */
interface MenuState{
    menuToggle:boolean;
    toggler:() => void
}
export const useMenuStore = create<MenuState>((set, get) => ({
    menuToggle: false,
    toggler: () => {
        set({
            menuToggle: !get().menuToggle});      
    }
}))
