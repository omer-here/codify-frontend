export default function ChatMessage({ message, isUserMessage }) {
  return (
    <>
      <div className={`mb-2 ${isUserMessage ? "text-right" : "text-left"}`}>
        <p
          className={`bg-${isUserMessage ? "blue-500" : "green-500"} text-${
            isUserMessage ? "white" : "gray-200"
          } rounded-lg py-2 px-4 inline-block`}
        >
          {message}
        </p>
      </div>
      
      {/* <div className={`mb-2 text-right`}>
        <p
          className={`bg-blue-500 text-white rounded-lg py-2 px-4 inline-block`}
        >
          {message}
        </p>
      </div> */}
    </>
  );
}
