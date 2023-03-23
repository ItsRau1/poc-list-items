// Utils
import { 
    createContext, 
    useState 
} from "react";

import { 
    ContextType, 
    DataProviderProps, 
    PostType, 
    User 
} from "../@types/types";

import { 
    api,
} from "../libs/axios";


export const DataContext = createContext({} as ContextType)

export function DataProvider({children}: DataProviderProps){

    const [posts, setPosts] = useState([] as PostType[])
    const [user, setUser] = useState({} as User)
    const [users, setUsers] = useState([] as User[])

    async function Consume(){
        const res = await api.get('posts')    
        setPosts(res.data)
    }

    async function GetUsers(){
        const res = await api.get('users')
        setUsers(res.data);
    }

    async function GetUser(id: string | undefined){
        const res = await api.get(`users/${id}`)
        setUser(res.data);
    }
 
    return(
        <DataContext.Provider
            value={{ Consume, GetUsers, GetUser, posts, users, user}}
        >
            {children}
        </DataContext.Provider>
    )
}