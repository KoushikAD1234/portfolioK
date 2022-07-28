import {
  Wrap,
  WrapItem,
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  Link
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
// import {
//   IoLogoTwitter,
//   IoLogoInstagram,
//   IoLogoGithub,
//   IoLogoLinkedin,
// } from 'react-icons/io5'
import { StrictMode } from "react";
import ReactDOM from 'react-dom'

// ReactDOM.render(
//   <React.StrictMode>

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I'm Koushik, a Full stack developer
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Koushik Chakraborty
          </Heading>
          <p>Engineer | Developer | Musician</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEqWbBXuctUJQ/profile-displayphoto-shrink_800_800/0/1613061269955?e=1663804800&v=beta&t=t0KCREnpdXRm1Bw_k6H_1P_Pgytn6oU7rrpeRm-AjRA"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a freelancer and a full-stack developer and highly passionate for
          building digital products. I am a Competitive Programmer and love to
          solve real-life problem with code. While making any solution or while
          working on any project if any technology or tools comes in my path
          then I always learn those tools or technologies and implement them.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1P4_4TdB0KegkhB-5zEWbqVWeDTXOM3fV/view?usp=sharing">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>Mar 2021 - Present</BioYear>
          Subject Matter Expert @Chegg (DSA)
        </BioSection>
        <BioSection>
          <BioYear>Nov 2020 - Present</BioYear>
          Founder of "The Programmer's Cafe"
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2020-2024</BioYear>
            Heritage Institute of Technology (Electronics & Communication)
        </BioSection>
        <BioSection>
          <BioYear>2017-2019</BioYear>
          Kendriya Vidyalaya Sangathan
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <Paragraph>1. Finalist @CodeGladiator hackathon</Paragraph>
        <Paragraph>2. 2nd Runner up @HULT Prize HITK</Paragraph>
        <Paragraph>3. Problem setter at Geeks united</Paragraph>
        <Paragraph>4. Events Lead at CodeChef HITK Chapter</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>
          Programming, Problem Solving, Development, Singing, Music, Travelling
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Preferred Tech Stack
        </Heading>
        <Box my={4} display="flex">
          <Wrap spacing={4}>
            <Button colorScheme="orange">ReactJS</Button>
            <Button colorScheme="orange">NextJS</Button>
            <Button colorScheme="orange">NodeJS</Button>
            <Button colorScheme="orange">ExpressJS</Button>
            <Button colorScheme="orange">Tailwind CSS</Button>
            <Button colorScheme="orange">Solidity</Button>
            <Button colorScheme="orange">Chakra-UI</Button>
            <Button colorScheme="orange">Material-UI</Button>
          </Wrap>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media 
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/KoushikAD1234" target='_blank'>
            {/* <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
              >
                @KoushikAD
              </Button> */}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Koushik_ADC" target='_blank'>
            {/* <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Koushik_ADC
              </Button> */}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/koushik-chakraborty-bb20551b8/" target='_blank'>
            {/* <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Koushik_chakraborty
              </Button> */}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/koushik_chkrbrty/?hl=en" target='_blank'>
            {/* <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @koushik_chkrbrty
              </Button> */}
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  );
};

export default Page;

// </React.StrictMode>
// );
