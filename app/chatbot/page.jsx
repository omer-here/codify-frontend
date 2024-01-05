'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap bg-gray-900 px-2 rounded-lg border border-gray-300 shadow-xl">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

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