import React from 'react'
import Image from 'next/image'

export default function about() {
  return (
    <>
      <section className="md:py-24 py-32 md:px-32 px-4 relative">
        <div className="justify-between items-center px-12 md:flex hidden">
          <Image src="/cookie.png" alt="cookie" width={70} height={70} />
          <Image src="/apple.png" alt="apple" width={70} height={70} />
          <Image src="/banana.png" alt="banana" width={70} height={70} />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-4 text-black">
          <div className="bg-[#0da84a] p-6 ">
            <h2 className="text-3xl font-bold text-center py-4 text-[#c1ff72]">
              Who Are We?
            </h2>
            <p className="text-lg pb-3">Welcome to Eating Tots Inc!</p>
            <p className="text-lg pb-4">
              {" "}
              We are a mission-driven organization committed to making sure
              every child in family child care has access to healthy, balanced
              meals. As a CACFP sponsor (in process), we support child care
              providers across New York — starting in The Bronx — with tools,
              training, and reimbursements to serve meals that nourish little
              bodies and growing minds.
            </p>
          </div>
          <div className="bg-[#c1ff72] p-6">
            <h2 className="text-3xl font-bold text-center py-4 text-[#0da84a]">
              What We Do?
            </h2>
            <p className="text-lg pb-3">
              When you join CACFP through Eating Tots inc, you get:
            </p>
            <ul className="list-disc text-lg px-4">
              <li>Monthly reimbursements for eligible meals and snacks</li>
              <li>Ongoing training in nutrition, menu planning & compliance</li>
              <li>Simplified paperwork and personalized support</li>
              <li>Resources designed for your home daycare environment</li>
            </ul>
            <p className="text-lg pb-12">
              Whether you’re newly licensed or have been in child care for
              years, we’re here to help you succeed.
            </p>
          </div>
        </div>
        <div className="absolute top-[75%] left-[5%] md:block hidden">
          <img src="/fruit.png  " alt="fruit" width={120} height={120} />
        </div>
        <div className="absolute bottom-[-2%] left-[25%] md:block hidden">
          <img src="/fruit2.png  " alt="fruit" width={120} height={120} />
        </div>
        <div className="absolute bottom-[-2%] right-0 md:block hidden">
          <img src="/fruit3.png  " alt="fruit" width={220} height={220} />
        </div>
      </section>
      <section className="bg-[#c1ff72] md:px-32 px-4 md:my-24 my-0 py-12 md:py-0 text-black">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="md:pr-12 pr-0 md:py-12 py-0">
            {/* <h1 className="text-4xl font-bold py-6 text-[#0da84a]">
              Did you know{" "}
            </h1> */}
            <ul className="text-xl list-none">
              <li className="pb-4">
                Help Childcare Providers Speak Up — So Every Child Can Thrive!

              </li>
              <li className="pb-4">
                Over 60% of childcare providers say improving their English
                skills helps them communicate better with families and boost
                their confidence on the job.
              </li>
              <li className="pb-4">
                Every minute counts during a child’s emergency — knowing CPR can
                save a life.
              </li>
              <li className="pb-4">
                Eating Tots offers free CPR certification classes designed
                specifically for childcare providers, so you’re ready when it
                matters most.
              </li>
              <li className="pb-4">
                Our free English classes are tailored to childcare
                professionals, helping you grow your skills and your career
                without any cost.
              </li>
              <li className="pb-4">
                Providers who participate in training programs like ours often
                see better child development outcomes and increased trust from
                families.
              </li>
            </ul>
            <div className='relative'>
              <Image className='absolute top-0 md:-left-[45px] left-0' src="/carot.png" alt="cookie" width={70} height={70} />
              <h1 className='text-[26px] text-center font-bold py-4 px-6 bg-[#f3c67d] '>
                [Give Today — Support ESL & <br /> Safety for Childcare Providers]
              </h1>
              <Image className='absolute bottom-0 md:-right-[45px] right-0' src="/apple.png" alt="apple" width={70} height={70} />
            </div>
          </div>
          <div>
            <img src="/women.png" alt="women" />
          </div>
        </div>
      </section></>
  )
}
