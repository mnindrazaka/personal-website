import React from "react";
import { NextPage } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import Menubar from "../../components/Menubar";
import SectionContainer from "../../components/SectionContainer";
import { Image } from "@chakra-ui/image";
import MarkdownView from "../../components/MarkdownView";
import Head from "next/head";

type BlogDetailProps = GrayMatterFile<any>;

const BlogDetail: NextPage<BlogDetailProps> = ({ content, data }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | M. Nindra Zaka`}</title>
        <meta name="description" content={data.description} />
        <link rel="preload" as="image" href={data.image} />
      </Head>
      <Menubar />
      <SectionContainer paddingY="28" paddingX={[4, 8, 16, 32, 320]}>
        <Stack spacing="4">
          <Heading textAlign="center">{data.title}</Heading>
          <Image
            src={data.image}
            maxWidth="100%"
            height="auto"
            style={{ aspectRatio: "4 / 3" }}
          />
          <Box textAlign="center" marginBottom="4">
            <MarkdownView content={data.caption} />
          </Box>
          <MarkdownView content={content} />
        </Stack>
      </SectionContainer>
    </>
  );
};

BlogDetail.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`./contents/${slug}.md`);
  const meta = matter(content.default);
  return { ...meta };
};

export default BlogDetail;
