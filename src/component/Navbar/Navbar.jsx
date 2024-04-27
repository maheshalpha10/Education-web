import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';



function Navbar() {
  const [sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ?setsticky(true):setsticky(false);
    })
  },[]);
  const [mobileMenu,setmobileMenu]= useState(false)
  const toggle=()=>{
    mobileMenu ?setmobileMenu(false):setmobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav': ''} `}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? "": 'hide-mobile-menu'}>
        <li><Link to='Hero container' smooth={true} offset={0} duration={500}>Home</Link></li>
       <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Caampus</Link></li>
        <li><Link to='test' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon'onClick={toggle}/>
    </nav>
  )
}

export default Navbar
