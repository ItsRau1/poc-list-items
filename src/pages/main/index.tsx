import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/Context"

export function Main(){
    const { Consume, posts, GetUsers, users } = useContext(DataContext)

    useEffect(()=>{
        Consume()
        GetUsers()
    }
    ,[]);

    return(
        <div>
            {posts.map(post=>{
                return(
                    <div key={post.id}>
                        <Link to={`post/${post.id}`}>
                            <Link to={`user/${post.userId}`}>{users[post.userId - 1].username}</Link>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}