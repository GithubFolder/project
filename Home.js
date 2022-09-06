import React from 'react'
import { Image1 } from './Home.style';
import Image from './image.jpg';

function Home() {
  return (
       <div>
        <h1 style = {{textAlign:"center"}}>Sundharam Finance</h1><br/><br/><br/>
        <Image1 src={Image}/>
      </div>
  )
}

export default Home;
