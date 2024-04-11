import React , {useEffect}from 'react'
import MyForm from './MyForm'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1200,
      
        easing: 'ease',  

      }
    );
  }, []);
  return (
    <section id='contact' className='h-[100%] bg-black' data-aos="fade-up">
  <h1 className=' text-grey/40 md:text-[170px] sm:text-[100px] text-[50px]  font-poppins font-extrabold text-center md:text-left'>Contact
    </h1>
    <p className=' text-orange md:text-[60px] mt-[-58px] sm:mt-[-100px] md:mt-[-140px] text-[32px] text-center sm:text-[48px] font-poppins font-semibold '>Get In Touch</p>
    <div className='text-white sm:text-[18px] leading-loose mt-1 font-medium mx-auto md:w-[60%] w-[95%]'>
    Drop a line,ask for my resume or see if we can build somehing amazing together? I'd love to here from you! <br/>

Please fill in your information below and i look foward to hearing from you!

<div className='mt-16'>
  <MyForm/>
</div>
    </div>
    </section>
  )
}

export default Contact