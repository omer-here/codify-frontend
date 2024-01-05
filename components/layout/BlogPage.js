import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_POSTS } from "../../GraphQL/queries";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
//import { MDXRemote } from "next-mdx-remote";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { revalidatePath } from "next/cache";

import ReactMarkdown from "react-markdown";

// export const revalidate = 0
// export const dynamic = "force-dynamic"

// const client = new ApolloClient(
//   {
//     uri : "http://localhost:1337/graphql",
//     cache : InMemoryCache()
//   }
// );

const components = {
  // Define custom components here
  h1: ({ children }) => <h1>{children}</h1>,
  p: ({ children }) => <p>{children}</p>,
  b: ({ children }) => <b>{children}</b>,
  code: ({ children, className }) => (
    <pre>
      <code className={className}>{children}</code>
    </pre>
  ),
};

export default async function BlogPage() {
  // const {posts : { subDetails,content } } = await getBlog();

  const { posts } = await getBlog();
  //To Sort posts
  posts.subDetails = posts.subDetails.sort((a, b) => a.attributes.srNo - b.attributes.srNo);
  //  console.log(posts.subDetails);
  // console.log(posts.subDetails.content);

  const MDXText = 'This web site is using `markedjs/marked`. '
  //https://nextjs.org/docs/app/building-your-application/configuring/mdx
  // const serialzedSource = await serialize(source);

  return (
    <section className=" bg-slate-900 mx-8 rounded-lg h-max text-white">
      <div className="flex flex-row justify-between overflow-hidden relative">
        <div className="flex flex-col gap-2 bg-purple-500 w-1/4 sticky">
          {/* <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div> */}
        </div>

        <div className="flex flex-col gap-2  bg-green-500 w-1/2 prose">
          {/* <div>Hello</div>
          <div>Hello</div> */}
          <h1>All posts</h1>
          {posts.subDetails.map((val) => {
            return (
              <Link key={val.attributes.title} href={`/blogs/${val.attributes.urlSlug}`}>
                <h3>{val.attributes.title}</h3>
                <p>{val.attributes.description}</p>
              </Link>
            );
          })}

          <h1>{posts.subDetails.title}</h1>
          <MDXRemote source={MDXText} />

          {/* <ReactMarkdown className="prose">{posts.subDetails.content}</ReactMarkdown> */}
        </div>

        <div className="flex flex-col gap-2  bg-purple-500 w-1/4 ">
          {/* <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div> */}
        </div>
      </div>

    </section>
  );
}

// async function getData() {
//   const res = await fetch("http://127.0.0.1:1337/api/blog-posts");
//   return await res.json();
// }

async function getBlog() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
    fetchPolicy: "no-cache",
  });

  const attrs = await data.blogPosts.data[0].attributes;
  // const content = await attrs.content;

  //  console.log(content)
  const html = await serialize(attrs.content);

  revalidatePath("/blogs", "page");
  // return {
  //     posts: {
  //       subDetails: attrs,
  //       content: html
  //     }
  //   };

  return {
    posts: {
      subDetails: data.blogPosts.data,
      content: html,
    },
  };
}
