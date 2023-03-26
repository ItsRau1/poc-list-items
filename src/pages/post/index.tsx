import { UserCircle } from "@phosphor-icons/react"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { PostType, User } from "../../@types/types"
import { DataContext } from "../../contexts/Context"
import { api } from "../../libs/axios"
import { CommentBody, CommentBox, CommentContainer, CommentName, CommentUserInfo, CommentUserName, Container, PostBody, PostBox, PostMainInfo, PostTitle, PostWriterInfo, PostWriterName } from "./style"

export function Post(){

    const { GetComments, GetUser, comments, user, isLoading} = useContext(DataContext)
    const { id } = useParams()

    const [post, setPost] = useState() as Array<PostType[]>

    useEffect(() => {
        const FilterPost = async () => {
            let pos:Array<PostType> = []
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

    // async function GetCommentUser(email){
    //     let user = []
    //     await api.get('users')
    //         .then(res => {
    //             console.log(res.data.map(user => user.email))
    //         })
    // }

    return(
        <Container>
            {  isLoading ? 
                    <h1>Loading</h1>
                :
                    post.map(item => {
                        return(
                            <PostBox key={item.id}>
                                <PostMainInfo>
                                    <PostTitle>{item.title}</PostTitle>
                                    <PostWriterInfo to={`user/${item.userId}`}>
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