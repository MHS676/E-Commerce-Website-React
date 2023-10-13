import { createContext, } from 'react'; //useState

export const Context = createContext();
const AppContext = ({ children}) => {
    return (
        <Context.Provider>
            { children}
        </Context.Provider>
    )
}

export default AppContext;
