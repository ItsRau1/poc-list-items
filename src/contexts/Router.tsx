// Utils
import { 
    Route, 
    Routes,
} from "react-router-dom";

// Layout
import { 
    MainLayout,
} from "../layouts/MainLayout'";

// Pages
import { 
    Main,
} from "../pages/main";

import { 
    Post,
} from "../pages/post";

import { 
    User,
} from "../pages/user";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Main />}/>
                <Route path="user/:id" element={<User />} />
                <Route path="post/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}