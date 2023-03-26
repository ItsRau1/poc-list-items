// Utils
import { 
    createContext, 
    useState 
} from "react";

import { 
    CommentType,
    ContextType, 
    DataProviderProps, 
    PostType, 
    User 
} from "../@types/types";

import { 
    api,
} from "../libs/axios";

// Context 
export const DataContext = createContext({} as ContextType)

export function DataProvider({children}: DataProviderProps){

    const [posts, setPosts] = useState([] as PostType[])
    const [comments, setComments] = useState([] as CommentType[])
    const [user, setUser] = useState({} as User)
    const [users, setUsers] = useState([] as User[])

    const [isLoading, setIsLoading] = useState(true as boolean)

    async function GetPosts(){
        const res = await api.get('posts')    
        setPosts(res.data)
        setIsLoading(false)
    }

    async function GetUsers(){
        const res = await api.get('users')
        setUsers(res.data);
        setIsLoading(false)
    }

    async function GetUser(id: string | undefined | number){
        const res = await api.get(`users/${id}`)
        setUser(res.data);
        setIsLoading(false)
    }

    async function GetComments(id: string | undefined){
        const res = await api.get(`posts/${id}/comments`)
        setComments(res.data)
        setIsLoading(false)
    }
 
    return(
        <DataContext.Provider
            value={{ GetPosts, GetUsers, GetUser, GetComments, isLoading, posts, comments, users, user}}
        >
            {children}
        </DataContext.Provider>
    )
}