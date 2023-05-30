import { createContext, useState } from "react";
import { ProviderProps } from "../interfaces";

export const FilterContext = createContext({
  completed: false,
  setCompleted: (value: boolean) => {}
})



export function FilterContextProvider({ children }: ProviderProps) {
  const [ completed, setCompleted ] = useState(false);

  return (

    <FilterContext.Provider value={{ completed, setCompleted }}>
      {children}
    </FilterContext.Provider>
    
  )
}
