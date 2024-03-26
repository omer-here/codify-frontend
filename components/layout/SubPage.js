import Image from "next/image"
import SubPageImg from "../images/Desktop 6.jpg"
const SubPage = () => {
  return (
    <section className="p-8 bg-slate-800 overflow-hidden">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-start gap-2 max-w-md">
                <p className="text-2xl font-bold">Learn to Code in Multiple Languages</p>
                <p>Our software provides a comprehensive learning platform for multiple programming languages. Whether you’re a beginner starting with Python or an experienced developer looking to learn Java, C++, or JavaScript, we’ve got you covered. Our curriculum is designed to make learning interactive and enjoyable, with real-world examples and exercises to reinforce concepts.</p>
            </div>
            {/* Image */}
            <div className=" drop-shadow-lg h-fit w-1/3 pb-2 hidden md:block">
                {/* <p>Image</p> */}
                <Image src={SubPageImg} alt="SubPage Image"/>
            </div>
        </div>
    </section> 
  )
}

export default SubPage