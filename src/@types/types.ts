import { ReactNode } from "react";

export interface DataProviderProps{
    children: ReactNode,
}

export interface User{
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        },
        street: string,
        suite: string,
        zipcode: string,
    },
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export interface ContextType{
    Consume: () => void,
    posts: PostType[],
    GetUser: (id: string | undefined) => void,
    GetUsers: () => void,
    users: User[],
    user: User,
}

export interface PostType{
    id: number,
    userId: number,
    title: string,
    body: string,
}

export type Params = {
    id: string,
}