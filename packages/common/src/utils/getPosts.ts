import path from "path";
import type { Post, PostMetadata } from "../types";
import fs from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "../components/mdx-components";

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = async (
  passwordProtectedPosts: string[] = []
): Promise<Post[]> => {
  const files = await fs.readdir("./posts/");

  const posts: Post[] = await Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { frontmatter, content } = await compileMDX<PostMetadata>({
          source: fileContent,
          options: { parseFrontmatter: true },
          components: mdxComponents,
        });

        return {
          body: content,
          metadata: frontmatter,
          isPasswordProtected:
            passwordProtectedPosts.indexOf(frontmatter.slug) > -1,
        };
      })
  );

  posts.sort((a, b) => {
    return (
      new Date(b.metadata.lastModified).getTime() -
      new Date(a.metadata.lastModified).getTime()
    );
  });

  return posts;
};

export const getPost = async (slug: string): Promise<Post> => {
  const posts = await getPosts();
  const post = posts.find((post) => post.metadata.slug === slug);
  if (!post) {
    throw new Error(`Cannot find post with slug: ${slug}`);
  }
  return post;
};
