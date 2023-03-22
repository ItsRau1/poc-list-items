import { DataProvider } from "./contexts/Context";
import { Router } from "./contexts/Router";

export function App() {

  return (
    <DataProvider>
      <Router />
    </DataProvider>
  )
}
