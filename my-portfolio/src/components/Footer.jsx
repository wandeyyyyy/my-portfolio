import React from 'react'
import { linkedin, github, twitter } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black footer w-[100%]'>
        <div className='footer1 w-[90%] px-4'>
<ul className=' flex space-x-4 md:space-x-8'>
<li><a href="https://linkedIn.com/in/yewandeadeyemi231408" target='_blank'><img src={linkedin} alt="" className='w-[18px] md:w-[24px]'/></a></li>
<li><a href="https://github.com/wandeyyyyy" target='_blank'><img src={github} alt="" className=' w-[18px] md:w-[24px]'/></a></li>
<li><a href="https://twitter.com/wande_adeyemi" target='_blank'><img src={twitter} alt="" className='w-[18px] md:w-[24px]'/></a></li>
</ul>
<p className='text-grey'>Designed & Built by <br/> Wande Adeyemi, 2023</p>
</div>
    </div>
  )
}

export default Footer