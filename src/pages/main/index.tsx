import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/Context"
import { MainContainer, PostBox, PostLinkBox, PostUserLink } from "./style";

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
                            <PostUserLink to={`user/${post.userId}`}>{users[post.userId - 1].username}</PostUserLink>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </PostLinkBox>
                    </PostBox>
                )
            })}
        </MainContainer>
    )
}