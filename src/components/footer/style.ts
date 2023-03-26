import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    background-color: ${props=> props.theme["background-footer"]};
    padding: 0.1rem 0;
`

export const Contacts = styled(Link)`
    padding: 0.1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    max-width: fit-content;
    color: ${props => props.theme["gray-100"]};
    background-color: ${props=> props.theme["purple-1000"]};
    transition: box-shadow 0.3s, color 0.3s;

    &:hover{
        box-shadow: 0 0 10px 1px ${props=>props.theme["purple-300"]};
        color: ${props => props.theme["purple-300"]};
        cursor: pointer;
    }

`