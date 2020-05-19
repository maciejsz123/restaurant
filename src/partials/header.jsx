import React, { Component } from 'react';
import '../styles/header.sass';
import logo from '../images/logo.png';

window.onresize = function() {
  if(document.querySelector('.hamburgerIcon').classList.contains('clickedHamburger')) {
    document.querySelector('.hamburgerIcon').classList.remove('clickedHamburger');
    document.querySelector('.hamburgerActive').classList.remove('hamburgerActiveDisplay');
  }
}

class Header extends Component {
  componentDidMount() {
    let menuItems = document.querySelectorAll('.spanHeader');
    Array.from(menuItems).forEach(menuItem => {
      menuItem.addEventListener('click', () => {
        document.querySelector('.hamburgerActive').classList.remove('hamburgerActiveDisplay');
      })
    });
  }

  onClick() {
    document.querySelector('.hamburgerIcon').classList.toggle('clickedHamburger');
    document.querySelector('.hamburgerActive').classList.toggle('hamburgerActiveDisplay');
  }

  render() {
    return(
      <div>
        <div className="row header-fixed">
          <div className='col-md-2 logoImg'>
            <a href="#.home">
              <img className="imgHeader" src={logo} alt="restaurant" />
            </a>
          </div>
          <ul className='col-md-10 ulHeader'>
            <li className='bottomeff liHeader'><a href="#.description" className="header-link">restaurant</a></li>
            <li className='bottomeff liHeader'><a href="#.menu" className="header-link">menu</a></li>
            <li className='bottomeff liHeader'><a href="#.contact" className="header-link">contact</a></li>
            <li className='bottomeff liHeader'><a href="#.reservation" className="header-link">reservation</a></li>
          </ul>
        </div>
        <div className="hamburgerIcon" onClick={this.onClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='hamburgerActive'>
          <ul className='ulHeader'>
            <li className='hoverEffect liHeader'><a href="#.home" className="header-link"><span className='spanHeader'>home</span></a></li>
            <li className='hoverEffect liHeader'><a href="#.description" className="header-link"><span className='spanHeader'>restaurant</span></a></li>
            <li className='hoverEffect liHeader'><a href="#.menu" className="header-link"><span className='spanHeader'>menu</span></a></li>
            <li className='hoverEffect liHeader'><a href="#.contact" className="header-link"><span className='spanHeader'>contact</span></a></li>
            <li className='hoverEffect liHeader'><a href="#.reservation" className="header-link"><span className='spanHeader'>reservation</span></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
