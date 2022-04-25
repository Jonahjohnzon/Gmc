import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
const Footer = () => {
  return (
    <div className='bg-[rgb(0,3,30,0.9)] h-full overflow-hidden flex flex-col' id="Contact">
    <div className='mt-10 h-full w-full  flex justify-center items-center font-Poppins'>
      
        <div className='w-full '>
            <div className='flex flex-col-reverse xsm:flex-col sm:flex-row w-6/6 h-5/6 sm:justify-around items-center'>
              <div className=' w-5/6 sm:w-3/6 xsm:flex justify-around'>
            <div>
              <div className='w-full'>
                <div className='font-lighter text-2xl text-blue-600 my-5'>Get In Touch </div>
              <div><h1 className='text-white text-md'>Address:</h1><h2 className='text-white w-4/6 md:w-3/6 text-xs lg:text-sm'>NO. 11, ROAD 7, SUNVIEW ESTATE, OPPOSITE CROWN ESTATE, SANGOTEDO-AJAH, , SANGOTEDO-AJAH, LAGOS STATE</h2></div>
              <div><h1 className='text-white text-md'>Phone number:</h1><h2></h2></div>
              <div><h1 className='text-white text-md'>Email:</h1><h2></h2></div>
              <div><h1 className='text-white text-md'>Facebook:</h1><h2></h2></div>
              </div>
            </div>
            <div>
              <div className='w-full'>
                <div className='font-lighter text-2xl text-blue-600 my-5 whitespace-nowrap'>Quick Links </div>
             <Link to='/#Home'> <div className='text-white text-md hover:text-blue-600 cursor-pointer whitespace-nowrap '>Home</div></Link>
             <Link  to='/application#Apply'>  <div className='text-white text-md hover:text-blue-600 cursor-pointer whitespace-nowrap'>Job Application Form</div></Link>
             <Link to="/#About">  <div className='text-white text-md hover:text-blue-600 cursor-pointer whitespace-nowrap'>Guarantors Form</div></Link>
             <Link to="#Contact">  <div className='text-white text-md hover:text-blue-600 cursor-pointer whitespace-nowrap'>About</div></Link>
              </div>
            </div>
            </div>
            <div className='mt-10'>
                <form className='flex flex-col h-full justify-around '>
                    <textarea  placeholder="Contact Us"  className='w-80 h-40 rounded-md placeholder:text-black placeholder:pl-3 mt-3 placeholder:font-Poppins'/>
                    <input type="email" placeholder='Email' className='w-80 rounded-sm h-10 placeholder:text-black placeholder:pl-3 mt-3 placeholder:font-Poppins'/>
                    <button className='z-10 bg-blue-900 p-2 mt-2 text-white rounded-sm hover:bg-blue-800'>Send</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    <div><h3 className='text-center text-white mt-10 text-xs '>&copy; GMC SECURITY SERVICE SITE.ALL RIGHT RESERVED</h3></div>
    </div>
  )
}

export default Footer