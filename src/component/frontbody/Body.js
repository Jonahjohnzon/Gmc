import React from 'react'
import Bodycenter from './Bodycenter'
import { Link } from 'react-router-dom'
const Body = () => {
  return (
      <>
    <div className="  w-full h-[750px] sm:h-[650px] shadow-xl shadow-zinc-700 bg-cover bg-center bg-no-repeat md:h-[708px] flex items-center  font-Open overflow-hidden" style={{backgroundImage:"url(images/Cyberworld.jpg)"}}>
    <div >
        <div className='h-[50vh] xsm:h-2/6 md:h-full md:mt-10 flex flex-col justify-between items-center md:items-start xsm:items-start text-white lg:ml-40 md:ml-20 xsm:ml-10 md:w-full '>
        <div className='text-3xl  md:text-6xl font-bold   '><h1 className='hidden md:block'>WE ARE</h1>
        <div className='mt-10 md:font-extrabold   text-blue-400'>
         <h1 className=''>G-MERCYCROWN </h1>
         <h1>SERVICES LIMITED</h1>
         </div></div>
        <div className='h-40 flex flex-col justify-around my-10 xsm:my-2 sm:my-10 '>
        <div className='h-1 md:w-2/6 bg-blue-400'></div>
            <h1 className='font-light xsm:text-lg md:text-5xl  py-5 xsm:py-0 '>#1 SECURITY SERVICING COMPANY</h1>
            <div className='h-1 md:w-2/6 bg-blue-400 '></div>
        </div>
        <div className='w-2/3  md:w-1/2 lg:text-lg xsm:text-sm backdrop-blur'>
            <h3>
            We are a professional security Servicing company providing quality and innovative all round security services to the satisfaction
             of our clients whilst promoting employees  self actualization and welfare, and increasing share holders value
            </h3>
        </div>
        </div>
        <div>
     <div></div>
     <div className='fixed bottom-5 right-3 z-50'>
       <Link to="/application"> <div className='w-20 h-20 md:w-40 md:h-40 rounded-full bg-blue-900 flex items-center justify-center shadow-lg shadow-black' >
             <div className='w-5/6 h-5/6 rounded-full bg-white shadow-lg shadow-zinc-600 flex flex-col items-center justify-center font-bold md:text-xl text-blue-900 hover:text-white hover:bg-blue-600 cursor-pointer '>
                 <h1>Apply</h1>
                 <h1>Now</h1>
             </div>
         </div></Link> 
     </div>
        </div>
    </div>

    </div>
    <Bodycenter/>
    </>
  )
}

export default Body