
export default function PostQuestion() {
  return (
    <>
        <div className="bg-blue-950 border-4 h-56 w-full">
            <p>Post A Question Page</p>
            <p>Post A Question Page</p>
            <p>Hello!!</p>
            <p>Hello Again</p>

            <div className="w-1/2 mt-4">
          <div className="text-gray-200 p-4 bg-slate-900 border-4 w-full shadow-xl border-gray-300 mb-2 rounded-md flex flex-row justify-between ">
            <h1>Question 1</h1>
            <button className="border-2 p-1 rounded-md border-gray-300">
              Answer
            </button>
          </div>

          <div className="text-gray-200 p-4 bg-slate-900 border-b-2 w-full shadow-xl border-gray-300 mb-2 rounded-md flex flex-row justify-between ">
            <p>Answer 1</p>
            {/* <button className="border-2 p-1 rounded-md border-gray-300">Answer</button> */}
          </div>

          <div className="text-gray-200 p-4 bg-slate-900 border-4 w-full shadow-xl border-gray-300 mb-2 rounded-md ">
            Question 2
          </div>
        </div>

        </div>
    </>
  )
}