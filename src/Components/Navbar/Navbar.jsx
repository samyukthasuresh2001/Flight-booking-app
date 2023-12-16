import React,{useState} from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import{CgMenuGridO} from 'react-icons/cg'

import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu')
    const showNavbar = ()=>{
      setActive('navBarMenu showNavBar')
    }

    const removeNavbar = ()=>{
      setActive('navBarMenu ')
    }

//background color for second navbar ==>
const [noBg, addBg] = useState('navBarTwo')
const addBgColor = ()=>{
  if(window.scrollY >= 10){
    addBg('navBarTwo navbar_With_Bg')
  }else{
    addBg('navBarTwo')
  }
}
window.addEventListener('scroll' , addBgColor)




  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon' />
        </div>

        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate className='icon' /> Support</li>
          <li className='flex'> <AiOutlineGlobal className='icon' />Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>

        </div>
      </div>

      <div className={noBg}>
        <div className='logoDiv'>
          <img src={logo} className='Logo' />
        </div>


        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar}  className="listItem">Home</li>
            <li onClick={removeNavbar} className="listItem">About</li>
            <li  onClick={removeNavbar}className="listItem">Offers</li>
            <li  onClick={removeNavbar}className="listItem">Seats</li>
            <li onClick={removeNavbar} className="listItem">Destinations</li>

          </ul>

          <button onClick={removeNavbar} className='btn flex btnOne'>
            Contact
          </button>
        </div>

        <button className='btn flex btnTwo'>
          Contact
        </button>

        <div onClick={showNavbar} className="toggleIcon">
          <CgMenuGridO className='icon'/>
        </div>


      </div>
    </div>

  )
}

export default Navbar