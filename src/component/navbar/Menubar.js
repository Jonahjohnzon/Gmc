import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
const Menubar = ({setDisplay}) => {
  const [color,setColor]=useState('transparent')
  const [color1,setColor1]=useState('transparent')
  const [color2,setColor2]=useState('transparent')
  const [color3,setColor3]=useState('transparent')

  const change1=()=>{
    setColor('rgb(96,165,250)')
    setDisplay(false)
    if(setDisplay==false){
      setColor('transparent')
    }
    
  }
  const change2=()=>{
    setColor1('rgb(96,165,250)') 
    setDisplay(false)
    if(setDisplay==false){
      setColor1('transparent')
    }
  }
  
  const change3=()=>{
    setColor2('rgb(96,165,250)')
    setDisplay(false)
    if(setDisplay==false){
      setColor2('transparent')
    }
    
  }
  const change4=()=>{
    setColor3('rgb(96,165,250)')
    setDisplay(false)
    if(setDisplay==false){
      setColor3('transparent')
    }
  }
  return (
    <div className=' backdrop-blur text-blue-400 text-center h-32 md:hidden select-none'>
        <ul className='flex flex-col h-full justify-around cursor-pointer'>
          <Link to="/#Home">   <li style={{backgroundColor:color}} onClick={change1}>Home</li></Link> 
          <Link to="/application#Apply"> <li style={{backgroundColor:color1}} onClick={change2}>Job Application Form</li></Link> 
           <Link to="/#About"> <li style={{backgroundColor:color2}} onClick={change3}>Guarantor Form</li></Link> 
           <Link to="#Contact">  <li style={{backgroundColor:color3}} onClick={change4}>Contact</li></Link> 
        </ul>
        </div>
  )
}

export default Menubar