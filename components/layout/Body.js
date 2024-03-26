import React, { use } from 'react'
import IdeImg from '../images/Desktop 7.jpg'
import ChatBotImg from '../images/Chatbot 2.jpg'
import TopicImg from '../images/Desktop 3.jpg'
import Image from 'next/image'
// import { useRouter } from 'next/navigation' 
import { PushToContent, PushToIDE, PustToChatbot } from '@/app/user'

// import { redirect } from 'next/navigation' it works on server components



function Body() {

  return (
//     <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="-my-8 divide-y-2 divide-gray-100">
//       <div className="py-8 flex flex-wrap md:flex-nowrap">
//         <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//           <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//           <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
//         </div>
//         <div className="md:flex-grow">
//           <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
//           <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//           <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//       <div className="py-8 flex flex-wrap md:flex-nowrap">
//         <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//           <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//           <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
//         </div>
//         <div className="md:flex-grow">
//           <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
//           <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//           <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//       <div className="py-8 flex flex-wrap md:flex-nowrap">
//         <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//           <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//           <span className="text-sm text-gray-500">12 Jun 2019</span>
//         </div>
//         <div className="md:flex-grow">
//           <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
//           <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
//           <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
//             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
<section className="p-8 bg-slate-500 overflow-hidden">
  <div className="flex flex-row justify-between">
      <div className="bg-purple-700 h-fit w-1/3 drop-shadow-xl hidden md:block" >
          {/* <p>Image</p> */}
          <Image src={IdeImg} alt="Ide Image" />
      </div>
      <div className="flex flex-col justify-start gap-2 max-w-md">
          <p className='text-2xl font-bold' >Have A Glance on Embedded IDE</p>
          <p>The Integrated Development Environment (IDE) embedded in our software allows you to write, compile, and run code all in one place. It supports multiple languages and comes with features like syntax highlighting and auto-completion, making coding easier and more efficient. It’s like having a powerful coding tool right at your fingertips.</p>
          <PushToIDE/>
      </div>     
  </div>

  <div className="flex flex-row justify-between pt-8">
      <div className="flex flex-col justify-start gap-2 max-w-md">
          <p className='text-2xl font-bold' >Supercharge Your Experience With AI</p>
          <p>Our software features a powerful chatbot designed to assist learners throughout their coding journey. Whether you’re stuck on a problem or need clarification on a concept, the chatbot is there to help. It can provide hints, explain concepts, and even guide you through complex problems, making learning to code less daunting.</p>
          <PustToChatbot/>
      </div>
      <div className="bg-purple-700 h-fit w-1/3 drop-shadow-xl hidden md:block" >
          {/* <p>Image</p> */}
          <Image src={ChatBotImg} alt="Ide Image" /> 
      </div>     
  </div>

  <div className="flex flex-row justify-between pt-8 gap-2 mb-4">
      <div className="flex flex-col justify-start gap-2 max-w-md">
          <p className='text-2xl font-bold' >Explore Your Favourite Topics</p>
          <p>Our software offers a wide variety of content on different programming topics. From beginner-friendly tutorials on Python to advanced topics in machine learning and data science, there’s something for everyone. The content is regularly updated and expanded, ensuring you always have access to the latest trends and technologies in the programming world.</p>
            <PushToContent/>
      </div>
      <div className='flex flex-row gap-4'>
        <div className="bg-purple-700 h-fit w-56 drop-shadow-xl hidden md:block" >
            {/* <p>Image</p> */}
            <Image src={TopicImg} alt="Topic Image" />
        </div>
        <div className="bg-purple-700 h-fit w-56 drop-shadow-xl hidden md:block" >
            {/* <p>Image</p> */}
            <Image src={TopicImg} alt="Topic Image" />
        </div>
        <div className="bg-purple-700 h-fit w-56 drop-shadow-xl hidden md:block" >
            {/* <p>Image</p> */}
            <Image src={TopicImg} alt="Topic Image" />
        </div>
      </div>
  </div>

</section> 
  )
}

export default Body