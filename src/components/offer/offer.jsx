import React from 'react';
import cake from '../../images/cake.jpg';
import kitchen from '../../images/kitchen.jpg';
import pancake from '../../images/pancake.jpg';
import pizza from '../../images/pizza.jpg';
import patio from '../../images/patio.jpg';
import wedding from '../../images/wedding.jpg';
import './offer.sass';

function Offer() {
  return(
    <div className='row' id='offer'>
      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={cake} alt="cake" className="offer-img"/>
        <span className='text-on-img'>cake</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={kitchen} alt="cake" className="offer-img"/>
        <span className='text-on-img'>kitchen</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={pancake} alt="cake" className="offer-img"/>
        <span className='text-on-img'>pancake</span>
      </div>

      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={pizza} alt="cake" className="offer-img"/>
        <span className='text-on-img'>pizza</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={patio} alt="cake" className="offer-img"/>
        <span className='text-on-img'>patio</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset to-animate'>
        <img src={wedding} alt="cake" className="offer-img"/>
        <span className='text-on-img'>wedding</span>
      </div>

    </div>
  )
}

export default Offer;
