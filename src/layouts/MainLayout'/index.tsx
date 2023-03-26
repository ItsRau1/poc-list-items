// Components
import { 
    Outlet,
} from "react-router-dom";

import { 
    Footer,
} from "../../components/footer";

import { 
    Container,
} from "./style";

export function MainLayout(){
    return (
        <Container>
            <Outlet />
            <Footer />
        </Container>
    )
}