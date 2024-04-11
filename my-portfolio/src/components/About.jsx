import React , {useEffect} from 'react'
import { code, phone, solve } from '../assets'
import AOS from 'aos';
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1200,
        offset: 200,
        easing: 'ease',  

      }
    );
  }, []);
  return (
    <section id='about' className='bg-black h-[100%]'>
      <div className=' text-white '>
    <h1 className=' text-grey/40 md:text-[170px] sm:text-[100px] text-[80px] md:tracking-widest font-poppins font-extrabold text-center md:text-left'>About 
    </h1>
      <p className=' text-orange md:text-[60px] mt-[-70px] sm:mt-[-100px] md:mt-[-140px] text-[32px] text-center sm:text-[48px] font-poppins font-semibold '>What I do</p>
    </div>
    <div className='text-white font-opensans mt-[70px] leading-loose mx-auto w-[95%] md:w-[70%] font-medium sm:text-[20px]' data-aos="fade-up-right">
    I’m a Frontend Developer. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.I am  Well-organised, inquisitive, also pay high attention to detail. Interested in the entire MERN Stack spectrum and looking foward to working on ambitious projects with positive people. <br/> <br/>

I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, building small and medium web apps, features, animations, and coding interactive layouts.


    </div>
    <div className=' text-white w-full md:space-x-4 space-y-4 md:space-y-0 md:flex mt-20' >
<div className='skills md:w-[33.3%] md:p-10 p-6' data-aos="fade-up-right">
  <h1 className='text-[32px] font-semibold'>Web <br/> Development</h1>
  <p className='font-opensans leading-loose font-medium mt-4'>I create awesome websites and also the fix technical aspects, such as its performance and capacity.</p>
  <img src={code} alt="coding" className='mt-6'/>
</div>
<div className=' skills md:w-[33.3%] p-10' data-aos="fade-up-right">
  <h1 className='text-[32px] font-semibold'>Problem <br/> Solving</h1>
  <p className='font-opensans leading-loose font-medium mt-4'>I find desired solutions to a problem, and applying best practices to achieve the best and befitting result.</p>
  <img src={solve} alt="problem-solving" className='mt-6' />
</div>
<div className='skills md:w-[33.3%] p-10' data-aos="fade-up-right">
  <h1 className='text-[32px] font-semibold'>Responsive <br/> Design</h1>
  <p className='font-opensans leading-loose font-medium mt-4'>Using the best technologies and frame works to make the best responsive website that spreads across all device.</p>
  <img src={phone} alt="responsive" className='mt-6'/>
</div>
    </div>
    </section>
   
  )
}

export default About