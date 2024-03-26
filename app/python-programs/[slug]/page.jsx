import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import ReactMarkdown from "react-markdown";
import { revalidatePath } from "next/cache";
import { MDXRemote } from "next-mdx-remote/rsc";
import { gql } from "@apollo/client";
import Landing from "@/components/IDE/Landing";

export const dynamic = "force-dynamic";

const client = new ApolloClient({
  uri: "http://127.0.0.1:1337/graphql",
  cache: new InMemoryCache(),
});

export default async function PyBlogPost({ params }) {
  //http://localhost:3000/api/revalidate?path=/blog

  // revalidatePath('/blog', 'page');

  const { post } = await getBlogPost(params);
  //   console.log(post.subDetails);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 p-8 justify-center items-center bg-slate-900 w-full">
        {/* <h1 className="">{post.subDetails.title}</h1> */}
        <div className="prose prose-neutral prose-headings:text-gray-200 prose-p:text-gray-200 prose-code:text-yellow-400 prose-ul:text-gray-200 prose-ol:text-gray-200">
          <MDXRemote source={post.subDetails.content} />
        </div>

        {/* <ReactMarkdown className="prose p-4">{post.subDetails.content}</ReactMarkdown> */}
      </div>

      <div className="container flex flex-row justify-center items-center overflow-hidden px-32">
        {/* <iframe
        src="https://codesandbox.io/embed/new?codemirror=1"
        className="h-96 w-full"
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe> */}
        {/* <iframe src="https://replit.com/@omeriskills/Python?embed=true" className="h-96 w-full p-8"
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts" /> */}

        {/* <iframe
          src="https://codesandbox.io/p/devbox/hello-world-m3fg8c?embed=1&file=%2Fmain.py"
          className="h-96 w-full"
          title="Hello World"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe> */}

        {/* <iframe src="https://codesandbox.io/p/devbox/charming-cartwright-zfkp3v?embed=1&file=%2Fsrc%2FApp.js"
      className="h-screen w-full"
     title="charming-cartwright"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> */}
      </div>

      <Landing />
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const Query = gql`
    query {
      pythonPrograms {
        data {
          attributes {
            urlSlug
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: Query,
    fetchPolicy: "no-cache",
  });

  const paths = data.pythonPrograms.data.map((post) => {
    return { slug: post.attributes.urlSlug };
  });

  return paths;
}

async function getBlogPost(params) {
  const Query = gql`
    query ($slugUrl: String!) {
      pythonPrograms(filters: { urlSlug: { eq: $slugUrl } }) {
        data {
          attributes {
            title
            content
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: Query,
    variables: { slugUrl: params.slug },
  });

  const attrs = await data.pythonPrograms.data[0].attributes;
  // const attrs = await data.pythonPrograms.data.attributes;

  // revalidatePath(`/blogs/${attrs.slugUrl}`, 'page');
  revalidatePath(`/python-programs`, "page");

  return {
    post: {
      subDetails: attrs,
    },
  };
}

//https://tailwindcss.com/docs/typography-plugin 
//<iframe src="<YOUR REPL LINK>" width="600" height="400" />
// <iframe src="https://replit.com/@omeriskills/Python?embed=true" width="600" height="400" />
//https://about.gitlab.com/handbook/markdown-guide/
