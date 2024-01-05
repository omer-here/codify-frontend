import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GET_INDIVIDUAL_POST, GET_ALL_SLUGS } from "../../../GraphQL/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import ReactMarkdown from "react-markdown";
import { revalidatePath } from "next/cache";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

const client = new ApolloClient({
  uri: "http://127.0.0.1:1337/graphql",
  cache: new InMemoryCache(),
});

export default async function BlogPost({ params }) {
  //http://localhost:3000/api/revalidate?path=/blog

  // revalidatePath('/blog', 'page');

  const { post } = await getBlogPost(params);
  //console.log(post.subDetails);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center bg-white w-full">
        {/* <h1 className="">{post.subDetails.title}</h1> */}
        <div className="prose prose-neutral prose-h1:underline text-black">
          <MDXRemote source={post.subDetails.content} />
        </div>

        {/* <ReactMarkdown className="prose p-4">{post.subDetails.content}</ReactMarkdown> */}
      </div>

      <div className="container flex flex-row justify-center items-center overflow-hidden px-32">
      <iframe
        src="https://codesandbox.io/embed/new?codemirror=1"
        className="h-96 w-full"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
    fetchPolicy: "no-cache",
  });

  const paths = data.blogPosts.data.map((post) => {
    return { slug: post.attributes.urlSlug };
  });

  return paths;
}

async function getBlogPost(params) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = await data.blogPosts.data[0].attributes;

  // revalidatePath(`/blogs/${attrs.slugUrl}`, 'page');
  revalidatePath(`/blogs`, "page");

  return {
    post: {
      subDetails: attrs,
    },
  };
}



//https://tailwindcss.com/docs/typography-plugin