import React from 'react'

function About() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 pb-20">
  <div className="hero-content text-center">
    <div className=" max-w-xl">
      <p className="py-6 ">Find your favourite podcasts with podWiki. Using spotify API you can search for any podcast from catalogue of 3.6M podcasts. <br />This project was made with <a target='_blank' href='https://reactjs.org' className='badge badge-primary' >REACT</a> , <a target='_blank' href='https://tailwindcss.com' className='badge badge-primary' >TailwindCSS</a> and
       <a target='_blank' href='https://daisyui.com' className='badge badge-primary' >daisyUI</a> 
      </p>
      <div className="alert alert-info shadow-lg mt-10">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span ><p >This project is still in development 🏗</p></span>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About