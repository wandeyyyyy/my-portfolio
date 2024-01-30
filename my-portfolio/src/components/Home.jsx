import React from 'react'
import Button from './Button'
import '../index.css'
const Home = () => {
  return (
    <section className='text-white h-screen bg-black'>
      <div className='text-center sm:text-start'>
     <h1 className=' text-[52px] sm:text-[72px] font-roboto font-bold'>Hi, I am <br/>
      <span className='text-orange'>YEWANDE</span>
  
     </h1>
     <p className='sm:text-[48px] text-[20px]'>MERN Stack Developer</p>
     <p className='text-[20px] font-normal italic text-grey mt-10'>"passionate about building beautiful things"</p>
     <Button text="Contact Me" className="button buttonContact mt-10"/>
     </div>
      </section>
  )
}

export default Home