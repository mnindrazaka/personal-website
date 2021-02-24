import Head from "next/head";
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>M. Nindra Zaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingX="56" paddingY="32">
        <Stack direction="row" spacing="12">
          <Image
            borderRadius="full"
            boxSize="150px"
            fallbackSrc="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            src="https://media-exp1.licdn.com/dms/image/C5603AQF_RgE0dAzCsw/profile-displayphoto-shrink_800_800/0/1591972651641?e=1619654400&v=beta&t=cdT0c9ntyOimTHYufrjwfrl8ReqDXX73U0tFJf46yN8"
            alt="M. Nindra Zaka"
          />
          <Stack>
            <Heading>M. Nindra Zaka</Heading>
            <Text>Frontend Engineer</Text>
          </Stack>
        </Stack>
      </Box>
      <Box bg="facebook.500" paddingX="56" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            Hi Everyone
          </Heading>
          <Heading size="xl" color="white" textAlign="center">
            I'm M. Nindra Zaka
          </Heading>
          <Text color="white" textAlign="center">
            Frontend development enthusiast that love well performance and
            tested code. Experienced in Javascript, Typescript, React, and other
            modern frontend concept. Love learning and teaching other developer
            in community to growth together
          </Text>
        </Stack>
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
                I love to learn and teach what i know in community. I contribute
                as meetup speaker, workshop mentor and facilitator. What i love
                about teaching is it can solidify what we know and deeping what
                we just learn by explain it to other people and get feedback. I
                also create learning roadmap that i use to teach about web
                development
              </Text>
            </Stack>
            <Link
              href="https://github.com/wrideveloper/miniclass-web/"
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              <Button inlineSize="auto" colorScheme="blue">
                See my teaching roadmap
              </Button>
            </Link>
          </div>
        </Stack>
      </Box>

      <Box bg="gray.800" paddingX="56" paddingY="16" textAlign="center">
        <Stack marginBottom="8">
          <Heading size="lg" color="white" textAlign="center">
            My Blog Posts
          </Heading>
          <Text color="white" textAlign="center">
            I write a blog that contains something that i just learn. So it can
            help me remember something that i just learn. Also, i can share it
            to other people so they can learn too or give me a feedback about
            what i just learned
          </Text>
        </Stack>
        <Link
          href="https://mnindrazaka.com/"
          target="_blank"
          _hover={{ textDecoration: "none" }}
        >
          <Button inlineSize="auto" colorScheme="blue">
            See my blog posts
          </Button>
        </Link>
      </Box>

      <Box paddingX="32" paddingY="16">
        <Stack>
          <Heading textAlign="center">My Recent Works</Heading>
          <Text textAlign="center">
            I implement what i learn by creating side project or development
            tools. Here is my recent works
          </Text>
        </Stack>

        <Divider marginY="8" />

        <SimpleGrid columns={4} spacing="8">
          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">Lentera</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">Social Media Clone</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">CRUDONE</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">useAsync</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">useFetch</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">useLocalStorageState</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">useDebouncedEffect</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>

          <Box borderWidth="thin" borderRadius="lg" padding="8">
            <Heading size="md">useToggleState</Heading>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>
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
            <IconButton
              borderColor="white"
              textColor="white"
              variant="outline"
              aria-label="gmail"
              icon={<FaEnvelope />}
            />

            <IconButton
              borderColor="white"
              textColor="white"
              variant="outline"
              aria-label="linkedin"
              icon={<FaLinkedin />}
            />

            <IconButton
              borderColor="white"
              textColor="white"
              variant="outline"
              aria-label="github"
              icon={<FaGithub />}
            />

            <IconButton
              borderColor="white"
              textColor="white"
              variant="outline"
              aria-label="twitter"
              icon={<FaTwitter />}
            />

            <IconButton
              borderColor="white"
              textColor="white"
              variant="outline"
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
