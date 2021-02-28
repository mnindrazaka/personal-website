import Head from "next/head";
import {
  Box,
  Button,
  ButtonProps,
  ChakraProvider,
  Divider,
  Heading,
  IconButton,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

type LinkButtonProps = ButtonProps & { href: string };
const LinkButton = ({ href, children, ...buttonProps }: LinkButtonProps) => {
  return (
    <Link href={href} _hover={{ textDecoration: "none" }} tabIndex={-1}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
};

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
              Frontend development enthusiast that loves well performance and
              tested code. Experienced in Javascript, Typescript, React, and
              other modern frontend concepts. Love learning and teaching other
              developers in the community to grow together
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Box bg="facebook.500" paddingX="56" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            Technology and Tools
          </Heading>
          <Text color="white" textAlign="center">
            I start my journey as frontend engineer 2 years ago. I've work on
            freelance project and join startup to develop product. Here is the
            list of technology, library, and tools that i used
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
          >
            <Heading size="md" textAlign="center">
              Automated Testing
            </Heading>
            <Text textAlign="center">
              Here is library and tools that i used to implementing automated
              testing on frontend
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold">Unit Testing</Text>
            <List>
              <ListItem>Jest</ListItem>
              <ListItem>React Testing Library</ListItem>
              <ListItem>Chrome Accessibility Tree</ListItem>
              <ListItem>Mock Service Worker</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold">End to end Testing</Text>
            <List>
              <ListItem>Cypress</ListItem>
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
            <Heading size="md" textAlign="center">
              Frontend Development
            </Heading>
            <Text textAlign="center">
              Here is library and tools that i often use to develop frontend
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold">Library and Framework</Text>
            <List>
              <ListItem>React</ListItem>
              <ListItem>Next.js</ListItem>
            </List>
            <Divider marginY="8" />

            <Text fontWeight="bold">Static Typing</Text>
            <List>
              <ListItem>Typescript</ListItem>
            </List>
            <Divider marginY="8" />

            <Text fontWeight="bold">Backend Integration</Text>
            <List>
              <ListItem>Apollo</ListItem>
              <ListItem>React Query</ListItem>
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
            <Heading size="md" textAlign="center">
              Frontend Performance
            </Heading>
            <Text textAlign="center">
              Here is library and tools that i used to profiling frontend
              performance
            </Text>
            <Divider marginY="8" />

            <Text fontWeight="bold">Profiling Tools</Text>
            <List>
              <ListItem>React Profiler</ListItem>
              <ListItem>Chrome DevTools Performance</ListItem>
              <ListItem>Light House</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold">Render Performance Optimization</Text>
            <List>
              <ListItem>Code Splitting</ListItem>
              <ListItem>Prefetching</ListItem>
              <ListItem>Caching Request</ListItem>
              <ListItem>Caching Request</ListItem>
            </List>

            <Divider marginY="8" />
            <Text fontWeight="bold">Load Performance Optimization</Text>
            <List>
              <ListItem>Code Splitting</ListItem>
              <ListItem>Prefetching</ListItem>
              <ListItem>Caching Request</ListItem>
              <ListItem>Caching Request</ListItem>
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
                not only helps others to grow, but also solidifying what I just
                learned and deepening my understanding. I create a learning
                roadmap that I use to teach about web development
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
          <Link
            href="https://lentera.netlify.app/courses/a1630b85-88a2-4b5d-81ef-84537263aba7/workshops/9858ac2b-1852-4b36-99e1-6f015b081629"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">Lentera</Heading>
              <Text>
                Online course platform that will give you a guided struggle to
                learn engineering skill faster and understand better
              </Text>
            </Box>
          </Link>

          <Link
            href="https://code-send.now.sh/"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">Code Send</Heading>
              <Text>Hot code update platform</Text>
            </Box>
          </Link>

          <Link
            href="http://wri.polinema.ac.id/"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">WRI Website</Heading>
              <Text>
                Community Profile Website of Workshop & Riset Informatika
              </Text>
            </Box>
          </Link>

          <Link
            href="https://www.npmjs.com/package/crudone"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">crudone</Heading>
              <Text>crud ? done ! react component for easy crud</Text>
            </Box>
          </Link>

          <Link
            href="https://github.com/wrideveloper/crew-monitoring"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">Crew Monitoring</Heading>
              <Text>Community Crew Monitoring</Text>
            </Box>
          </Link>

          <Link
            href="https://www.npmjs.com/package/react-async-handler"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">react-async-handler</Heading>
              <Text>React hook for handling asynchronous task</Text>
            </Box>
          </Link>

          <Link
            href="https://www.npmjs.com/package/react-debounce-effect"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">react-debounce-effect</Heading>
              <Text>React use effect hook but with debounce</Text>
            </Box>
          </Link>

          <Link
            href="https://www.npmjs.com/package/react-local-storage-state"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">react-local-storage-state</Heading>
              <Text>
                React hook for persisting React state to local storage
              </Text>
            </Box>
          </Link>

          <Link
            href="https://www.npmjs.com/package/react-switch-state"
            target="_blank"
            _hover={{ textDecoration: "none" }}
            borderRadius="lg"
          >
            <Box
              borderWidth="thin"
              borderRadius="lg"
              padding="8"
              width="100%"
              height="100%"
            >
              <Heading size="md">react-switch-state</Heading>
              <Text>React hook for switching state on and off</Text>
            </Box>
          </Link>
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
            <Link
              href="mailto:mnindrazaka@gmail.com"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              borderRadius="full"
            >
              <IconButton
                borderRadius="full"
                _hover={{ color: "black", backgroundColor: "white" }}
                borderColor="white"
                textColor="white"
                variant="outline"
                aria-label="gmail"
                icon={<FaEnvelope />}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mnindrazaka/"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              borderRadius="full"
            >
              <IconButton
                borderRadius="full"
                _hover={{ color: "black", backgroundColor: "white" }}
                borderColor="white"
                textColor="white"
                variant="outline"
                aria-label="linkedin"
                icon={<FaLinkedin />}
              />
            </Link>

            <Link
              href="https://github.com/mnindrazaka"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              borderRadius="full"
            >
              <IconButton
                borderRadius="full"
                _hover={{ color: "black", backgroundColor: "white" }}
                borderColor="white"
                textColor="white"
                variant="outline"
                aria-label="github"
                icon={<FaGithub />}
              />
            </Link>
            <Link
              href="https://twitter.com/mnindrazaka"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              borderRadius="full"
            >
              <IconButton
                borderRadius="full"
                _hover={{ color: "black", backgroundColor: "white" }}
                borderColor="white"
                textColor="white"
                variant="outline"
                aria-label="twitter"
                icon={<FaTwitter />}
              />
            </Link>

            <Link
              href="https://www.facebook.com/mnindrazaka/"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              borderRadius="full"
            >
              <IconButton
                borderRadius="full"
                _hover={{ color: "black", backgroundColor: "white" }}
                borderColor="white"
                textColor="white"
                variant="outline"
                aria-label="facebook"
                icon={<FaFacebook />}
              />
            </Link>
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
