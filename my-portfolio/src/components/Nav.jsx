import React from 'react'
import { navLinks } from '../constants/index.js'
import Button from './Button.jsx'

import '../index.css'




const Nav = () => {
  return (
    <nav className='flex w-full py-6 px-10 justify-between items-center bg-black'>
      <div className='flex'>
   <h1 className='text-white text-[20px] font-extrabold font-roboto tracking-widest'>Wandey</h1>
<button className='musicbtn'>
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
<Button text="Resume"></Button> 
 </ul>
  
  </nav> 
  )
}

export default Nav