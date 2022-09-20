import React from 'react'
import Homeimg from './Homeimg.jpg'

function Home() {
  return (
    <>
     <div className='homeinfo'>
     <h1 className='homename'><em>Welcome Nerds!</em></h1>
     <p className='hometext'>Hurray! Welcome to the land of learners! Here we have all the books you might need, whether fiction, thriller, romance, educational, business, entertainment, You name it. All the best as you quench your knowledge thirst!</p>
     <img className='homeImg' src={Homeimg} alt='Homeimg'/>
     </div>

     </>
   
  )
}

export default Home