import React from 'react'
import Model from '../../components/Model'
import Searched from'../../components/Search.jsx'
import { useState } from 'react'

import filtered from '../../components/Search'
import {useRouter} from 'next/router';

export default () => {


  const router = useRouter()
  console.log(router.query);


  return (
    <div> 
      router is {router.query.slug}
   
    </div>
  )


}
