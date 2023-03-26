// Utils
import { 
    useContext, 
    useEffect, 
    useState,
} from "react"

import { 
    useParams,
} from "react-router"

import { 
    api, 
} from "../../libs/axios"

import { 
    PostType, 
} from "../../@types/types"

// Context
import { 
    DataContext,
} from "../../contexts/Context"

// Icons
import { 
    UserCircle, 
} from "@phosphor-icons/react"

// Components
import { 
    Loading 
} from "../loading"

import { 
    CommentBody, 
    CommentBox, 
    CommentContainer, 
    CommentName, 
    CommentUserInfo, 
    CommentUserName, 
    Container, 
    PostBody, 
    PostBox, 
    PostMainInfo, 
    PostTitle, 
    PostWriterInfo, 
    PostWriterName,
} from "./style"

export function Post(){

    const { GetComments, GetUser, comments, user, isLoading} = useContext(DataContext)
    const { id } = useParams()

    const [post, setPost] = useState<PostType[]>()

    useEffect(() => {
        const FilterPost = async () => {
            let pos:Array<PostType[]> = []
            await api.get('posts')
                .then(res => {
                    pos.push(res.data.filter((post:PostType) => post.id == id))
                })
            setPost(pos[0])
            GetUser(String(pos[0].map(item=> item.userId)))
        }
        FilterPost()
        GetComments(id)
    },[])

    return(
        <Container>
            {  isLoading ? 
                    <Loading />
                :
                    post!.map(item => {
                        return(
                            <PostBox key={item.id}>
                                <PostMainInfo>
                                    <PostTitle>{item.title}</PostTitle>
                                    <PostWriterInfo href={`../user/${item.userId}`}>
                                        <UserCircle size={20}/>
                                        <PostWriterName>
                                            {user.username}
                                        </PostWriterName>
                                    </PostWriterInfo>
                                </PostMainInfo>
                                <PostBody>
                                    {item.body}
                                </PostBody>
                                <CommentContainer>
                                    {
                                        comments.map(comment => {
                                            return(
                                                <CommentBox key={comment.id}>
                                                    <CommentUserInfo>
                                                        <UserCircle size={16} />
                                                        <CommentUserName>{comment.email}</CommentUserName>
                                                    </CommentUserInfo>
                                                    <CommentName>{comment.name}</CommentName>
                                                    <CommentBody>{comment.body}</CommentBody>
                                                </CommentBox>
                                            )
                                        })
                                    }
                                </CommentContainer>
                            </PostBox>
                        )
                    })
            }
        </Container>
    )
}