import Image from "next/image"
import HeroImg from "../images/Favourite .jpg"


function Hero() {
  return (
    <section className='bg-slate-900 w-full h-screen overflow-hidden'>
      <div className="flex flex-row justify-between mx-8">
        <div className="flex flex-col justify-start p-4 gap-2">
            <p className="pt-16 font-sans bg-gradient-to-r from-gray-600 to-purple-900 text-transparent bg-clip-text font-bold">The New Generation Learning Platform</p>
            <p className="text-7xl  font-sans font-semibold">Learn & Code with <br></br><span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 from-10% via-slate-600 via-30% to-purple-900 to-90% ">CODIFY</span><br></br>AI Powered Brillance</p>

            
            <p className="text-2xl font-bold pt-4">Get Started Today</p>
            <p className="pb-4 text-sm">No Subscription Required</p>
            
            

            <button className='bg-blue-600 font-bold p-2 w-fit hover:border-2 border-sky-500 rounded-xl'>Get Started</button>
            {/* <div className="bg-black p-3 rounded-full flex flex-row justify-normal gap-4 w-80">
              <p className="px-4">Icon</p>
              <p className="px-2">Continue with Credentials</p>
            </div> */}

            {/* <div className="bg-black p-3 rounded-full flex flex-row justify-normal gap-4 w-80">
              <p className="px-4">Icon</p>
              <p className="px-2">Continue with Github</p>
            </div> */}

            
            <p className="text-sm ">By Signing Up, You are agreed to the Codify Terms and Conditions </p>
        </div>
        <div className="bg-purple-700 h-fit w-1/2 drop-shadow-lg">
          {/* <p> Image </p> */}
          <Image src={HeroImg} alt="Hero-Image" />
        </div>
      </div>
    </section>
  )
}

export default Hero