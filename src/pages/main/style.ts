import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: ${(props)=>props.theme['background']};
    padding: 5rem;
`

export const PostBox = styled.div`
    background-color: ${(props)=>props.theme['gray-900']}; 
    margin: 0 0 2rem;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.4);
`

export const PostLinkBox = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 700;
`

export const PostUserLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`

export const PostUserInfo = styled.div`

`