import React from 'react';
import '../styles/menu.sass';

function MenuItem(state) {
  return(
    <div className='toAnimate'>
      <div className='row setMenuPadding'>
        <span className='col-12 col-xs-10 menuItemColor'>
          <b>{state.name.toUpperCase()}</b>
        </span>

        <span className='col-12 col-xs-2'>
          {state.price}zł
        </span>

        <span className="descriptionMenuItem col-12 col-xs-12">
          {state.description}
        </span>
      </div>
    </div>

  )
}

export default MenuItem;
