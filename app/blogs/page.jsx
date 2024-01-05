
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import BlogPage from "@/components/layout/BlogPage"
// import ChatBox from "@/components/layout/ChatBox"
// import { revalidatePath } from 'next/cache'

export const dynamic = "force-dynamic"



// const openSideWindow = () =>  {
//   // Open a new window or tab with options for size and position
//   const windowFeatures = `width=500,height=400,left=500,top=200`;
//   window.open('/dashboard', '_blank', windowFeatures);
// };

export default function Blogs() {
  //http://localhost:3000/api/revalidate?path=/blog

  // revalidatePath('/blog', 'page');
  return (
    <>
        <Navbar />
        <BlogPage />
        {/* <ChatBox /> */}
        {/* <button className="inline-flex text-white bg-indigo-500 border-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={openSideWindow}>Open Side Window</button> */}
        <Footer/>
    </>
  )
}

