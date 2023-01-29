import React from 'react'
import img from '../assets/img.png';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1">
        <div className="text-center md:text-left md:ml-40">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-indigo-400 font-bold">
            <span className="text-indigo-600 md:text-7xl text-5xl">
              Eunoia
              <br />
            </span>
            Baby Shop
          </h1>
          <h4 className="md:text-2xl text-lg mr-24 ml-24 md:m-0 md:leading-normal leading-5 mt-4 font-bold text-white">
          EBS is dedicated to providing baby care products that are safe for your baby.
          </h4>
          <a href='#product' className="btn-primary mt-8 w-40 mb-0 md:text-center">Get Started</a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={img} alt="" className="w-2/3 mt-0 md:w-1/2 h-full object-cover" />
      </div>
    </section>
  )
}

export default Home