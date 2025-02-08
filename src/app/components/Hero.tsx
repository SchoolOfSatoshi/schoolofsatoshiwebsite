import React from 'react'

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center rounded-[8px]" 
      style={{
        backgroundImage: `linear-gradient(270.85deg, rgba(26, 32, 44, 0) 2.54%, #1A202C 68.26%), 
                          linear-gradient(0deg, rgba(26, 32, 44, 0.48), rgba(26, 32, 44, 0.48)), 
                          url('/assets/images/bitcoin1.jpeg')`
      }}
    >
      <div className="container mx-auto px-8 py-12 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-white text-5xl sm:text-6xl font-semibold leading-tight capitalize animate-fadeIn">
            Bitcoin Education for the Future
          </h1>
          <h4 className="text-[#F5F8FE] text-lg capitalize animate-fadeIn animation-delay-200">
            Empowering individuals through transformative Bitcoin knowledge
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
            <button className="bg-[#F7941F] text-white px-10 py-3 rounded-[5px] transition transform hover:scale-105">
              Apply here
            </button>
            {/* <button className="border border-white text-white px-10 py-3 rounded-[5px] transition transform hover:scale-105">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
