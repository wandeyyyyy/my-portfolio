import React from 'react'

const About = () => {
  return (
    <section className='bg-black'>
      <div className='relative text-white '>
    <h1 className='absolute text-grey/40 md:text-[170px] sm:text-[100px] text-[80px] md:tracking-widest font-poppins font-extrabold text-center md:text-left'>About </h1>
      <p className='absolute text-orange md:text-[60px] text-[32px] sm:text-[48px]  sm:bottom-[-120px] font-poppins font-medium bottom-[-90px] md:bottom-[-190px]  left-[100px] md:left-[450px] sm:left-[200px]'>What I do</p>
    </div>
    <div className='text-white mt-[200px] md:mt-[270px] font-opensans leading-loose mx-auto w-[95%] md:w-[70%] font-bold text-[20px]'>
    I’m a MERN stack Developer. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.I am  Well-organised, inquisitive, also pay high attention to detail. Fan of Music, outdoor activities. Interested in the entire MERN Stack spectrum and looking foward to working on ambitious projects with positive people. <br/> <br/>

I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, building small and medium web apps, features, animations, and coding interactive layouts.


    </div>
    <div className=' text-white w-full md:space-x-4 space-y-4 md:space-y-0 md:flex mt-20'>
<div className='skills md:w-[33.3%]'>
  <h1 className='text-[32px] font-semibold'>Web <br/> Development</h1>
  <p className='font-opensans leading-loose font-bold'>I create awesome websites and also the fix technical aspects, such as its performance and capacity.</p>
</div>
<div className=' skills md:w-[33.3%]'>
  <h1 className='text-[32px] font-semibold'>Problem <br/> Solving</h1>
  <p className='font-opensans leading-loose font-bold'>I find desired solutions to a problem, and applying best practices to achieve the best and befitting result.</p>
</div>
<div className='skills md:w-[33.3%]'>
  <h1 className='text-[32px] font-semibold'>Responsive <br/> Design</h1>
  <p className='font-opensans leading-loose font-bold'>Using the best technologies and frame works to make the best responsive website that spreads across all device.</p>
</div>
    </div>
    </section>
   
  )
}

export default About