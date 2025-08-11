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
      <div className="w-[100%] static bg-[#0da84a] ">
        <div className='md:p-8 p-4  gap-4 flex flex-col md:flex-row items-start md:items-center justify-between'>
        <p className="text-white font-bold text-lg">
          A New CACFP Sponsor is Coming Soon! 🌟 <br />
          Eating Tots Inc. is preparing to support providers like YOU! <br />
          Join our waitlist and be the first to know when we launch!
        </p>
        <a target="_blank" href="https://forms.gle/Ybe2n32C2cgtsLxb6"> <button className="bg-white text-[#0da84a] px-6 py-2 cursor-pointer rounded-lg">Register Now</button></a>
      </div>
      </div>
    </section>
  )
}
