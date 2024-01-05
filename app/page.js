import Image from "next/image";
import { getServerSession } from "next-auth";
import { LoginButton, LogoutButton, RegisterButton, User } from "./user";
import { authOptions } from "./api/auth/[...nextauth]/route";

import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Stats from "@/components/layout/Stats";
import SubPage from "@/components/layout/SubPage";
import Footer from "@/components/layout/Footer";
import Body from "@/components/layout/Body";
import Testimonial from "@/components/layout/Testimonial";
import CTA from "@/components/layout/CTA";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      //       Get started by Exploring&nbsp;
      //       <code className="font-mono font-bold">Content</code>
      //     </p>
      //     <h2>Server Session</h2>
      //     {/* <pre>{JSON.stringify(session)}</pre> */}
      //     <pre>
      //       {session.user.name} {session.user.email}
      //     </pre>
      //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      //       {/* <a
      //       className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      //       href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       By{' '}
      //       <Image
      //         src="/vercel.svg"
      //         alt="Vercel Logo"
      //         className="dark:invert"
      //         width={100}
      //         height={24}
      //         priority
      //       />
      //     </a> */}
      //       <LogoutButton />
      //     </div>
      //   </div>

      //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      //     {/* <Image
      //     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      //     src="/next.svg"
      //     alt="Next.js Logo"
      //     width={180}
      //     height={37}
      //     priority
      //   /> */}
      //     <h2 className={`mb-3 text-2xl font-bold`}>Codify</h2>
      //   </div>

      //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      //     <a
      //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className={`mb-3 text-2xl font-semibold`}>
      //         Docs
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //         Find in-depth information about Next.js features and API.
      //       </p>
      //     </a>

      //     <a
      //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className={`mb-3 text-2xl font-semibold`}>
      //         Learn{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //         Learn about Next.js in an interactive course with&nbsp;quizzes!
      //       </p>
      //     </a>

      //     <a
      //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className={`mb-3 text-2xl font-semibold`}>
      //         Templates{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //         Explore the Next.js 13 playground.
      //       </p>
      //     </a>

      //     <a
      //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <h2 className={`mb-3 text-2xl font-semibold`}>
      //         Deploy{" "}
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //           -&gt;
      //         </span>
      //       </h2>
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //         Instantly deploy your Next.js site to a shareable URL with Vercel.
      //       </p>
      //     </a>
      //   </div>
      // </main>
      <>
      <Navbar />
      <Hero />
      <Stats />
      <SubPage />
      <Body />
      <Testimonial />
      <CTA />
      <Footer />
    </>

      // <>
      // Hello World
      // <h2>Server Session</h2>
      // <pre>{JSON.stringify(session)}</pre>
      // <User/>
      // <div className='flex-row '>
      //   <LoginButton/>
      //   <LogoutButton/>
      // </div>
      // </>
    );
  }
  return (
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              It seems you are not Signed in!
            </h1>
            <p className="mb-8 leading-relaxed">
              If you are a new user, you can register yourself by clicking the button below or if you
              have signed up earlier than just sign in using the button below.
            </p>
            <div className="flex justify-center space-x-2">
              <LoginButton/>
              <RegisterButton/>
            </div>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div> */}
        </div>
      </section>
    
  );
}
