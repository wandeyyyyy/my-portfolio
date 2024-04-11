import React , {useEffect} from 'react'
import { skillset } from '../assets'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Skills = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        offset: 200,
        easing: 'ease',  

      }
    );
  }, []);
  return (
    <section className=' bg-black h-[100%]'>
        <div className='w-[100%] flex flex-col-reverse md:flex-row  md:items-center ' data-aos="fade-up-right">
    <div className='relative w-[100%] md:w-[60%]'>
    <h1 className='relative text-grey/40 md:text-[170px] sm:text-[100px] text-[80px] md:tracking-widest font-poppins font-extrabold text-center md:text-left'>Skills
    </h1>
      <p className=' text-orange md:text-[60px] text-center md:text-start font-semibold  text-[28px] font-poppins  t-[200px]'>My Coding Journey</p>
      <p className='text-white sm:text-[18px] font-opensans mt-[20px] md:mt-auto  font-medium leading-loose'>
 My journey started when a friend of mine introduced me into tech. I have a laptop and i saw it as an opportunity to learn a good and profitable skill. I made lot of research on which stack to venture into. I am someone who loves design,creativity and would want to develop experiences that make people's live simple, so i chose Web Development. I used resources from freecodecamp,w3schools as a beginner and practiced immensely. Later on, i enrolled in a bootcamp, now i can create a responsive functioning website and im so much happy about it.
      </p>
    </div>
   
    <div className='md:w-[40%] mt-20 md:mt-0 w-[50%] text-white text-center mx-auto'>
      <div className='w-[100%] flex justify-center'>
<img src={skillset} alt="" className='md:w-[80%] skillsimg'  data-aos="zoom-in" />
</div>
    </div>
    </div>


    <div className='mt-20 md:mt-10 text-white  sm:text-[18px] font-bold bg-black '>
      <p>Here are some technologies i have used:</p>
      <ul className='mt-10 w-[100%] grid md:grid-cols-2 '>
<li className='tech' data-aos="fade-up-right">HTML</li>
<li className='tech' data-aos="fade-up-right">CSS</li>
<li className='tech' data-aos="fade-up-right"> JAVASCRIPT</li>
<li className='tech' data-aos="fade-up-right">REACT</li>
<li className='tech'  data-aos="fade-up-right">TAILWIND</li>
<li className='tech' data-aos="fade-up-right">MONGO</li>
<li className='tech' data-aos="fade-up-right">NODEJS</li>
<li className='tech'data-aos="fade-up-right">GIT</li>
      </ul>
    </div>
    </section>
  )
}

export default Skills