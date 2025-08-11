import React from 'react'

export default function registration() {
  return (
    <section className="mt-12 relative z-9">
      <div className="bg-[#c1ff72] md:px-32 px-4 py-12 flex flex-col md:flex-row justify-between md:items-center items-start">
        <h2 className="text-xl font-bold py-6 text-[#0da84a]">
          How to Enroll <br />
          Fill out our simple registration form below <br />
          Choose the program(s) you want to join <br />
          Our team will contact you with class schedules and details
        </h2>
        <a target="_blank" href="https://forms.gle/Ybe2n32C2cgtsLxb6"> <button className="bg-[#0da84a] text-white px-6 py-2 cursor-pointer rounded-lg">Register Now</button></a>

      </div>
      <div className="fixed bottom-[5%] left-[5%] ">
        <a target="_blank" href="https://forms.gle/Ybe2n32C2cgtsLxb6"> <button className="bg-[#0da84a] text-white px-6 py-2 cursor-pointer rounded-lg">Register Now</button></a>
      </div>

    </section>
  )
}
