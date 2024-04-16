'use client'
import dynamic from 'next/dynamic';
//import ChatBox from "@/components/layout/ChatBox";

const ChatBox = dynamic(() => import("@/components/layout/ChatBox"), { ssr: false })

// const openSideWindow = () =>  {
//   // Open a new window or tab with options for size and position
//   const windowFeatures = `width=500,height=400,left=500,top=200`;
//   window.open('/dashboard', '_blank', windowFeatures);
// };

export default function Dashboard() {
  return <>
  Super Secret Page
  {/* <button className="inline-flex text-white bg-indigo-500 border-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={openSideWindow}>Open Side Window</button> */}
  {/* <ChatBox/> */}
  </>;
}
