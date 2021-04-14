import React from "react";
import Head from "next/head";
import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import PostCard, { PostCardProps } from "./PostCard";
import Menubar from "../../components/Menubar";
import Footer from "../../components/Footer";
import SectionContainer from "../../components/SectionContainer";
import { NextPage } from "next";
import matter from "gray-matter";

export const posts: PostCardProps[] = [
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

type BlogProps = {
  posts: PostCardProps[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | M. Nindra Zaka</title>
      </Head>
      <Menubar />

      <SectionContainer
        bg="purple.600"
        paddingTop="36"
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
      </SectionContainer>

      <SectionContainer marginTop="-32" paddingBottom="16">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          marginTop="8"
          gap="8"
        >
          {posts?.map((post) => (
            <PostCard {...post} key={post.title} />
          ))}
        </Grid>
      </SectionContainer>

      <Footer />
    </>
  );
};

Blog.getInitialProps = async () => {
  const context = require.context("./contents", false, /\.md$/);
  const posts: PostCardProps[] = [];

  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const content = await import(`./contents/${fileName}`);
    const meta = matter(content.default);
    posts.push({
      title: meta.data.title,
      description: meta.data.description,
      href: `/blog/${fileName.replace(".md", "")}`,
      imageUrl: meta.data.image,
    });
  }

  return { posts };
};

export default Blog;
