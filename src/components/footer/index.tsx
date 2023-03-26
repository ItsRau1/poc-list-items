// Icons
import { 
    EnvelopeSimple, 
    GithubLogo, 
    LinkedinLogo, 
    WhatsappLogo,
} from "@phosphor-icons/react";

// Components
import { 
    Contacts, 
    Container,
} from "./style";

export function Footer(){
    return(
        <Container>
            <Contacts to="https://github.com/ItsRau1" target="_blank">
                <GithubLogo size={16} />
            </Contacts>
            <Contacts to="https://www.linkedin.com/in/ruan-dias-611887238/" target="_blank">
                <LinkedinLogo size={16} />
            </Contacts>
            <Contacts to="https://wa.me/+5511999122243" target="_blank">
                <WhatsappLogo size={16} />
            </Contacts>
            <Contacts to="mailto:ruan.dias77@outlook.com" target="_blank">
                <EnvelopeSimple size={16} />
            </Contacts>
        </Container>
    )
}