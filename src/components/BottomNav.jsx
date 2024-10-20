import React from 'react'
import { Link } from 'react-router-dom';

import { GoHomeFill } from 'react-icons/go';
import { RiCoupon2Line } from "react-icons/ri";
import { PiUserDuotone } from "react-icons/pi";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link 
        to="/" 
        className="tab-link"
      >
        <GoHomeFill size={24}/>
        <span>Home</span>
      </Link>

      <Link 
        to="/my-coupons" 
        className="tab-link"
      >
        <RiCoupon2Line size={24} />
        <span>My Coupons</span>
      </Link>

      <Link 
        to="/profile" 
        className="tab-link"
      >
        <PiUserDuotone size={24} />
        <span>Me</span>
      </Link>
    </nav>
  )
}
export default BottomNav