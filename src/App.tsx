import { ThemeProvider } from "styled-components";
import { DataProvider } from "./contexts/Context";
import { Router } from "./contexts/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { DefaultTheme } from "./styles/themes/DefaultTheme";

export function App() {

  return (
    <DataProvider>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </DataProvider>
  )
}
