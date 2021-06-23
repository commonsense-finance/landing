import { createContext } from "react";

export const DataContext = createContext();

const dataInit = {
    data: 'Null'
}

export const DataProvider = ({children}) => {
    return (
        <DataContext.Provider
            value={dataInit}
        >
            {children}
        </DataContext.Provider>
    )
}
