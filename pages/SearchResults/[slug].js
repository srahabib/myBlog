import React from 'react'
import Model from '../../components/Model'
import Searched from'../../components/Search.jsx'
import { useState } from 'react'

import filtered from '../../components/Search'


const SearchResults = ({post}) => {
  








  return (
    <div>
      <div style={{color:"red"}}>hi</div>
      
      {/* {

        filtered.map((post, index) => (
          <div className="box" key={index}>
          <p style={{color :"red"}}>{post.node.title}
          </p>
          </div>))

          

      } */}

    
        <Searched />

        
        <Model />
       
    </div>
  )
}

export default SearchResults
