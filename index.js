import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Product from './Product';
import Footer from './Footer'

const index = () => {
  return (
    <>
        <Navbar />
        <section id='home'>
          <Home />
        </section>
        <section id='product'>
          <Product />
        </section>
        <Footer />
    </>
  )
}

export default index