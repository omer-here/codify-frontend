'use client'
import { useState } from "react";
export default function Accordian({ qTitle, qID, answer }){
    const [accordionOpen, setAccordionOpen] = useState(false);

    return(
        <>
            <div className="w-1/2  text-gray-200 p-4 bg-slate-900 border-4 shadow-xl border-gray-300 mb-2 rounded-md ">
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="flex justify-between w-full"
            >
              <span><span><strong>Q: </strong></span><strong>{qTitle}</strong></span> 
              <span><strong>QID #</strong>{qID}</span>
              {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
            <div
              className={` grid overflow-hidden transition-all duration-300 ease-in-out text-slate-200 text-sm ${
                accordionOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden"><span><strong>Answer: </strong></span>{answer}</div>
            </div>
          </div>
        </>
    );
}