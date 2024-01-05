import React from 'react'

const CTA = () => {
  return (
    <section className='p-8 bg-slate-500 overflow-hidden'>
        <div className='flex flex-row justify-between gap-2'>
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-bold'>You have come so far, <br/> Let&apos;s Try Our Service Now!</p>
                <p>Description</p>
            </div>
            <div>
            <button className='bg-blue-600 font-bold p-2  hover:border-2 border-sky-500 rounded-xl'>Get Started</button>
            </div>
        </div>
    </section>
    
  )
}

export default CTA