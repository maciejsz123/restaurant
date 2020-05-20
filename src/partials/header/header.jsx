import React, { Component } from 'react';
import './header.sass';
import logo from '../../images/logo.png';

window.onresize = function() {
  if(document.querySelector('.hamburger-icon').classList.contains('clicked-hamburger')) {
    document.querySelector('.hamburger-icon').classList.remove('clicked-hamburger');
    document.querySelector('.hamburger-active').classList.remove('hamburger-active-display');
  }
}

class Header extends Component {
  componentDidMount() {
    let menuItems = document.querySelectorAll('.span-header');
    Array.from(menuItems).forEach(menuItem => {
      menuItem.addEventListener('click', () => {
        document.querySelector('.hamburger-active').classList.remove('hamburger-active-display');
      })
    });
  }

  onClick() {
    document.querySelector('.hamburger-icon').classList.toggle('clicked-hamburger');
    document.querySelector('.hamburger-active').classList.toggle('hamburger-active-display');
  }

  onLinkClick() {
    document.querySelector('.hamburger-icon').classList.remove('clicked-hamburger');
    document.querySelector('.hamburger-active').classList.remove('hamburger-active-display');
  }

  render() {
    return(
      <div>
        <div className="row header-fixed">
          <div className='col-md-2 logo-img'>
            <a href="#.home">
              <img className="img-header" src={logo} alt="restaurant" />
            </a>
          </div>
          <ul className='col-md-10 ul-header'>
            <li className='bottom-eff li-header'><a href="#.description" className="header-link">restaurant</a></li>
            <li className='bottom-eff li-header'><a href="#.menu" className="header-link">menu</a></li>
            <li className='bottom-eff li-header'><a href="#.contact" className="header-link">contact</a></li>
            <li className='bottom-eff li-header'><a href="#.reservation" className="header-link">reservation</a></li>
          </ul>
        </div>
        <div className="hamburger-icon" onClick={this.onClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='hamburger-active'>
          <ul className='ul-header'>
            <li className='hover-effect li-header' onClick={this.onLinkClick.bind(this)}><a href="#.home" className="header-link"><span className='span-header'>home</span></a></li>
            <li className='hover-effect li-header' onClick={this.onLinkClick.bind(this)}><a href="#.description" className="header-link"><span className='span-header'>restaurant</span></a></li>
            <li className='hover-effect li-header' onClick={this.onLinkClick.bind(this)}><a href="#.menu" className="header-link"><span className='span-header'>menu</span></a></li>
            <li className='hover-effect li-header' onClick={this.onLinkClick.bind(this)}><a href="#.contact" className="header-link"><span className='span-header'>contact</span></a></li>
            <li className='hover-effect li-header' onClick={this.onLinkClick.bind(this)}><a href="#.reservation" className="header-link"><span className='span-header'>reservation</span></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
