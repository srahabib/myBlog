import React from 'react'

const Searched = ({filtered}) => {
    console.log(filtered);
  return (
    <div>
       <div>hiiiii</div>

         {/* {
            filtered.map((post, index) => (
                <div className="box" key={index}>
                <p style={{color :"red"}}>{post.node.title}
                </p>
                </div>))
         } */}

         
        {filtered}+ from searched



      
    </div>
  )
}

export default Searched
