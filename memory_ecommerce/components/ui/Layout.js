import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ProductsBar from './ProductsBar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <ProductsBar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout