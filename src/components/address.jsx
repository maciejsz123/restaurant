import React from 'react';
import '../styles/address.sass';
import logo from '../images/logo.png';

function Address() {
  return(
    <div className='row displayAddress' id='contact'>
      <img src={logo} alt="logo" className='imgAddress toAnimate'/>
      <span className='spanPadding toAnimate'>Hotel - Restaurant, Poznań ul. Marka Pola 12</span>
      <span className='spanPadding toAnimate'>contact: 123 456 789</span>
      <hr className='hrLine toAnimate'/>

      <p className='toAnimate'>Opening hours</p>
      <span className='toAnimate'>Mon-Thu</span>
      <span className='toAnimate'>11:00 am-10:00 pm</span>
      <span className='toAnimate'>Fri-Sun</span>
      <span className='toAnimate'>11:00 am-11:00 pm</span>
      <hr className='hrLine toAnimate'/>
    </div>
  )
}

export default Address;
