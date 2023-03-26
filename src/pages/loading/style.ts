import styled from "styled-components";

export const LoadingContainer = styled.div`
height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.theme["background"]};
    cursor: wait;
    color: ${props=>props.theme["gray-100"]};
`