import React from 'react'
import {Header} from './'
import {Footer} from './'
import {Up} from './'


const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
       

        
        
       
    </>
  )
}

export default Layout
