import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from '../../components/layouts/article'
// import n1 from '../../public/n1.png'

const Work = () => {
    return(
        <Layout title="Netflix Clone">
            <Container>
                <Title>
                    Netflix Clone <Badge>2022</Badge>
                </Title>
                <P>
                    Netflix clone for streaming Movies, Webseries, etc. In this Clone, we can watch the trailer of movies.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://netflix-clone-bed81.web.app/">
                        https://netflix-clone-bed81.web.app/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href="https://github.com/KoushikAD1234/react-Netflix-clone/tree/master">
                        https://github.com/KoushikAD1234/react-Netflix-clone/tree/master <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>ReactJS, TMDB API Key, Material-UI, Firebase </span>
                    </ListItem>
                </List>

                <WorkImage src="/works/n1.png" alt="Netflix"/>
                <WorkImage src="/works/n2.png" alt="Netflix"/>
                <WorkImage src="/works/n3.png" alt="Netflix"/>
                
            </Container>
        </Layout>
    )
}

export default Work;