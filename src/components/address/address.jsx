import React from 'react';
import './address.sass';
import logo from '../../images/logo.png';

function Address() {
  return(
    <div className='row display-address' id='contact'>
      <img src={logo} alt="logo" className='img-address to-animate'/>
      <span className='span-padding to-animate'>Hotel - Restaurant, Poznań ul. Marka Pola 12</span>
      <span className='span-padding to-animate'>contact: 123 456 789</span>
      <hr className='hr-line to-animate'/>

      <p className='to-animate'>Opening hours</p>
      <span className='to-animate'>Mon-Thu</span>
      <span className='to-animate'>11:00 am-10:00 pm</span>
      <span className='to-animate'>Fri-Sun</span>
      <span className='to-animate'>11:00 am-11:00 pm</span>
      <hr className='hr-line to-animate'/>
    </div>
  )
}

export default Address;
