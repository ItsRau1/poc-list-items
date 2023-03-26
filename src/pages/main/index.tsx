// Utils
import { 
    useContext, 
    useEffect, 
    useState
} from "react"

// Context
import { 
    DataContext 
} from "../../contexts/Context"

// Icons
import { 
    UserCircle 
} from "@phosphor-icons/react";

// Components
import { 
    MainContainer, 
    PostBody, 
    PostBox, 
    PostContentInfo, 
    PostLinkBox, 
    PostTitle, 
    PostUserInfo, 
    PostUserLink, 
    PostUserName 
} from "./style";

import { 
    Loading 
} from "../loading";


export function Main(){
    
    const { GetPosts, posts, GetUsers, users, isLoading } = useContext(DataContext)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        GetPosts()
        GetUsers()
        setTimeout(()=>{setLoading(false)}, 50)
    }
    ,[]);

    return(
        <MainContainer>
            { isLoading ?
                <Loading />
            :
                posts.map(post=>{
                    return(
                        <PostBox key={post.id}>
                            <PostLinkBox href={`post/${post.id}`}>
                                <PostUserInfo>
                                    <PostUserLink href={`user/${post.userId}`}>
                                        <UserCircle size={30} />
                                        <PostUserName>
                                            {loading ? "Carregando" : users[post.userId - 1].username}
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
                })
            }
        </MainContainer>
    )
}