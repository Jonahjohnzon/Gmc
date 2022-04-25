import React from 'react'
import Nationality from './nationality'
const Applicationform = () => {
  return (
    <div className=' h-full w-full flex justify-center items-center overflow-hidden'  id="Apply">
        <div className='w-full h-20  fixed top-0'  style={{backgroundImage:"url(images/Cyberworld.jpg)"}} ></div>
        <div className='h-5/6 w-5/6 bg-white shadow-lg shadow-black flex flex-col my-32 py-20'>
            <header className='text-center xsm:text-5xl mt-10 font-Poppins text-xl font-semibold'>Application Form</header>
            <div className='5/6 ml-9 xsm:ml-28 mt-5'>
            <form className='w-5/6'>
                <label for="guarantor" className='mb-2 mr-4 font-bold pl'>Guarantor Name:</label>
                <input type="text" className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md xsm:mb-5' id='guarantor'/>
                <div className='xsm:flex  mt-3 sm:mt-10  '>
                <label for="name" className='mb-2 mr-2 font-bold pl'>Applicant Name:</label>
                <input type="text"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='name'/>
                <label for="address" className='mb-2 mr-4 font-bold pl'>Address:</label>
                <input type="text"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='address'/>
                </div>
                <div className='xsm:flex  mt-3 sm:mt-10  '>
                <label for="phone" className='mb-2 mr-2 font-bold pl'>Phone No:</label>
                <input type="number"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='phone'/>
                <label for="Email" className='mb-2 mr-4 font-bold pl'>Email Address:</label>
                <input type="email"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='Email'/>
                </div>
                <label for="pep" className='mb-2 mr-4 font-bold pl'>Previous Work Place:</label>
                <input type="text" className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md xsm:mb-5' id='pep'/>
                <div className='xsm:flex  mt-3 sm:mt-10  '>
                <label for="nok" className='mb-2 mr-2 font-bold pl'>Next of kin:</label>
                <input type="text"  className='w-full xsm:w-4/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='nok'/>
                <label for="kin" className='mb-2 mr-4 font-bold pl '>Next of kin Address:</label>
                <input type="text"  className=' w-full xsm:w-4/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='kin'/>
                </div>
                <div className='xsm:flex  mt-3 sm:mt-5  '>
                <label for="nokj" className='mb-2 mr-2 font-bold pl'>Next of kin job:</label>
                <input type="textr"  className='w-full xsm:w-4/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='nokj'/>
                <label for="nokty" className='mb-2 mr-4 font-bold pl '>Next of kin to you:</label>
                <input type="text"  className='w-full xsm:w-2/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='nokty'/>
                </div>
                <div className='xsm:flex  mt-3 sm:mt-5  '>
                <label for="dob" className='mb-2 mr-2 font-bold pl'>Date of birth:</label>
                <input type="date"  className='xsm:w-2/6 w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='dob'/>
                <label  className='mb-2 mr-4 font-bold pl '>Nationality:</label>
                <div ></div>
                <Nationality   />
                </div>
                <div className='xsm:flex  mt-3 sm:mt-5  '>
                <label for="soo" className='mb-2 mr-2 font-bold pl'>State of origin:</label>
                <input type="text"  className=' w-full xsm:w-4/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='soo'/>
                <label for="lga" className='mb-2 mr-4 font-bold pl '>LGA:</label>
                <input type="text"  className=' w-full xsm:w-2/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='lga'/>
                </div>
                <div className='xsm:flex  mt-3 sm:mt-5  '>
                <label for="tribe" className='mb-2 mr-2 font-bold pl'>Tribe:</label>
                <input type="text"  className=' w-full xsm:w-4/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md mr-2' id='tribe'/>
                <label for="rel" className=' mb-2 mr-4 font-bold pl '>Religion:</label>
                <input type="text"  className=' w-full xsm:w-2/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='rel'/>
                </div>
                <div className='xsm:flex  mt-3 sm:mt-5  '>
                <label for="rela" className='mb-2 mr-2 font-bold pl'>Relationship:</label>
                <select  className='w-full xsm:w-2/6 border-2  border-slate-600 h-10 text-lg font-bold rounded-md mr-2 mb-2'>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>   
                </select>
                <label for="nos" className='mb-2 mr-4 font-bold pl '>Name of husband/wife:</label>
                <input type="text"  className='w-full xsm:w-2/6 border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='nos'/>
                </div>
                <label for="phone" className='mb-2 mr-2 font-bold pl'>Gender:</label>
                <select  className=' w-full border-2  border-slate-600 h-10 text-lg font-bold rounded-md mr-2 mb-2'>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>   
                </select>
                <label for="Moi" className='mb-2 mr-4 font-bold pl '>Means Of ID:</label>
                <input type="text"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md' id='Email'/>
                <label for="expiration" className='mb-2 mr-2 font-bold pl mt-4'>Expiration Date:</label>
                <input type="date"  className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md  mr-2' id='expiration'/>
                <label className='mb-2 mr-2 font-bold pl'>Upload Passport</label>
                <input type='file'   className='w-full border-2  border-slate-600 h-10 placeholder:pl-3 text-lg font-bold rounded-md  mr-2' />
                <div className='w-full flex justify-center mt-3'>
                <input type='submit' value='Submit' className='bg-blue-900 px-14 py-2 text-white rounded-md hover:bg-blue-800 ' />
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Applicationform