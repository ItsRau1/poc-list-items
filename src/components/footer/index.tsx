import { EnvelopeSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Contacts, Container } from "./style";

export function Footer(){
    return(
        <Container>
            <Contacts>
                <GithubLogo size={16} />
            </Contacts>
            <Contacts>
                <LinkedinLogo size={16} />
            </Contacts>
            <Contacts>
                <WhatsappLogo size={16} />
            </Contacts>
            <Contacts>
                <EnvelopeSimple size={16} />
            </Contacts>
        </Container>
    )
}