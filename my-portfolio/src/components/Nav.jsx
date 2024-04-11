import React from 'react'
import { navLinks } from '../constants/index.js'
import{close, menu} from '../assets'
import Button from './Button.jsx'
import { useState } from 'react'
import '../index.css'




const Nav = () => {

  const [toggle, settoggle] = useState(false)
  return (
    <nav className='flex w-full py-6 px-6 sm:px-10 justify-between items-center bg-black sm:fixed z-50'>
      <div className='flex'>
   <h1 className='text-white logo text-[24px] font-extrabold font-roboto tracking-widest mr-1 text-shadow-md'>Wandey</h1>
<button className='musicbtn px-2 py-1 rounded-full bg-orange'>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
</button>
</div>
    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
    {navLinks.map((nav,index) =>(
 <li key={nav.id} className={`font-poppins font-bold hover:text-white cursor-pointer text-grey text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
 <a href={`#${nav.id}`}>
  {nav.title}
 </a>
 </li>

))}
<Button text="Resume" className='button ml-[32px]'></Button> 
 </ul>
 <div className='sm:hidden'>
        <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain ' onClick={() => settoggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden' } p-6 absolute h-fit z-10 top-20 right-0 w-[96.5%] mx-1.5 my-2 min-w-[140px] rounded-xl sidebar bg-opacity-5 backdrop-filter backdrop-blur-xl bg-white`}>
        <ul className='list-none flex  flex-col justify-end items-center flex-1'>
{navLinks.map((nav,index) =>(
 <li key={nav.id} className={`font-poppins font-bold  cursor-pointer text-white  hover:text-grey text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-10'}`}>
 <a href={`#${nav.id}`}>
  {nav.title}
 </a>
 </li>
))}
<Button text="Resume" className="button mt-6"></Button>
      </ul>
        </div>
      </div>
  </nav> 
  )
}

export default Nav