import React from 'react';
import './menu.sass';

function MenuItem(state) {
  return(
    <div className='to-animate'>
      <div className='row set-menu-padding'>
        <span className='col-12 col-xs-10 menu-item-color'>
          <b>{state.name.toUpperCase()}</b>
        </span>

        <span className='col-12 col-xs-2'>
          {state.price}zł
        </span>

        <span className="description-menu-item col-12 col-xs-12">
          {state.description}
        </span>
      </div>
    </div>

  )
}

export default MenuItem;
