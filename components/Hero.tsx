import React from 'react'

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center rounded-2xl h-[800px] text-orange-500 " 
      style={{
        backgroundImage: ` 
                          url('/assets/images/c1.jpeg')`
      }}
    >
      <div className="container mx-auto px-8 py-12 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-8 py-24">
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
