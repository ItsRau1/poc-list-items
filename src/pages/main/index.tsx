import { UserCircle } from "@phosphor-icons/react";
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/Context"
import { MainContainer, PostBody, PostBox, PostContentInfo, PostLinkBox, PostTitle, PostUserInfo, PostUserLink, PostUserName } from "./style";

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
                                <PostUserLink to={`user/${post.userId}`}>
                                    <UserCircle size={30} />
                                    <PostUserName>
                                        {users[post.userId - 1].username}
                                    </PostUserName>
                                </PostUserLink>
                            </PostUserInfo>
                            <PostContentInfo>
                                <PostTitle>
                                    {post.title}
                                </PostTitle>
                                <PostBody>
                                    {post.body}
                                </PostBody>
                            </PostContentInfo>
                        </PostLinkBox>
                    </PostBox>
                )
            })}
        </MainContainer>
    )
}