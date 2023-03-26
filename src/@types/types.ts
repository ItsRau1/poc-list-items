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
    GetUser: (id: string | undefined | number) => void,
    GetUsers: () => void,
    posts: PostType[],
    comments: CommentType[],
    users: User[],
    user: User,
    isLoading: boolean,
}

export interface PostType{
    id: number | string,
    userId: number,
    title: string,
    body: string,
}

export type Params = {
    id: string,
}