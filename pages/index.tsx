import { GetStaticProps } from "next";
import matter from "gray-matter";

import { PostCardProps } from "../modules/Blog/PostCard";
import { LandingPageProps } from "../modules/LandingPage/LandingPage";

export { default } from "../modules/LandingPage";

export const getStaticProps: GetStaticProps<LandingPageProps> = async (
  _ctx
) => {
  const context = require.context("../modules/Blog/contents", false, /\.md$/);
  const posts: PostCardProps[] = [];

  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const content = await import(`../modules/Blog/contents/${fileName}`);
    const meta = matter(content.default);

    if (meta.data.highligted) {
      posts.push({
        title: meta.data.title,
        description: meta.data.description,
        href: `/blog/${fileName.replace(".md", "")}`,
        imageUrl: meta.data.image,
      });
    }
  }

  return { props: { posts } };
};
