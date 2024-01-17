import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
       <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">Left</div>
            <div className="md:w-1/2">Right</div>
       </div>
    </div>
  )
}

export default Banner
