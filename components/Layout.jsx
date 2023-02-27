import React from 'react'
import {Header} from './'
import {Footer} from './'
import {Newsletter} from './'
import {Marquee} from './'


const Layout = ({children}) => {
  return (
    <>
        <Header />
        
        {children}
        <Newsletter />
        <Footer />
       
    </>
  )
}

export default Layout
