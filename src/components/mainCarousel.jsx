import React, { Component } from 'react';
import '../styles/mainCarousel.sass';

class MainCarousel extends Component {

  getNextElementNumber(id) {
    let elem = document.getElementsByClassName('slide');
    let activeImage = 0;
    let nextImage = 0;

    for(let i=0; i< elem.length; i++) {
        if(getComputedStyle(elem[i]).display === 'block') {
          activeImage = i;
          break;
        }
    }

    if(id === 'left-arrow') {
      (activeImage - 1) < 0 ? nextImage = elem.length - 1 : nextImage = activeImage - 1;
    } else if(id === 'right-arrow') {
      (activeImage + 1) > elem.length - 1 ? nextImage = 0 : nextImage = activeImage + 1;
    } else {
      nextImage = id.charAt(id.length-1)-1;
    }

    return nextImage;
  }

  slide(e) {
    let nextElement = this.getNextElementNumber(e.target.id);
    let elem = document.getElementsByClassName('slide');
    for(let i=0; i< document.getElementsByClassName('slide').length; i++) {
      elem[i].style.display = 'none';
      elem[i].childNodes[0].classList.remove('moveText');
      document.getElementById(`indicator${i+1}`).style.backgroundColor = 'transparent';
    }
    elem[nextElement].style.display = "block";

    setTimeout(() => {
      elem[nextElement].childNodes[0].classList.add('moveText');
    }, 50);

    document.getElementById(`indicator${nextElement+1}`).style.backgroundColor = 'white';
  }

  render() {
    return(
      <div className='row' id='home'>
        <div className='wrap'>
          <div id="left-arrow" className="arrow" onClick={this.slide.bind(this)}>
          </div>
          <div id="slider">
            <div className="slide slide1">
              <div className="sliderText moveText">
                <h1>Text 1</h1>
                <span className="spanCarousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </div>
          </div>
          <div id="slider">
            <div className="slide slide2">
            <div className="sliderText">
              <h1>Text 2</h1>
              <span className="spanCarousel">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            </div>
          </div>
          <div id="slider">
            <div className="slide slide3">
            <div className="sliderText">
              <h1>Text 3</h1>
              <span className="spanCarousel">Consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            </div>
          </div>
          <div id="right-arrow" className="arrow" onClick={this.slide.bind(this)}>
          </div>
          <div id="indicator">
            <div id="indicator1" onClick={this.slide.bind(this)}></div>
            <div id="indicator2" onClick={this.slide.bind(this)}></div>
            <div id="indicator3" onClick={this.slide.bind(this)}></div>
          </div>
        </div>
      </div>
    )
  }

}

export default MainCarousel;
