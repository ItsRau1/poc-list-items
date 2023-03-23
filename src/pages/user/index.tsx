import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Params } from "../../@types/types"
import { DataContext } from "../../contexts/Context"

export function User(){

    const { GetUser, user } = useContext(DataContext)
    const { id } = useParams<Params>()
    

    useEffect(
        ()=>{
            GetUser(id)
        }
    ,[id])

    return(
        <div>
            <h1>
                {user.name}
            </h1>
        </div>
    )
}