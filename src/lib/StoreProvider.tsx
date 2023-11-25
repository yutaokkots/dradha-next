import React, {createContext, useContext} from 'react'

export const StoreContext = createContext(null);

interface StoreProviderProps {
    children: React.ReactNode;
    store: 
}

const StoreProvider:React.FC<StoreProviderProps> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={}>
        {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;

export const useStore = (selector, eqFn) => {
  const store = useContext(StoreContext)

}