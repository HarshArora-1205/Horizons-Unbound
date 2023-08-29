// Imports
import React from 'react';

// Subscribe Component
const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">
        Subscribe to our Newsletter
      </h4>
      <p className="text-wh-500 my-3 mx-auto w-5/6">
        Enter email address to get top news and great deals
      </p>
      <input 
        type="text"
        className="text-center px-5 py-2 border-2 w-5/6 min-w-[100px]"
        placeholder='Enter email address'
      />
      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] px-5 py-2 mt-3">
        SUBSCRIBE
      </button>
    </div>
  )
}

export default Subscribe;