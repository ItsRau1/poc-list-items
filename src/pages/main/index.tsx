import { useContext, useEffect } from "react"
import { DataContext } from "../../contexts/Context"

export function Main(){
    const { Consume, posts } = useContext(DataContext)

    useEffect(()=>{
        Consume()
    }
    ,[])

    return(
        <div>
            { posts.map(post =>{
                return(
                    <div>
                        <p>{post.id}</p>
                    </div>
                )
            })}
        </div>
    )
}