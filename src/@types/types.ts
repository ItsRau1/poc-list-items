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

export interface CommentType{
    body: string,
    email: string,
    id: number,
    name: string,
    postId: number,
}

export interface ContextType{
    GetPosts: () => void,
    GetComments: (id: string | undefined) => void,
    GetUser: (id: string | undefined) => void,
    GetUsers: () => void,
    posts: PostType[],
    comments: CommentType[],
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