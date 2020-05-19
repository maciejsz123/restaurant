import React from 'react';
import '../styles/description.sass';

function Description() {
  return(
    <div className='row setMargin' id='description'>
      <div className='col-md-10 col-md-offset-1 text-center toAnimate' id='description1'>
        <h1>Our Restaurant</h1>
        <hr/>
      </div>
      <div className='col-md-10 col-md-offset-1 text-center toAnimate' id='description2'>
        <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
          rerum facilis est et expedita distinctio.</span>
      </div>
    </div>
  )
}

export default Description;
