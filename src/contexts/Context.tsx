import { ReactNode, createContext, useState } from "react";
import { api } from "../libs/axios";

interface DataProviderProps{
    children: ReactNode,
}

interface ContextType{
    Consume: () => void,
    posts: string[],
}

export const DataContext = createContext({} as ContextType)

export function DataProvider({children}: DataProviderProps){
    const [posts, setPosts] = useState([])

    async function Consume(){
        const res = await api.get('posts')
        setPosts(res.data)
    }
 
    return(
        <DataContext.Provider
            value={{ Consume, posts }}
        >
            {children}
        </DataContext.Provider>
    )
}