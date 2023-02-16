import React , {useEffect , useState } from 'react'
import { Layout } from '../components'
//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene } from 'three'



function MyApp({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   const test = new SceneInit('myThreeJsCanvas');
  //   test.initialize();
  //   test.animate();

    
  //   // const glftLoader = new GLTFLoader();
    
  //   // glftLoader.load('/old_computers/scene.gltf', (gltf) => {

      
  //   //   //gltf.scene.scale.set(1.2, 1.2, 1.2);
  //   //   test.scene?.add(gltf.scene);

  //   //   // console.log(loadedModel);
  //   // });


    


    


  // }, []);

  return (
    
    <Layout>
       

      <Component {...pageProps} />


      

    </Layout>
    
  )
  
}

export default MyApp
