import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { gql } from "@apollo/client";

// import ReactMarkdown from "react-markdown";

// export const revalidate = 0
// export const dynamic = "force-dynamic"

// const client = new ApolloClient(
//   {
//     uri : "http://localhost:1337/graphql",
//     cache : InMemoryCache()
//   }
// );

export default async function PyBlogPage() {
  // const {posts : { subDetails,content } } = await getBlog();

  const { posts } = await getBlog();
  
  //To Sort posts
  posts.subDetails = posts.subDetails.sort(
    (a, b) => a.attributes.srNo - b.attributes.srNo
  );

  //https://nextjs.org/docs/app/building-your-application/configuring/mdx
  // const serialzedSource = await serialize(source);

  return (
    <section className=" bg-gray-700 mx-8 rounded-lg h-max text-white">
      <div className="flex flex-row justify-between overflow-hidden relative">
        <div className="flex flex-col gap-2  w-1/4 sticky">
          {/* <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div> */}
        </div>

        <div className="flex flex-col p-8 gap-2 w-1/2 prose">
          {/* <div>Hello</div>
          <div>Hello</div> */}
          <h1 className="text-white">All posts</h1>
          {posts.subDetails.map((val) => {
            return (
              <div className="text-gray-200 p-4 bg-slate-900 border-4 shadow-xl border-gray-300 mb-4 rounded-md " key={val.attributes.title}>
                <Link
                  key={val.attributes.title}
                  href={`/python-programs/${val.attributes.urlSlug}`}
                >
                  <h3 className="text-gray-200">{val.attributes.title}</h3>
                  <p className="text-gray-200">{val.attributes.description}</p>
                </Link>
              </div>
            );
          })}

        </div>

        <div className="flex flex-col gap-2  w-1/4 ">
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

  const Query = gql`
    query {
      pythonPrograms(filters: { subCategory: { eq: "introductory" } }) {
        data {
          attributes {
            title
            description
            urlSlug
            srNO
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: Query,
    fetchPolicy: "no-cache",
  });

  revalidatePath("/python-programs", "page");

  return {
    posts: {
      subDetails: data.pythonPrograms.data,
    },
  };
}
