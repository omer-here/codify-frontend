import Image from "next/image"
import SubPageImg from "../images/Desktop 6.jpg"
const SubPage = () => {
  return (
    <section className="p-8 bg-slate-800 overflow-hidden">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-start gap-2">
                <p className="text-2xl font-bold">Learn to Code in Multiple Languages</p>
                <p>Description</p>
            </div>
            <div className=" drop-shadow-lg h-fit w-1/3 pb-2" >
                {/* <p>Image</p> */}
                <Image src={SubPageImg} alt="SubPage Image"/>
            </div>
        </div>
    </section> 
  )
}

export default SubPage