import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Tesla">
            <Container>
                <Title>
                    Tesla Clone <Badge>2021</Badge>
                </Title>
                <P>
                    A simple frontend interface of Tesla Clone
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://tesla-clone-cfd0e.web.app/">
                        https://tesla-clone-cfd0e.web.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href="https://github.com/KoushikAD1234/react-tesla-clone">
                        https://github.com/KoushikAD1234/react-tesla-clone <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>ReactJS, Styled Components</span>
                    </ListItem>

                </List>
                <WorkImage src="/works/t1.png" alt="tesla"/>
                <WorkImage src="/works/t2.png" alt="tesla"/>
                <WorkImage src="/works/t3.png" alt="tesla"/>
            </Container>
        </Layout>
    )
}

export default Work;