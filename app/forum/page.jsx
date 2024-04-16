'use client'
import PostQuestion from "@/components/forum/PostQuestion"
import ForumLanding from "@/components/forum/ForumLanding";
import { useState } from "react"


export default function Forum(){
    // const [state, setState] = useState(false);

    // const handleState = () => {
    //      state === false ? setState(true) : setState(false);
    // }
    
  return (
    <>
        {/* {state === true? <PostQuestion /> : <ForumLanding />} */}
        {/* {state === true? <ForumLanding /> : <PostQuestion />} */}
        {/* <div className="flex flex-row-reverse">
           <button className="inline-flex text-white bg-indigo-500 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-4 mt-4" onClick={handleState}>Post a Question</button>
        </div> */}

        <ForumLanding />
    </>
  )
}
