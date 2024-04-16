'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  if(messages.length === 0){
    return(
      <>
      {/* Rendering Initial Visit */}
      <div className="flex flex-col relative w-full max-w-md py-24 mx-auto stretch">
        <div className='w-full bg-gray-800 h-36 rounded-xl'>
          <p className='text-4xl font-sans font-bold p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 from-10% via-slate- via-30% to-purple-900 to-90%'>Feeling Stuck?</p><b/>
          <p className='text-xs p-4 text-gray-400'>You can start asking questions!</p>
        </div>
     

        <div className='bg-gray-800 fixed bottom-0 w-full max-w-md mb-4 h-20 rounded-lg'>
          <form onSubmit={handleSubmit}>
            <input
              className="fixed bottom-0 w-full max-w-md text-black p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
      </>
    );
  }


  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {/* Rendering messages */}
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap bg-gray-800 font-sans text-gray-200 px-2 p-4 rounded-lg border border-gray-300 shadow-xl mb-2">
          <span className='text-lg font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 from-10% via-slate- via-30% to-purple-400 to-90%'>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
          <span className='font-sans font-semibold text-gray-200 prose prose-neutral prose-headings:text-gray-200 prose-p:text-gray-200 prose-code:text-yellow-400 prose-ul:text-gray-200 prose-ol:text-gray-200'>{m.content}</span>
        </div>
      ))}
      {/* submisson part */}
      <div className='bg-gray-800 fixed bottom-0 w-full max-w-md mb-4 h-20 rounded-lg'>
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md text-black p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}







//https://vercel.com/templates/next.js/nextjs-ai-chatbot
//https://youtu.be/0qyKl73RMtc?si=HH0Ro7Em4o5gHBH1