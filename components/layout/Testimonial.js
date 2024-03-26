import Image from 'next/image'
import FiverrIcon from '../images/fiverrr.png'
import NetflixIcon from '../images/netflix.png'
import SemrushIcon from '../images/semrush.png'

function Testimonial() {
  return (
//     <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -mx-4 -mb-10 text-center">
//       <div className="sm:w-1/2 mb-10 px-4">
//         <div className="rounded-lg h-64 overflow-hidden">
//             {/* <Image alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/> */}
//         </div>
//         <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
//         <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
//         <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
//       </div>
//       <div className="sm:w-1/2 mb-10 px-4">
//         <div className="rounded-lg h-64 overflow-hidden">
//         {/* <Image alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/> */}
//         </div>
//         <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
//         <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
//         <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
//       </div>
//     </div>
//   </div>
// </section>
  <section className='p-8 bg-slate-800 overflow-hidden'>
    <div className='flex flex-col gap-4'>
      <p className='text-2xl font-bold'>What People are Saying About us</p>
      <p>List of what we offer</p>

      <div className='flex flex-row justify-center md:gap-8 gap-2'>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-xl md:h-56 w-56 h-64" >
                <p className='p-6 font-serif text-gray-200'>This is the Best Platform I ever used for learning Programming Concepts!</p>
                <p className='p-6 font-semibold'>Sam ALton</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-xl md:h-56 w-56 h-64" >
        <p className='p-6 font-serif text-gray-200'>This is the Best Platform I ever used for learning Programming Concepts!</p>
                <p className='p-6 font-semibold'>Sam ALton</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-xl md:h-56 w-56 h-64" >
        <p className='p-6 font-serif text-gray-200'>This is the Best Platform I ever used for learning Programming Concepts!</p>
                <p className='p-6 font-semibold'>Sam ALton</p>
        </div>
    </div>

    <p className='text-2xl font-bold mt-4'>Comapanies Entrusted By</p>

    <div className='bg-white bg-opacity-70 backdrop-blur-lg rounded-md drop-shadow-xl md:h-36 h-28 w-full'>
      <div className='flex flex-row justify-evenly'>
        <div className="h-36 w-56">
          <Image src={FiverrIcon} alt="Fiverr Icon" />
        </div>
        <div className="h-14 w-36">
          <Image src={NetflixIcon} alt="Netflix Icon" />
        </div>
        <div className="h-36 w-56">
        <Image src={SemrushIcon} alt="Semrush Icon" />
        </div>
      </div>
    </div>
    </div>

    
  </section>
  )
}

export default Testimonial