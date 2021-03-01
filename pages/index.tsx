import Head from "next/head";
import {
  Box,
  Button,
  ButtonProps,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  IconButton,
  IconButtonProps,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaCode,
  FaCogs,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaTwitter,
} from "react-icons/fa";

type LinkButtonProps = ButtonProps & { href: string };
const LinkButton = ({ href, children, ...buttonProps }: LinkButtonProps) => (
  <Link href={href} _hover={{ textDecoration: "none" }} tabIndex={-1}>
    <Button {...buttonProps}>{children}</Button>
  </Link>
);

type SosialMediaButtonProps = IconButtonProps & { href: string };
const SocialMediaButton = ({
  href,
  ...iconButtonProps
}: SosialMediaButtonProps) => (
  <Link
    href={href}
    _hover={{ textDecoration: "none" }}
    borderRadius="full"
    tabIndex={-1}
  >
    <IconButton
      borderRadius="full"
      _hover={{ color: "black", backgroundColor: "white" }}
      borderColor="white"
      textColor="white"
      variant="outline"
      {...iconButtonProps}
    />
  </Link>
);

type ProjectCardProps = { title: string; description: string; href: string };
const ProjectCard = ({ title, description, href }: ProjectCardProps) => (
  <Link href={href} _hover={{ textDecoration: "none" }} borderRadius="lg">
    <Box
      borderWidth="thin"
      borderRadius="lg"
      padding="8"
      width="100%"
      height="100%"
    >
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Divider marginY="4" />
      <Text textAlign="center">{description}</Text>
    </Box>
  </Link>
);

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>M. Nindra Zaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingX="56" paddingY="24">
        <Stack direction="row" spacing="12">
          <Image
            borderRadius="full"
            boxSize="150px"
            fallbackSrc="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            src="https://media-exp1.licdn.com/dms/image/C5603AQF_RgE0dAzCsw/profile-displayphoto-shrink_800_800/0/1591972651641?e=1619654400&v=beta&t=cdT0c9ntyOimTHYufrjwfrl8ReqDXX73U0tFJf46yN8"
            alt="M. Nindra Zaka"
          />
          <Stack>
            <Heading size="xl">Hi Everyone</Heading>
            <Heading size="lg">
              It's me,{" "}
              <Box
                display="inline-block"
                backgroundColor="facebook.500"
                padding="2"
                color="white"
              >
                M. Nindra Zaka
              </Box>
            </Heading>
            <Text>
              Frontend engineering enthusiast that loves well performance and
              tested code. Experienced in Javascript, Typescript, React, and
              other modern frontend concepts. Love learning and teaching others
              to grow together
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Box bg="facebook.500" paddingX="56" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            My Frontend Engineering Journey
          </Heading>
          <Text color="white" textAlign="center">
            I start my journey as a frontend engineer in 2018. I start by
            deepening my javascript skill and doing some side projects. In 2019
            I take an internship in a startup company. Then I work on some
            freelance projects and get my first full-time job as a frontend
            engineer in 2020. Now, I'm excited to continue my journey by
            deepening my skill in automated testing and web performance skills.
            Here are some tools that I use for developing frontend
          </Text>
        </Stack>
        <SimpleGrid columns={3} marginTop="8" spacing="8">
          <Box
            backgroundColor="white"
            borderWidth="thin"
            borderRadius="lg"
            padding="8"
            width="100%"
            height="100%"
            textAlign="center"
          >
            <Flex justifyContent="center" marginBottom={4}>
              <FaCogs size={30} />
            </Flex>

            <Heading size="md" textAlign="center">
              Automated Testing
            </Heading>
            <Text textAlign="center">
              The reliability of the feature is important to make a quality
              product. So implementing automated tests is important to guarantee
              feature reliability. Here are some tools that I used to implement
              the automated test in the frontend
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold" textAlign="center">
              Unit Testing
            </Text>
            <List>
              <ListItem textAlign="center">Jest</ListItem>
              <ListItem textAlign="center">React Testing Library</ListItem>
              <ListItem textAlign="center">Chrome Accessibility Tree</ListItem>
              <ListItem textAlign="center">Mock Service Worker</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold" textAlign="center">
              End to end Testing
            </Text>
            <List>
              <ListItem textAlign="center">Cypress</ListItem>
            </List>
          </Box>
          <Box
            backgroundColor="white"
            borderWidth="thin"
            borderRadius="lg"
            padding="8"
            width="100%"
            height="100%"
          >
            <Flex justifyContent="center" marginBottom={4}>
              <FaCode size={30} />
            </Flex>
            <Heading size="md" textAlign="center">
              Frontend Development
            </Heading>
            <Text textAlign="center">
              Here is some library and tools that i use to develop frontend
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold" textAlign="center">
              Library and Framework
            </Text>
            <List>
              <ListItem textAlign="center">React</ListItem>
              <ListItem textAlign="center">Next.js</ListItem>
            </List>
            <Divider marginY="8" />

            <Text fontWeight="bold" textAlign="center">
              Static Typing
            </Text>
            <List>
              <ListItem textAlign="center">Typescript</ListItem>
            </List>
            <Divider marginY="8" />

            <Text fontWeight="bold" textAlign="center">
              Backend Integration
            </Text>
            <List>
              <ListItem textAlign="center">Apollo</ListItem>
              <ListItem textAlign="center">React Query</ListItem>
            </List>
          </Box>

          <Box
            backgroundColor="white"
            borderWidth="thin"
            borderRadius="lg"
            padding="8"
            width="100%"
            height="100%"
          >
            <Flex justifyContent="center" marginBottom={4}>
              <FaRocket size={30} />
            </Flex>
            <Heading size="md" textAlign="center">
              Frontend Performance
            </Heading>
            <Text textAlign="center">
              Performance is the art of avoiding work, it is so fun to find
              unnecessary work and optimize it. Here is some tools and method
              that i learn to profile and optimize frontend performance
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold" textAlign="center">
              Profiling Tools
            </Text>
            <List>
              <ListItem textAlign="center">React Profiler</ListItem>
              <ListItem textAlign="center">
                Chrome DevTools Performance
              </ListItem>
              <ListItem textAlign="center">Light House</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold" textAlign="center">
              Rendering Performance Optimization
            </Text>
            <List>
              <ListItem textAlign="center">Memoize Heavy Calculation</ListItem>
              <ListItem textAlign="center">Memoize Component Render</ListItem>
              <ListItem textAlign="center">Optimize Context Value</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold" textAlign="center">
              Loading Performance Optimization
            </Text>
            <List>
              <ListItem textAlign="center">Code Splitting</ListItem>
              <ListItem textAlign="center">Caching Data From Backend</ListItem>
              <ListItem textAlign="center">Preload Assets</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>

      <Box paddingX="56" paddingY="16">
        <Stack direction="row" spacing="16">
          <Image
            borderRadius="lg"
            boxSize="xs"
            src="https://scontent.fmlg1-1.fna.fbcdn.net/v/t1.0-9/89245852_2604227906516348_8843879661566951424_o.jpg?_nc_cat=100&ccb=3&_nc_sid=b9115d&_nc_eui2=AeGHm9yI8F1fmmI9BVPZ2gPPFHQn4M3Yh6gUdCfgzdiHqJ-xr_0fPmNOfNWnxM1QOtb83pCW76KGLdoBOnQC1iil&_nc_ohc=vs2enyq1DYAAX_eOc97&_nc_ht=scontent.fmlg1-1.fna&oh=c1bf137879959170741d9281fc872354&oe=605BDC61"
            alt="Learning and Teaching"
          />
          <div>
            <Stack marginBottom="8">
              <Heading size="lg">Learning and Teaching</Heading>
              <Text>
                I love to learn and teach what I know in the community. I
                contribute as a meetup speaker, workshop mentor, and
                facilitator. The amazing thing that I love about teaching is it
                not only helps others to grow but also solidifying what I just
                learned and deepening my understanding. I create a roadmap that
                I use to teach about web development
              </Text>
            </Stack>
            <LinkButton
              href="https://github.com/wrideveloper/miniclass-web/"
              colorScheme="blue"
            >
              See teaching roadmap
            </LinkButton>
          </div>
        </Stack>
      </Box>

      <Box bg="gray.800" paddingX="56" paddingY="16" textAlign="center">
        <Stack marginBottom="8">
          <Heading size="lg" color="white" textAlign="center">
            My Blog Posts
          </Heading>
          <Text color="white" textAlign="center">
            Every day we learn new things and keep improving. But, it is hard to
            Remember everything that we learned. So I write blog posts that
            explain what I just learn. So it will help me remember it in the
            future. Also, I can share it with other people so they can learn too
            and give me a feedback
          </Text>
        </Stack>
        <LinkButton href="https://mnindrazaka.com/" colorScheme="blue">
          See my blog posts
        </LinkButton>
      </Box>

      <Box paddingX="56" paddingY="16">
        <Stack>
          <Heading size="lg" textAlign="center">
            My Recent Works
          </Heading>
          <Text textAlign="center">
            I implement what I learn by creating a side project. It will help me
            prove what I learn. When developing some projects, I found myself
            often implement the same logic again and again, so I separate it and
            make a library from it. Here are my recent works
          </Text>
        </Stack>

        <Divider marginY="8" />

        <SimpleGrid columns={3} spacing="8">
          <ProjectCard
            title="Lentera"
            description="Online course platform that will give you a guided struggle to
                learn engineering skill faster and understand better"
            href="https://lentera.netlify.app/courses/a1630b85-88a2-4b5d-81ef-84537263aba7/workshops/9858ac2b-1852-4b36-99e1-6f015b081629"
          />
          <ProjectCard
            title="Code Send"
            description="Hot code update platform"
            href="https://code-send.now.sh/"
          />
          <ProjectCard
            title="WRI Website"
            description="Community Profile Website of Workshop & Riset Informatika"
            href="http://wri.polinema.ac.id/"
          />
          <ProjectCard
            title="crudone"
            description="crud ? done ! react component for easy crud"
            href="https://www.npmjs.com/package/crudone"
          />
          <ProjectCard
            title="Crew Monitoring"
            description="Community Crew Monitoring"
            href="https://github.com/wrideveloper/crew-monitoring"
          />
          <ProjectCard
            title="react-async-handler"
            description="React hook for handling asynchronous task"
            href="https://www.npmjs.com/package/react-async-handler"
          />
          <ProjectCard
            title="react-async-handler"
            description="React hook for handling asynchronous task"
            href="https://www.npmjs.com/package/react-async-handler"
          />
          <ProjectCard
            title="react-local-storage-state"
            description="React hook for persisting React state to local storage"
            href="https://www.npmjs.com/package/react-local-storage-state"
          />
          <ProjectCard
            title="react-switch-state"
            description="React hook for switching state on and off"
            href="https://www.npmjs.com/package/react-switch-state"
          />
        </SimpleGrid>
      </Box>

      <Box bg="gray.800" paddingX="56" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            That's it
          </Heading>
          <Heading size="md" color="white" textAlign="center" marginBottom="8">
            Want to know more ? Lets have a chat
          </Heading>
          <Stack direction="row" spacing={8} justifyContent="center">
            <SocialMediaButton
              href="mailto:mnindrazaka@gmail.com"
              aria-label="gmail"
              icon={<FaEnvelope />}
            />
            <SocialMediaButton
              href="https://www.linkedin.com/in/mnindrazaka/"
              aria-label="linkedin"
              icon={<FaLinkedin />}
            />
            <SocialMediaButton
              href="https://github.com/mnindrazaka"
              aria-label="github"
              icon={<FaGithub />}
            />
            <SocialMediaButton
              href="https://twitter.com/mnindrazaka"
              aria-label="twitter"
              icon={<FaTwitter />}
            />
            <SocialMediaButton
              href="https://www.facebook.com/mnindrazaka/"
              aria-label="facebook"
              icon={<FaFacebook />}
            />
          </Stack>
        </Stack>
      </Box>
      <Box bg="black" paddingY="8">
        <Text color="white" textAlign="center">
          Copyright &copy; 2021 M. Nindra Zaka
        </Text>
      </Box>
    </ChakraProvider>
  );
}
