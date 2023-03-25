import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        &::-webkit-scrollbar {
            width: 0.6rem;
            height: 0.5rem;
            background-color: ${props=>props.theme["backgroundScrollBar"]};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 3px;
            background: ${props=>props.theme["purple-600"]};
        }
        -webkit-font-smoothing: antialiased;
    }
`