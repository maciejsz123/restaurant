import React from 'react';
import cake from '../images/cake.jpg';
import kitchen from '../images/kitchen.jpg';
import pancake from '../images/pancake.jpg';
import pizza from '../images/pizza.jpg';
import patio from '../images/patio.jpg';
import wedding from '../images/wedding.jpg';
import '../styles/offer.sass';

function Offer() {
  return(
    <div className='row' id='offer'>
      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={cake} alt="cake" className="offerImg"/>
        <span className='textOnImg'>cake</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={kitchen} alt="cake" className="offerImg"/>
        <span className='textOnImg'>kitchen</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={pancake} alt="cake" className="offerImg"/>
        <span className='textOnImg'>pancake</span>
      </div>

      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={pizza} alt="cake" className="offerImg"/>
        <span className='textOnImg'>pizza</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={patio} alt="cake" className="offerImg"/>
        <span className='textOnImg'>patio</span>
      </div>
      <div className='col-md-4 col-sm-6 col-md-reset toAnimate'>
        <img src={wedding} alt="cake" className="offerImg"/>
        <span className='textOnImg'>wedding</span>
      </div>

    </div>
  )
}

export default Offer;
