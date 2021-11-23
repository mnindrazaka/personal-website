import { GetStaticPaths, GetStaticProps } from "next";
import { BlogDetailProps } from "../../modules/Blog/BlogDetail";
import matter from "gray-matter";

export { default } from "../../modules/Blog/BlogDetail";

type Params = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const context = require.context(
    "../../modules/Blog/contents",
    false,
    /\.md$/
  );
  return {
    paths: context
      .keys()
      .map((key) => ({ params: { slug: key.slice(2).replace(".md", "") } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps, Params> = async (
  context
) => {
  const content = await import(
    `../../modules/Blog/contents/${context.params?.slug}.md`
  );
  const meta = matter(content.default);
  return {
    props: {
      content: meta.content,
      caption: meta.data.caption,
      image: meta.data.image,
      title: meta.data.title,
      description: meta.data.description,
    },
  };
};
