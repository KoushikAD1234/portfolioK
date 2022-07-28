import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Messenger">
            <Container>
                <Title>
                    Messenger <Badge>2022</Badge>
                </Title>
                <P>
                    Real time chat application where group of users can interact among them.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://facebook-messenger-clone-26485.web.app/">
                        https://facebook-messenger-clone-26485.web.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href="https://github.com/KoushikAD1234/realtime-chat-app-react/tree/master/messenger-clone">
                        https://github.com/KoushikAD1234/realtime-chat-app-react/tree/master/messenger-clone <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>ReactJS, Firebase </span>
                    </ListItem>
                </List>
                <WorkImage src="/works/m1.png" alt="messenger"/>
                <WorkImage src="/works/m2.png" alt="messenger"/>
            </Container>
        </Layout>
    )
}

export default Work;