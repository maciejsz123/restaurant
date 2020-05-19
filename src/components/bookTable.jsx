import React, { Component } from 'react';
import '../styles/bookTable.sass';

class BookTable extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      time: '',
      persons: 0,
      name: '',
      surname: '',
      additionalInfo: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    switch(e.target.name) {
      case 'date':
        if(new Date() > new Date(e.target.value)) {
          e.target.parentElement.nextSibling.style.display = 'block';
        } else {
          e.target.parentElement.nextSibling.style.display = 'none';
        }
        break;
      case 'time':
        if(e.target.value.substring(0,2) < 11 || e.target.value.substring(0,2) > 22) {
          e.target.parentElement.nextSibling.style.display = 'block';
        } else {
          e.target.parentElement.nextSibling.style.display = 'none';
        }
        break;
      case 'persons':
        if(e.target.value > 8 || e.target.value < 1) {
          e.target.parentElement.nextSibling.style.display = 'block';
        } else {
          e.target.parentElement.nextSibling.style.display = 'none';
        }
        break;
    }

    this.setState({
      [e.target.name]: e.target.value
    });

    let formCheck = document.querySelectorAll('#reservation .formCheck');
    let check = Array.from(formCheck).every( form => {
      return (form.style.display === 'none');
    });
    if(check && this.state.name !== '' && this.state.surname !== '' && this.state.additionalInfo !== '') {
      document.querySelector('#reservation button').disabled = false;
    } else {
      document.querySelector('#reservation button').disabled = true;
    }
  }

  render() {
    return(
        <form action='/reserve.html' className='sideMargin' id='reservation'>
          <h2 className='toAnimate'>Book a table</h2>
          <div className='form-group toAnimate'>
            <label>date: <input type="date" name='date' value={this.state.date} className='form-control' onChange={this.onChange}/></label>
            <p className='formCheck'>chosen date can't be earlier than today</p>
          </div>
          <div className='form-group toAnimate'>
            <label>time: <input type="time" name='time' value={this.state.time} min="11:00" max="22:00" className='form-control' onChange={this.onChange}/></label>
            <p className='formCheck'>chose time between 11 am and 11 pm</p>
          </div>
          <div className='form-group toAnimate'>
            <label>persons (max 8): <input type="number" name='persons' value={this.state.persons} min="1" max="8"  className='form-control' style={{width: '300px', maxWidth:'80vw'}} onChange={this.onChange}/></label>
            <p className='formCheck'>max 8 persons</p>
          </div>
          <div className='form-group toAnimate'>
            <input type="text" name='name' value={this.state.name} maxLength='20' placeholder="name" className='form-control' style={{width: '300px', maxWidth:'80vw'}} onChange={this.onChange}/>
          </div>
          <div className='form-group toAnimate'>
            <input type="text" name='surname' value={this.state.surname} maxLength='40' placeholder="surname" className='form-control' style={{width: '300px', maxWidth:'80vw'}} onChange={this.onChange}/>
          </div>
          <div className='form-group toAnimate'>
            <input type="text-area" name='additionalInfo' value={this.state.additionalInfo} maxLength='100' placeholder="additional info" className='form-control' style={{width: '300px', maxWidth:'80vw'}} onChange={this.onChange}/>
          </div>
          <div className='form-group toAnimate'>
            <button className="btn btn-success" disabled>send</button>
          </div>
        </form>
    )
  }
}

export default BookTable;
