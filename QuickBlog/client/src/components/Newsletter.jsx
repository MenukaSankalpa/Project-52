import React from 'react'

function Newsletter() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
        <p className=''>Subscribe to get the latest blg, new teh, and exclusive news.</p>
        <form className='flex items-center justify-center max-w-2xl w-full md:h-13 h-12'>
            <input type="text" className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' placeholder='Enter Your Email Id' required />
            <button  type='submit'
            className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-1-none'>
            Subscribe
            </button>
        </form>
    </div>
  )
}

export default Newsletter