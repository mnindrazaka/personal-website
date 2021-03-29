import Head from "next/head";
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ImageProps,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaChalkboardTeacher,
  FaCode,
  FaCogs,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobeAmericas,
  FaLinkedin,
  FaRocket,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import SectionContainer from "./SectionContainer";
import SkillCard, { SkillCardProps } from "./SkillCard";
import LinkButton from "./LinkButton";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import ProjectCardHorizontal, {
  ProjectCardHorizontalProps,
} from "./ProjectCardHorizontal";
import SocialMediaButton, { SocialMediaButtonProps } from "./SocialMediaButton";
import PostCard, { PostCardProps } from "./PostCard";

const skills: SkillCardProps[] = [
  {
    title: "Frontend Development",
    description:
      "Frontend development is fun because you can translate the design to be a reality.",
    icon: <FaCode size={24} />,
    tools: [
      {
        category: "Development Tools",
        items: [
          {
            title: "React.js",
            description: (
              <>
                My primary development tool is React. I start using React since
                2017. It uses one-way data binding to make state changes more
                predictable. It also uses JSX instead of template syntax, so I
                can use my javascript knowledge to build the logic and don’t
                need to learn the template syntax
              </>
            ),
          },
          {
            title: "Next.js",
            description: (
              <>
                React is a great library for client-side rendering. But
                sometimes we need server-side rendering to improve the initial
                loading performance of the website and enable SEO. Next.js helps
                me to implement server-side rendering using React.
              </>
            ),
          },
          {
            title: "Typescript",
            description: (
              <>
                Getting runtime error is scary. So I use typescript for static
                typing to construct data structure in my project and help
                catching typing problem before runtime
              </>
            ),
          },
        ],
      },
      {
        category: "Integration",
        items: [
          {
            title: "React Query",
            description: (
              <>
                I use React Query for storing and mutating server state. Server
                state must be handled differently because it can be out of sync
                with our application. React Query help me to tackle that problem
                by using SWR (Stale While Revalidate) method. Also, It support
                for REST API and GraphQL
              </>
            ),
          },
          {
            title: "GraphQL Code Generator",
            description: (
              <>
                I love this tool because it can generate typescript types that
                reflect the data structure on the GraphQL server. It also can
                generate custom hooks that wrap React Query with suitable
                typescript type
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Automated Testing",
    description:
      "Reliability is important to make a quality product. Implementing automated tests is important to guarantee reliability",
    icon: <FaCogs size={24} />,
    tools: [
      {
        category: "Unit Testing",
        items: [
          {
            title: "Jest",
            description: (
              <>
                Jest helps me to run the test that I create and provide an
                overview of the test coverage. It also available by default in
                Create React App
              </>
            ),
          },
          {
            title: "React Testing Library",
            description: (
              <>
                I choose React Testing Library to test my component. The thing
                that I love about this tool is it encourages us to use the
                accessibility tree to access the component and trigger an event
                to test state changes. So it can mimic how the user will use our
                component
              </>
            ),
          },
          {
            title: "Mock Service Worker",
            description: (
              <>
                I use MSW if I need to test a component that makes a request to
                the backend. MSW can intercept the request and giving a mocked
                response that suits my test case. The mocked response can also
                be used when I develop a frontend but the backend is not ready
                yet
              </>
            ),
          },
        ],
      },
      {
        category: "End to End Testing",
        items: [
          {
            title: "Cypress",
            description: (
              <>
                The end to end test is good for testing the integration between
                the frontend and backend. I use cypress for the end to end
                testing, it help me to simulate the app and catch the
                integration problem.
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Frontend Performance",
    description:
      "Performance is the art of avoiding work, it is so fun to find unnecessary work and optimize it.",
    icon: <FaRocket size={24} />,
    tools: [
      {
        category: "Profiling",
        items: [
          {
            title: "React Profiler",
            description: (
              <>
                React profiler helps me for finding the component that being
                rerendered too much, So later I can fix that component by
                memoize the component render
              </>
            ),
          },
          {
            title: "Chrome DevTools",
            description: (
              <>
                When the FPS of the website drops, I use this tool to find the
                problem, it helps me to find the task that takes too long to
                execute. It also can profile the loading performance of the
                website, giving an overview of how the sequence of assets is
                loaded, and showing when the first contentful paint happens
              </>
            ),
          },
        ],
      },
      {
        category: "Optimization",
        items: [
          {
            title: "Code Splitting",
            description: (
              <>
                The bundle of the app can get bigger as the project grows, so we
                can split the project module into smaller parts. So the browser
                just load the code that needed on a specific page
              </>
            ),
          },
          {
            title: "Preload Assets",
            description: (
              <>
                When there is an asset that will be needed soon in the future, i
                can preload it, so when the browser needs it, it will take a
                little time to load the asset from the cache
              </>
            ),
          },
          {
            title: "Memoization",
            description: (
              <>
                if there is an expensive calculation in a component, I will
                memoize that calculation to improve the execution time.
                Memoization can also be used if there is a component that
                rerendered unnecessarily
              </>
            ),
          },
          {
            title: "Split Context Provider",
            description: (
              <>
                The states in a provider can be so many as the project grows.
                One update in a provider can trigger rerender in many
                components. So, we can split the provider into smaller parts. I
                usually split the provider by domain. if that's not enough to
                solve the problem, I will split it again into setter and getter
                provider
              </>
            ),
          },
          {
            title: "Windowing",
            description: (
              <>
                By using windowing, I can optimize the render performance of a
                large list by just rendering the viewable item to the user. This
                help to optimize the feature that needs to render a huge amount
                of data, for example in the infinite scrolling feature
              </>
            ),
          },
        ],
      },
    ],
  },
];

const wriProjects: ProjectCardHorizontalProps[] = [
  {
    title: "Miniclass Web",
    description: `I teach about Node.js and React on workshop riset
    informatika to help first year student deepening web
    development skill that they get from lectures. Here is
    my learning roadmap that i use for teaching`,
    href: "https://github.com/wrideveloper/miniclass-web/",
    icon: <FaChalkboardTeacher size="24" />,
  },
  {
    title: "WRI Web Profile",
    description: `Back in 2016, Workshop Riset Informatika is a new community in state polytechnic of malang, So i create a landing page to introduce the community to the other community, so they can collabs together`,
    href: "http://wri.polinema.ac.id/",
    icon: <FaGlobeAmericas size="24" />,
  },
  {
    title: "Crew Monitoring",
    description: `Day by day, the crew of workshop & riset informatika are increasing, So i create a platform to list the crew of the community. it can also help me to make attendance to the bootcamp participants`,
    href: "https://github.com/wrideveloper/crew-monitoring",
    icon: <FaUsers size="24" />,
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "Crudone",
    description: "crud ? done ! React component for easy crud",
    href: "https://www.npmjs.com/package/crudone",
  },
  {
    title: "React Async Handler",
    description: "React hook for handling asynchronous task",
    href: "https://www.npmjs.com/package/react-async-handler",
  },
  {
    title: "React Debounce Effect",
    description: "React use effect hook but with debounce",
    href: "https://www.npmjs.com/package/react-debounce-effect",
  },
  {
    title: "React Local Storage State",
    description: "React hook for persisting React state to local storage",
    href: "https://www.npmjs.com/package/react-local-storage-state",
  },
  {
    title: "React Switch State",
    description: "React hook for switching state on and off",
    href: "https://www.npmjs.com/package/react-switch-state",
  },
];

const socialMedias: SocialMediaButtonProps[] = [
  {
    href: "mailto:mnindrazaka@gmail.com",
    "aria-label": "gmail",
    icon: <FaEnvelope />,
  },
  {
    href: "https://www.linkedin.com/in/mnindrazaka/",
    "aria-label": "linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/mnindrazaka",
    "aria-label": "github",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/mnindrazaka",
    "aria-label": "twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.facebook.com/mnindrazaka/",
    "aria-label": "facebook",
    icon: <FaFacebook />,
  },
];

const posts: PostCardProps[] = [
  {
    title: "How React.createElement() works under the hood",
    description:
      "After I learn how to develop a frontend using React in Epic React, I want to be able to contribute to React. So I started taking the first steps to be able to contribute, which was understanding the code.",
    href:
      "https://mnindrazaka.com/how-react-create-element-works-under-the-hood/",
    imageUrl:
      "https://mnindrazaka.com/images/post/how-react-create-element-works-under-the-hood.jpeg",
  },
  {
    title: "Why Redux Need Immutability",
    description:
      "When we working on a redux reducer, we need to make sure that we don’t mutate the previous state object.",
    href: "https://mnindrazaka.com/why-redux-need-immutability/",
    imageUrl:
      "https://mnindrazaka.com/images/post/why-reducer-need-immutability.jpeg",
  },
  {
    title: "Optimize Large List Using Windowing",
    description:
      "If we want to render a large number of items, for example, 10.000 items, it will take a little time before the items show in the browser. Try to hit the show button below and notice that there is a delay before the items show",
    href: "https://mnindrazaka.com/optimize-large-list-using-windowing/",
    imageUrl:
      "https://mnindrazaka.com/images/post/optimize-large-list-using-windowing.jpeg",
  },
  {
    title: "Persisting React State to Local Storage",
    description:
      "Last week, I develop a feature that needs to persist state into local storage. Here I want to share with you how I do it. To simplify my explanation, I will use the button counter component for example.",
    href: "https://mnindrazaka.com/persisting-react-state-to-local-storage/",
    imageUrl:
      "https://mnindrazaka.com/images/post/persisting-react-state-to-local-storage.jpeg",
  },
  {
    title: "Why We Can’t Use If Statement In JSX",
    description:
      "When I first started to learn React, i have a case to display an element in JSX based on condition. I started to think “Ok, i want to display this element based on condition, so i am gonna use if statement”. So, my component look like this",
    href: "https://mnindrazaka.com/why-we-cant-use-if-statement-in-jsx/",
    imageUrl:
      "https://mnindrazaka.com/images/post/why-we-cant-use-if-statement-in-jsx.jpg",
  },
  {
    title: "How to Enter JSX World Smoothly",
    description:
      "One problem that has to be faced by the new engineer when learning about React for the first time is understanding what is JSX and why we need it. When someone asks me to teach them about react, I always hard to explain JSX",
    href: "https://mnindrazaka.com/how-to-enter-jsx-world-smoothly/",
    imageUrl:
      "https://mnindrazaka.com/images/post/how-to-enter-jsx-world-smoothly.jpg",
  },
];

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>M. Nindra Zaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionContainer paddingY="24">
        <Grid
          justifyItems={{ base: "center", lg: "flex-start" }}
          templateColumns={{ base: "1fr", lg: "1.5fr 2fr 1fr" }}
          textAlign={{ base: "center", lg: "left" }}
          gap="8"
        >
          <Image
            borderWidth="medium"
            borderColor="gray.800"
            borderStyle="solid"
            borderRadius="full"
            boxSize="200px"
            fallbackSrc="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            src="https://media-exp1.licdn.com/dms/image/C5603AQF_RgE0dAzCsw/profile-displayphoto-shrink_800_800/0/1591972651641?e=1619654400&v=beta&t=cdT0c9ntyOimTHYufrjwfrl8ReqDXX73U0tFJf46yN8"
            alt="M. Nindra Zaka"
          />
          <Stack textAlign={{ base: "center", lg: "left" }}>
            <Heading size="xl">Hi Everyone</Heading>
            <Heading size="lg">
              It's me,{" "}
              <Box
                display="inline-block"
                backgroundColor="purple.600"
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
          <GridItem>
            <Heading size="md">Find me on</Heading>
            <Divider marginY="4" />
            <Stack direction="row">
              {socialMedias.map((socialMedia) => (
                <SocialMediaButton
                  {...socialMedia}
                  mode="light"
                  key={socialMedia["aria-label"]}
                />
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </SectionContainer>

      <SectionContainer bg="purple.600" paddingBottom="32" paddingTop="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            My Frontend Engineering Journey
          </Heading>
          <Text color="white" textAlign="center">
            I start my journey as a frontend engineer in 2017. I start by
            deepening my javascript skill and doing some side projects. In 2019
            I take an internship in a startup company. Then I work on some
            freelance projects and get my first full-time job as a frontend
            engineer in 2020. Now, I'm excited to continue my journey by
            deepening my skill in automated testing and web performance skills.
            Here are some tools that I use for developing frontend
          </Text>
        </Stack>
      </SectionContainer>

      <SectionContainer marginTop="-32">
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(3, 1fr)",
          }}
          marginTop="8"
          gap="4"
        >
          {skills.map((skill) => (
            <SkillCard {...skill} key={skill.title} />
          ))}
        </Grid>
      </SectionContainer>

      <SectionContainer paddingY="24">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1.5fr" }} columnGap="8">
          <Grid templateColumns="repeat(2, 1fr)" gap="2">
            <GridItem
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              colSpan={2}
              bgImage="url('https://lh3.googleusercontent.com/pw/ACtC-3femVHb8s_m0chY-bJA9zxOosSdw0mlNB1vlj86bb5gz9WASCgJAiakA7xmGDZOP7XugkA1-fPrmXPzQ6pHvZX0O1mmCl1HdCy6_fc5oqHwtmYtn4yZCGHg7Gbrl3KtoJRFHW6sXVcf6KtZwKYmiX5-=w2190-h1642-no?authuser=0')"
              bgSize="cover"
              bgPosition="right"
            ></GridItem>
            <GridItem
              bgImage="url('https://i.ibb.co/k6shGS1/afff1c2a-02ab-48d9-821c-8f94dbc734c5.jpg')"
              bgPosition="center"
              bgSize="cover"
              borderBottomLeftRadius="lg"
            ></GridItem>
            <GridItem
              bgImage="url('https://i.ibb.co/X2t4kpw/ed3b79ff-0e48-48fd-9a83-ebf91edb4253.jpg')"
              bgSize="cover"
              bgPosition="left"
              borderBottomRightRadius="lg"
            ></GridItem>
          </Grid>
          <Stack spacing="8" textAlign={{ base: "center", lg: "left" }}>
            <Heading size="xl">Learning and Teaching</Heading>
            <Text>
              I love to learn and teach what I know in the community. The
              amazing thing that I love about teaching is it not only helps
              others to grow but also solidifying what I just learned and
              deepening my understanding. I mostly teach about web development
              in workshop riset informatika, the IT community at State
              Polytechnic of Malang. Here is some contribution that I make in
              workshop riset informatika
            </Text>

            <Grid templateColumns="repeat(1, 1fr)" gap={8}>
              {wriProjects.map((project) => (
                <ProjectCardHorizontal key={project.title} {...project} />
              ))}
            </Grid>
          </Stack>
        </Grid>
      </SectionContainer>

      <SectionContainer paddingY="24" bg="gray.800" color="white">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          columnGap="16"
          alignItems="center"
        >
          <Stack spacing="8" textAlign={{ base: "center", lg: "left" }}>
            <Stack spacing="4">
              <Heading size="xl">Lentera</Heading>
              <Heading size="md" fontWeight="normal">
                Learn Coding Skill Faster and Understand Better
              </Heading>
            </Stack>
            <Divider />
            <Text>
              When I teach, I give a brief explanation of the topic, then I give
              a problem related to that topic. After the students struggle with
              the problem, I will show them how to solve it. I avoid giving the
              solution in the beginning. I want them to struggle to find the
              solution first. Struggling will help them to understand the
              solution that I will give later. I develop a learning platform
              called Lentera to help me teaching with that kind of experience.
            </Text>

            <LinkButton
              href="https://lentera.netlify.app/courses/a1630b85-88a2-4b5d-81ef-84537263aba7/workshops/9858ac2b-1852-4b36-99e1-6f015b081629"
              colorScheme="purple"
            >
              See Lentera
            </LinkButton>
          </Stack>

          <Image
            display={{ base: "none", lg: "block" }}
            fallbackSrc="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            src={require("./professor.svg")}
            alt="teaching"
          />
        </Grid>
      </SectionContainer>

      <SectionContainer paddingY="16">
        <Stack>
          <Heading size="lg" textAlign="center">
            Tools and Library
          </Heading>
          <Text textAlign="center">
            When developing some projects, I found myself often implement the
            same logic again and again, so I separate it and make a library from
            it.
          </Text>
        </Stack>

        <Divider marginY="8" />

        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
          gap={8}
          justifyContent="center"
        >
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </Grid>
      </SectionContainer>

      <SectionContainer
        bg="gray.800"
        paddingTop="16"
        paddingBottom="32"
        textAlign="center"
      >
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
        <LinkButton href="https://mnindrazaka.com/" colorScheme="purple">
          See all blog posts
        </LinkButton>
      </SectionContainer>

      <SectionContainer marginTop="-32" paddingBottom="16">
        <SimpleGrid columns={{ base: 1, lg: 3 }} marginTop="8" spacing="8">
          {posts.map((post) => (
            <PostCard {...post} key={post.title} />
          ))}
        </SimpleGrid>
      </SectionContainer>

      <SectionContainer bg="gray.800" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            That's it
          </Heading>
          <Heading size="md" color="white" textAlign="center" marginBottom="8">
            Want to know more ? Lets have a chat
          </Heading>
          <Stack
            direction="row"
            spacing={{ base: 4, lg: 8 }}
            justifyContent="center"
          >
            {socialMedias.map((socialMedia) => (
              <SocialMediaButton
                {...socialMedia}
                mode="dark"
                key={socialMedia["aria-label"]}
              />
            ))}
          </Stack>
        </Stack>
      </SectionContainer>

      <SectionContainer bg="black" paddingY="8">
        <Text color="white" textAlign="center">
          Copyright &copy; 2021 M. Nindra Zaka
        </Text>
      </SectionContainer>
    </ChakraProvider>
  );
}
