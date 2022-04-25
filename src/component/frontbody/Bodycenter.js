import React from 'react'

const Bodycenter = () => {
  return (
      <div className='flex flex-col items-center w-full  ' id='About'>
    <div className='mt-10 w-5/6'>
        <div className='flex justify-evenly mb-10 text-center text-sm xsm:text-base  text-white font-Poppins'>
        <div className='w-20 h-20 xsm:w-32 md:w-40 md:h-32 bg-blue-900 flex items-center justify-center  shadow-lg shadow-zinc-700'><h4 className='sm:w-3/6'>Company Security</h4></div>
        <div className='w-20 h-20 xsm:w-32 md:w-40 md:h-32 bg-blue-900 flex items-center justify-center shadow-lg shadow-zinc-700'><h4 className='sm:w-3/6'>Event  Security</h4></div>
        <div className='w-20 h-20 xsm:w-32 md:w-40 md:h-32 bg-blue-900 flex items-center justify-center  shadow-lg shadow-zinc-700'> <h4 className='sm:w-3/6'>Personal Security</h4></div>
        </div>
        <div className='md:flex md:mt-20 md:mb-10'>
            <div className='w-full md:w-[250vw] h-80 bg-cover bg-center' style={{backgroundImage:"url('images/Secure.jpg')"}}></div>
            <div className='bg-white flex justify-center items-center  my-5'><h3 className='w-5/6 h-5/6  py-5 font-Poppins'>G-MERCYCROWN SERVICES LIMITED is a security servicing company registered in Nigeria for the provision of advanced security technology services for
                 Our expertise is in the fields of special protection, consulting, and instructing. GMC Security was set up to meet the demand for professional security knowledge
                  and capabilities for the industrial, private and government sectors.</h3></div>
        </div>
        <div className='md:flex md:flex-row-reverse md:mb-10'>
            <div className='w-full h-80 bg-cover bg-center  md:w-[300vw] md:mt-5' style={{backgroundImage:"url('images/Guard.jpg')"}}></div>
            <div className='bg-white flex justify-center items-center  my-5'><h3 className='w-5/6 h-5/6  py-5 font-Poppins'>We have established our reputation at the forefront of security companies in Nigeria, utilizing a wide range of the most advanced security systems, teams of high-standard professional guards and leading security means using the latest methods, technological equipment and knowledge. 
Our company is the first choice of many security-conscious organizations, businessmen, and high-profile figures. Among our clients are prime ministers, ministers, high-ranking visitors from abroad including the Pope, and many others.</h3></div>
        </div>
        <div className='md:flex md:mt-20 md:mb-10'>
            <div className='w-full md:w-[250vw] h-80 bg-cover bg-center ' style={{backgroundImage:"url('images/camera.webp')"}}></div>
            <div className='bg-white flex justify-center items-center  my-5'><h3 className='w-5/6 h-5/6  py-5 font-Poppins'> We at GMC also provide top quality, and innovative IT products,sercurity support services like security cameras and security gadgets, and general turn-key solutions to clients from various industries including financial institutions, public sector, real estate, hotel / hospitality, education, oil and gas etc.
Our partnerships, combined with our quest for innovation and passion to deliver an exceptional customer experience, have been rewarding and have earned us an enormous amount of goodwill despite the highly competitive terrain of our business environment.</h3></div>
        </div>
        </div>
        <div className='w-full'>
            <div className='h-80 relative w-full bg-cover bg-center z-1 ' style={{backgroundImage:"url('images/New.jpg')"}}>
          <div className='absolute w-full h-full flex flex-col items-center justify-center' style={{backgroundColor:'rgb(0,3,30,0.9)'}}>
              <div className='text-white font-extralight text-2xl xsm:text-6xl font-Poppins z-10  '><h1>Your Day/Night Guard</h1></div>
              <h3 className='text-white xsm:text-xl font-Poppins w-3/6 text-center mt-6 font-light z-10'>We provide our clients with consistent security services.Protcting lives and properties </h3>
              <button className='z-10 bg-blue-900 p-2 mt-2 text-white rounded-sm hover:bg-blue-800'>LEARN MORE</button>
          </div>
            </div>
        </div>

        <div className='w-full my-8 flex justify-around' >
            <div className='w-40 h-16 bg-cover' style={{backgroundImage:"url('images/3c.jpg')"}}></div>
            <div className='w-40 h-16 bg-cover' style={{backgroundImage:"url('images/micro.jpg')"}}></div>
            <div className='w-40 h-16 bg-cover' style={{backgroundImage:"url('images/trans.jpg')"}}></div>
        </div>
    </div>
  )
}

export default Bodycenter