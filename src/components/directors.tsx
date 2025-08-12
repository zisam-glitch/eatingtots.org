import React from 'react'

export default function directors() {
  return (
    <section className="md:px-32 px-4 md:py-24 py-24 relative text-black">
    <div className="flex items-center flex-col md:flex-row">
      <div className="side-text text-6xl font-bold md:block hidden">
        Board of Directors
      </div>
      <div className="text-5xl text-center font-bold md:hidden block pb-12">
        Board of Directors
      </div>
      <div className="flex flex-col gap-8 md:px-24 px-0">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/member1.png"
            className="rounded-lg md:w-[250px] h-[auto] w-[100%]"
          />
          <p>
            Karina Ozuna (Title: President Chairman)
            <br />
            Karina holds an MBA in Education and a BA in Early Childhood
            Education and Special Needs. She is CDA certified and has earned
            an Advanced Certificate in Human Resources. As the founder and
            owner of Vibrant Minds Curriculum, she brings both educational
            expertise and leadership experience to the board. Karina has
            over a decade of experience in curriculum development for early
            learners, with a special focus on inclusion and differentiated
            learning. Her passion lies in empowering educators and families
            through culturally relevant and developmentally appropriate
            practices.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/member2.jpg"
            className="rounded-lg md:w-[250px] h-[auto] w-[100%]"
          />
          <p>
            Denny Sena (Title: Vice President) Denny is a seasoned child
            care professional with ownership and operational experience
            across three licensed group family daycare programs. He holds an
            Associate’s degree in Accounting and combines his financial
            acumen with hands-on expertise in early childhood care. Denny
            has been instrumental in mentoring new providers and
            streamlining compliance processes across multiple sites. His
            leadership style emphasizes quality care, community trust, and
            program sustainability. Denny brings practical insight into
            running successful daycares and scaling best practices across
            networks.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute top-[0%] left-[5%] md:block hidden">
      <img src="/fruit4.png  " alt="fruit" width={80} height={80} />
    </div>
    <div className="absolute top-[0%] right-[5%] md:block hidden">
      <img src="/fruit5.png  " alt="fruit" width={80} height={80} />
    </div>
    <div className="absolute bottom-[8%] right-[10%] md:block hidden">
      <img src="/fruit6.png  " alt="fruit" width={80} height={80} />
    </div>
  </section>
  )
}
