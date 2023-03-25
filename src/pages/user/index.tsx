// Utils
import { 
    useContext, 
    useEffect,
} from "react"

import { 
    DataContext 
} from "../../contexts/Context"

import { 
    useParams 
} from "react-router"

// Types
import { 
    Params 
} from "../../@types/types"

// Components
import { 
    Container, 
    ProfileBox, 
    ProfileName, 
    ProfileUserInfoAddressBox, 
    ProfileUserInfoBox, 
    ProfileUserInfoContainer, 
    ProfileUserInfos, 
    ProfileUserInfosAddress, 
    ProfileUserName, 
    ProfileUserNamesBox, 
    ProfileUserWebsite 
} from "./style"

// Icons
import { 
    Buildings, 
    EnvelopeSimple, 
    Globe, 
    House, 
    Phone, 
    UserCircle 
} from "@phosphor-icons/react"

export function User(){

    const { GetUser, user, isLoading } = useContext(DataContext)
    const { id } = useParams<Params>()

    useEffect(
        ()=>{
            GetUser(id)
        }
    ,[id])

    return(
        <Container>
            { isLoading ?
                <h1> Carregando </h1>
            :
                <ProfileBox>
                    <ProfileUserNamesBox>
                        <UserCircle size={180}/>
                        <ProfileName>
                            {user.name} 
                        </ProfileName>
                        <ProfileUserName>
                            ({user.username})
                        </ProfileUserName>
                    </ProfileUserNamesBox>
                    <ProfileUserInfoContainer>
                        <ProfileUserInfoAddressBox>
                            <House size={24} />
                            <ProfileUserInfosAddress>
                                {user.address.city}
                                {", "+user.address.street}
                                {", "+user.address.suite}
                            </ProfileUserInfosAddress>
                        </ProfileUserInfoAddressBox>
                        <ProfileUserInfoBox>
                            <Buildings size={24} />
                            <ProfileUserInfos>
                                {user.company.name}
                            </ProfileUserInfos>
                        </ProfileUserInfoBox>
                        <ProfileUserInfoBox>
                            <EnvelopeSimple size={24} />
                            <ProfileUserInfos>
                                {user.email}
                            </ProfileUserInfos>
                        </ProfileUserInfoBox>
                        <ProfileUserInfoBox>
                            <Phone size={24} />
                            <ProfileUserInfos>
                                {user.phone}
                            </ProfileUserInfos>
                        </ProfileUserInfoBox>
                        <ProfileUserInfoBox>
                            <Globe size={24} />
                            <ProfileUserWebsite href={"www."+user.website}>
                                {user.website}
                            </ProfileUserWebsite>
                        </ProfileUserInfoBox>
                    </ProfileUserInfoContainer>
                </ProfileBox>
            
        }
        </Container>
    )
}