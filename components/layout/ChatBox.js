import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

export default function ChatBox() {
  const [chatMessages, setChatMessages] = useState([{ text: "Welcome to the chat!", isUserMessage: false },]);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false); // Initially open
  const [userInput, setUserInput] = useState("");
  const [toggleButtonText, settoggleButtonText] = useState("Open");

  const toggleButton = () => {
    if (isChatboxOpen) {
      setIsChatboxOpen(false);
      settoggleButtonText("Open");
    }
    if (!isChatboxOpen) {
      setIsChatboxOpen(true);
      settoggleButtonText("Close");
    }
  };

  const handleSubmit = () => {
    if(userInput.trim() != ''){
        const newMessage = { text: userInput, isUserMessage: true };
        setChatMessages([...chatMessages, newMessage]);
        setUserInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSubmit(); // Call your message sending function
      }
  }

//   const message = {
//     text: "hello",
//     isUserMessage: false,
//   };

  return (
    <>
      {/* ToggleButton */}
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
          onClick={toggleButton}
        >
          {toggleButtonText}
        </button>
      </div>

      <div
        className={`fixed bottom-16 bg-slate-700 shadow-md  rounded-xl right-4 w-96 ${
          isChatboxOpen ? "" : "hidden"
        }`}
      >
        <div className="p-4 h-80 overflow-y-auto">
        {chatMessages.map((message) => (
        <ChatMessage key={message.text} message={message.text} isUserMessage={message.isUserMessage} />
                ))}
          {/* <ChatMessage  message={message.text} isUserMessage={message.isUserMessage} />
                <ChatMessage  message={message.text} isUserMessage={true} />
                <ChatMessage  message={message.text} isUserMessage={message.isUserMessage} /> */}
          {/* <ChatMessage message={"hello"} isUserMessage={true} />
          <ChatMessage message={"hi"} isUserMessage={false} />
          <ChatMessage message={"Bye"} isUserMessage={true} />
          <ChatMessage message={"hello"} isUserMessage={true} />
          <ChatMessage message={"hi"} isUserMessage={false} />
          <ChatMessage message={"Bye"} isUserMessage={true} />
          <ChatMessage message={"hello"} isUserMessage={true} />
          <ChatMessage message={"hi"} isUserMessage={false} />
          <ChatMessage message={"Bye"} isUserMessage={true} /> */}
        </div>

        <div className="p-4 border-t flex">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full text-black px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>

    </>
  );
}
