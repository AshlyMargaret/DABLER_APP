import React from 'react';
import MenuIcon from '../../assests/menu.svg';
import LogoIcon from '../../assests/compony_logo.png';
import './NavBar.css'; 

function NavBar() {
  return (
    <div className='navbar'>
        <div className="left_section">
            <div className="menuIcon">
            <img src={MenuIcon} alt="menuIcon" className='menuBarIcon' /> 
            </div>
            <div className="logoIcon">
            <img src={LogoIcon} alt="menuIcon" className='menuBarIcon' /> 
            </div>
        </div>
        <div className="right_section">
            <div className="accountHolder">
                <p>Renjith Viswanth</p>
            </div>
            <div className="designation">
                <p>AWS-DEV</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar