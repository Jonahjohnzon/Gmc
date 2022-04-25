import React,{useState} from 'react'
import {MenuIcon,XIcons} from '@heroicons/react/outline'
import Menubar from './Menubar'

import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
    const [color,setcolor]=useState('rgb(30,64,175)')
    const [color1,setcolor1]=useState('white')
    const [color2,setcolor2]=useState('white')
    const [color3,setcolor3]=useState('white')
    const [display,setDisplay]=useState(false)
    const dropdown=()=>{
   setDisplay(!display)
    }
  const change=()=>{
      setcolor1('white')
      setcolor2('white')
      setcolor3('white')
        setcolor('rgb(30,64,175)')
    }
    const change1=()=>{
        setcolor('white')
      setcolor2('white')
      setcolor3('white')
        setcolor1('rgb(30,64,175)')
    }
    const change2=()=>{
        setcolor1('white')
      setcolor('white')
      setcolor3('white')
        setcolor2('rgb(30,64,175)')
    }
    const change3=()=>{
        setcolor1('white')
      setcolor2('white')
      setcolor('white')
        setcolor3('blue')
    }
  return (
      <div className='w-full  fixed z-50 h-20' id="Home">
  <nav className='backdrop-blur-md flex justify-between m-0  h-full'>
      <div className="flex justify-between w-[85vw] lg:w-[78vw]">
          <img src='images/LOGO.jpg' className='w-[120px] h-[80px]' />
          <ul className='hidden md:flex text-white justify-between md:w-[59vw] lg:w-[52vw] items-center lg:font-light  lg:text-2xl md:text-lg font-Poppins '>
             <Link to="/#Home" onClick={change}> <li className='hover:text-blue-400 cursor-pointer ' style={{color:color}}>Home</li></Link>
             <Link to="/application#Apply" onClick={change1}> <li className='hover:text-blue-400 cursor-pointer' style={{color:color1}}>Job Application Form</li></Link>
             <Link to="/#About"  onClick={change2}> <li className='hover:text-blue-400 cursor-pointer'  style={{color:color2}} >About Us</li></Link>
             <Link to="#Contact" onClick={change3}> <li className='hover:text-blue-400 cursor-pointer'  style={{color:color3}} onClick={() => window.location.replace("/#Contact")}>Contact</li></Link>
          </ul>
      </div>
      <MenuIcon className='w-11 md:hidden text-white mr-2' onClick={dropdown} />
  </nav>
  {display && <Menubar setDisplay={display=>setDisplay(display)}/>}
  </div>
  )
}

export default Navbar