import React from 'react'

export default function hero() {
  return (
    <section className="bg-[#c1ff72] relative">
      <div className="relative">
        <div className="md:px-32 px-0">
          <img
            src="/banner.png"
            alt="banner"
            className="object-cover w-full h-[600px]"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/bannerLogo.png"
            alt="banner"
            className="w-auto h-[350px] object-contain"
          />
        </div>
      </div>
      <div className="md:w-[50%] w-[100%] md:absolute static bg-[#0da84a] md:top-[70%]  right-0">
        <p className="text-white p-4 font-bold text-lg">
          A New CACFP Sponsor is Coming Soon! 🌟 <br />
          Eating Tots Inc. is preparing to support providers like YOU! <br />
          Join our waitlist and be the first to know when we launch!
        </p>
      </div>
    </section>
  )
}
