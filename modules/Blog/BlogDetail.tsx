import React from "react";
import { NextPage } from "next";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import Menubar from "../../components/Menubar";
import SectionContainer from "../../components/SectionContainer";
import { Image } from "@chakra-ui/image";
import MarkdownView from "../../components/MarkdownView";
import Head from "next/head";

export type BlogDetailProps = {
  title: string;
  description: string;
  image: string;
  caption: string;
  content: string;
};

const BlogDetail: NextPage<BlogDetailProps> = ({
  content,
  title,
  description,
  image,
  caption,
}) => {
  return (
    <>
      <Head>
        <title>{`${title} | M. Nindra Zaka`}</title>
        <meta name="description" content={description} />
        <link rel="preload" as="image" href={image} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <Menubar />
      <SectionContainer paddingY="28" paddingX={[4, 8, 16, 32, 320]}>
        <Stack spacing="4">
          <Heading textAlign="center">{title}</Heading>
          <Image
            src={image}
            maxWidth="100%"
            height="auto"
            style={{ aspectRatio: "4 / 3" }}
            alt={title}
          />
          <Box textAlign="center" marginBottom="4">
            <MarkdownView content={caption} />
          </Box>
          <MarkdownView content={content} />
        </Stack>
      </SectionContainer>
    </>
  );
};

export default BlogDetail;
