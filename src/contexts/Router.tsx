import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout'";
import { Main } from "../pages/main";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Main />}/>
            </Route>
        </Routes>
    )
}