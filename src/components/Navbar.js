import React from 'react';
import './css/navbar.css';
import {Link} from 'react-scroll'

function Navbar() {

  function menu() {
    const humbuerger = document.querySelector('.humburger');
    const humbuergerLine = document.querySelectorAll('.humburger-line');

    humbuergerLine.forEach((element) => {
      element.classList.toggle('menu');
    });

    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-menu');
  }



  return (
    <>
      <div className='navbarcontainer'>

        <div className='navbar'>
          <div className='logo'>

          </div>
          <div className='items'>
            <ul>
              <li><a href="/">HOME</a><div className='underline'></div></li>
              <li><a href="#aboutus">ABOUT ME</a><div className='underline'></div></li>
              <li><a href="#experience">EXPERIENCE</a><div className='underline'></div></li>
              <li><a href="#education">EDUCATION</a><div className='underline'></div></li>
              <li><a href="#projects">PROJECTS</a><div className='underline'></div></li>
              <li><a href="/contact">CONTACT ME</a><div className='underline'></div></li>
            </ul>
          </div>

        </div>
        {/* <div className='navline'></div> */}

        <div className='humburger' onClick={menu}>
          <div className='humburger-line'></div>
          <div className='humburger-line'></div>
          <div className='humburger-line'></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
