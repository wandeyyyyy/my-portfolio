import React from 'react'
import Button from './Button'
import { laptop } from '../assets'
import '../index.css'
const Home = () => {
  return (
    <section id='home' className='text-white  bg-black sm:pt-36'>
      <div className='md:flex  w-[100%] justify-between items-center'>
      <div className='text-center md:w-[50%] md:text-start'>
     <h1 className=' text-[48px] sm:text-[62px] font-roboto'>Hi, I am <br/>
      <span className='text-orange'>YEWANDE.</span>
  
     </h1>
     <p className='sm:text-[34px] text-[20px]'>Frontend/React Developer</p>
     <p className='text-[20px] font-normal italic text-grey mt-10'>"passionate about building beautiful things"</p>
     <Button text="Contact Me" id='contact' className="button buttonContact mt-[70px]"/>
     </div>
     <div className='md:w-[50%] mt-10'>
      <img src={laptop} alt="laptop" className='w-[100%] laptopimg' />
     </div>
     </div>
      </section>
  )
}

export default Home