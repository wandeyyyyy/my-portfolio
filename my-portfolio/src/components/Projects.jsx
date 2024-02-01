import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='h-[100%] bg-black'>
        <h1 className=' text-grey/40 md:text-[170px] sm:text-[100px] text-[50px]  font-poppins font-extrabold text-center md:text-left'>Projects
    </h1>
    <p className=' text-orange md:text-[60px] mt-[-58px] sm:mt-[-100px] md:mt-[-140px] text-[32px] text-center sm:text-[48px] font-poppins font-semibold '>My Works</p>

    <div className='w-[100%] project-section mt-[30px] md:mt-[50px]'>
      <div className='flex w-[100%] main-project'>
        <div className='work w-[50%] bg-orange h-[100px]'></div>
        <div className='project w-[50%] bg-grey h-[100px]'></div>
      </div>
      <div className='flex w-[100%] main-project' >
      <div className='project w-[50%] bg-grey h-[100px]'></div>
        <div className='work w-[50%] bg-orange h-[100px]'></div>
      </div>
      <div className='flex w-[100%] main-project' >
      <div className='work w-[50%] bg-orange h-[100px]'></div>
        <div className='project w-[50%] bg-grey h-[100px]'></div>
      </div>
      <div  className='flex w-[100%] main-project'>
      <div className='project w-[50%] bg-grey h-[100px]'></div>
        <div className='work w-[50%] bg-orange h-[100px]'></div>
      </div>
      <div  className='flex w-[100%] main-project'>
      <div className='work w-[50%] bg-orange h-[100px]'></div>
        <div className='project w-[50%] bg-grey h-[100px]'></div>
      </div>
      <div className='flex w-[100%] main-project'>
      <div className='project w-[50%] bg-grey h-[100px]'></div>
        <div className='work w-[50%] bg-orange h-[100px]'></div>
      </div>
    </div>
    </section>
  )
}

export default Projects