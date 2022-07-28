import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import  dsa  from "../public/dsa.jpg";
import agri from "../public/agri.jpg"
import { DstAlphaFactor } from "three";

// import image files

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        My Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
                title="How to improve DSA Problem Solving ?"
                thumbnail={dsa}
                href="https://medium.com/@koushikjio1234/how-to-improve-dsa-problem-solving-d8dd1f28dca7"
            />
          <GridItem
                title="How Blockchain can help Indian Farmers ?"
                thumbnail={agri}
                href="https://medium.com/@koushikjio1234/how-blockchain-can-be-a-friend-of-indian-farmers-or-how-it-can-help-to-improve-indian-agricultural-2ce920199a04"
            />

        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts;
