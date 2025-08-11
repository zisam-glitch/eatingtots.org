import React from 'react'

export default function footer() {
  return (
    <section className="bg-[#0da84a] md:px-32 px-4 py-4 relative z-9">
      <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center text-[#c1ff72]">
        <p>© 2025 Eating Tots | Nonprofit EIN: [Your EIN] <br />
          Privacy Policy | Terms & Conditions (optional)</p>
        <p>Contact: 914-539-9780 or 646-228-1470 <br />
          Email: theoffice@eatingtots.org</p>
      </div>
    </section>
  )
}
