import { GetStaticProps } from "next";
import matter from "gray-matter";
import { PostCardProps } from "../../modules/Blog/PostCard";
import { BlogProps } from "../../modules/Blog";

export { default } from "../../modules/Blog";

export const getStaticProps: GetStaticProps<BlogProps> = async (_ctx) => {
  const context = require.context(
    "../../modules/Blog/contents",
    false,
    /\.md$/
  );
  const posts: PostCardProps[] = [];

  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const content = await import(`../../modules/Blog/contents/${fileName}`);
    const meta = matter(content.default);
    posts.push({
      title: meta.data.title,
      description: meta.data.description,
      href: `/blog/${fileName.replace(".md", "")}`,
      imageUrl: meta.data.image,
    });
  }

  return { props: { posts } };
};
