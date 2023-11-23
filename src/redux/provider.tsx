"use client"

import { store } from "./store"
import { Provider } from "react-redux"

/**
 * Providers Component:
 * 
 * This React component serves as a wrapper to provide the Redux store
 * to its child components using the React-Redux Provider.
 * 
 * @param children - The child components to be wrapped by this provider.
 * @returns JSX element with the Redux store provided to its children.
 */
export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
}