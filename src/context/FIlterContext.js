import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const [filter, setFilter] = useState('SIZE');

    return (
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    )   
}