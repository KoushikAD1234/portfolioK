import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import messenger from "../public/messenger.png";
import netflix1 from "../public/netflix1.jpg";
import tesla from "../public/tesla.jpg";
import twitter from "../public/twitter.jpg";

//import thumbail

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Messenger" title="Messenger" thumbnail={messenger}>
            A One-to-One Chatting Aplication where we can chat with many people
            at the same time without any limit
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Netflix"
            title="Netflix Clone"
            thumbnail={netflix1}
          >
            Clone of Netflix Streaming App where people can see the trailer of
            movie.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="Tesla"
              title="Tesla Clone"
              thumbnail={tesla}
            >
              Frontend Interface of Tesla Clone
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Twitter"
              title="Twitter Clone"
              thumbnail={twitter}
            >
              Frontend Interface of Twitter Clone
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Works;
