import Image from "next/image";
import LogoSlider from "./logo";
export default function Home() {
  return (
    <section className="bg-white">
      <section className="py-4 px-24 md:block hidden">
        <div className="flex justify-between items-center">
          <Image
            src="/eatingTots.png"
            alt="eatingtots"
            width={90}
            height={100}
          />
          <Image
            src="/happyFace.png"
            alt="happyFace"
            width={100}
            height={100}
          />
          <Image src="/usda.png" alt="usda" width={100} height={100} />
          <Image src="/map.png" alt="map" width={100} height={100} />
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
      </section>
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
      <LogoSlider />

      <section className="md:py-24 py-32 md:px-32 px-4 relative md:block hidden">
        <div className="flex justify-between items-center px-12">
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
            <h1 className="text-4xl font-bold py-6 text-[#0da84a]">
              Did you know{" "}
            </h1>
            <ul className="text-xl px-6 list-disc">
              <li className="pb-2">
                Over 60% of childcare providers say improving their English
                skills helps them communicate better with families and boost
                their confidence on the job.
              </li>
              <li className="pb-2">
                Every minute counts during a child’s emergency — knowing CPR can
                save a life.
              </li>
              <li className="pb-2">
                Eating Tots offers free CPR certification classes designed
                specifically for childcare providers, so you’re ready when it
                matters most.
              </li>
              <li className="pb-2">
                Our free English classes are tailored to childcare
                professionals, helping you grow your skills and your career
                without any cost.
              </li>
              <li className="pb-2">
                Providers who participate in training programs like ours often
                see better child development outcomes and increased trust from
                families.
              </li>
            </ul>
          </div>
          <div>
            <img src="/women.png" alt="women" />
          </div>
        </div>
      </section>

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
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src="/member2.jpg"
                className="rounded-lg md:w-[250px] h-[auto] w-[100%]"
              />
              <p>
                Jeannette Tomala (Title: Secretary) Jeannette brings a strong
                background in business management, supported by her Associate’s
                degree in the field. She has over 15 years of experience in
                clerical and administrative roles, including scheduling, file
                management, and recordkeeping for child care programs. Her
                attention to detail and organizational skills support the
                documentation and compliance needs of the CACFP program.
                Jeannette has a keen understanding of office systems and ensures
                timely and accurate reporting. She is committed to ensuring that
                the sponsor’s administrative foundation is strong, efficient,
                and audit-ready.
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
      <section className="mt-12">
        <div className="bg-[#c1ff72] md:px-32 px-4 py-12 flex flex-col md:flex-row justify-between md:items-center items-start">
          <h2 className="text-xl font-bold py-6 text-[#0da84a]">
            How to Enroll <br />
            Fill out our simple registration form below <br />
            Choose the program(s) you want to join <br />
            Our team will contact you with class schedules and details
          </h2>
          <a target="_blank" href="https://forms.gle/Ybe2n32C2cgtsLxb6"> <button className="bg-[#0da84a] text-white px-6 py-2 cursor-pointer rounded-lg">Register Now</button></a>

        </div>

      </section>
      <section className="bg-[#0da84a] md:px-32 px-4 py-4">
        <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center text-[#c1ff72]">
          <p>© 2025 Eating Tots | Nonprofit EIN: [Your EIN] <br />
            Privacy Policy | Terms & Conditions (optional)</p>
          <p>Contact: 914-539-9780 or 646-228-1470 <br />
            Email: theoffice@eatingtots.org</p>
        </div>
      </section>
    </section>
  );
}
