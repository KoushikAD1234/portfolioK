import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Twitter">
            <Container>
                <Title>
                    Twitter Clone <Badge>2021</Badge>
                </Title>
                <P>
                    Twitter clone where users can post stories and add media.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://twitter-clone-4d25d.web.app/">
                        https://twitter-clone-4d25d.web.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href="https://github.com/KoushikAD1234/twitter-clone/tree/master/twitter-clone">
                        https://github.com/KoushikAD1234/twitter-clone/tree/master/twitter-clone <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>ReactJS, Firebase, Material-UI </span>
                    </ListItem>
                </List>
                <WorkImage src="/works/tw1.png" alt="twitter"/>
                {/* <WorkImsage src="/works/tw2.png" alt="twitter"/> */}
            </Container>
        </Layout>
    )
}

export default Work;