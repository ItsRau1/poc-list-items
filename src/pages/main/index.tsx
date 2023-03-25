import { UserCircle } from "@phosphor-icons/react";
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/Context"
import { MainContainer, PostBox, PostLinkBox, PostUserInfo, PostUserLink } from "./style";

export function Main(){
    const { GetPosts, posts, GetUsers, users } = useContext(DataContext)

    useEffect(()=>{
        GetPosts()
        GetUsers()
    }
    ,[]);

    return(
        <MainContainer>
            {posts.map(post=>{
                return(
                    <PostBox key={post.id}>
                        <PostLinkBox to={`post/${post.id}`}>
                            <PostUserInfo>
                                <UserCircle size={32} />
                                <PostUserLink to={`user/${post.userId}`}>
                                    {users[post.userId - 1].username}
                                </PostUserLink>
                            </PostUserInfo>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </PostLinkBox>
                    </PostBox>
                )
            })}
        </MainContainer>
    )
}