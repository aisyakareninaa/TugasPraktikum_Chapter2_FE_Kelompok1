import React from 'react'
import img from '../assets/img.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col-reverse items-center mt-12 md:mt-0"
    >
      <div className="flex-2 md:flex-1">
        <div className="text-center md:text-left md:ml-40">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-indigo-400 font-bold">
            <span className="text-indigo-600 md:text-7xl text-5xl">
              Eunoia
              <br />
            </span>
            Baby Shop
          </h1>
          <h4 className="md:text-2xl text-lg mr-24 ml-24 md:m-0 md:leading-normal leading-5 mt-4 font text-black">
          Trusted essentials for your baby. Find the cutest outfits and playable plushie from head to toe and dazzling heaven just on baby angel. It is the place where your baby comes first         </h4>
          <a href='#member' className="btn-primary mt-8 w-40 mb-24 text-center md:text-left">Get Started</a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={img} alt="" className="w-2/3 mt-0 md:w-1/2 h-full object-cover" />
      </div>
    </section>
  )
}

export default Home
