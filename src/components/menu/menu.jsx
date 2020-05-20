import React from 'react';
import MenuItem from './menuItem';
import './menu.sass';

function Menu() {
  return(
    <div className='sideMargin' id='menu'>
      <div className='row to-animate'>
        <h2 className='bottom-line'>Pizza</h2>
      </div>
      <div className='row '>
        <div className='col-md-6'>
          <MenuItem name="margarita"
            description="tomate sauce, cheese, oregano"
            price="20.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="salami"
            description="tomate sauce, cheese, salami"
            price="24.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="vegetariana"
            description="tomato sauce, cheese, mushrooms, olives, onion"
            price="28.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="mexicana"
            description="tomato sauce, cheese, chicken, tabasco, pepper peperoni, onion"
            price="35.00"
          />
        </div>
      </div>
      <div className='row to-animate'>
        <h2 className='bottomLine'>Salad</h2>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <MenuItem name="ceasar salad with chicken"
            description="lettuce, capers, parmesan, croutons & bacon"
            price="23.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="goat cheese salad"
            description="mixed greens, beets, sunflower seeds, candied walnuts, maple dressing"
            price="19.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="small salad"
            description="lettuce mix, grilled corn & edamame"
            price="13.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="herby potato salad"
            description="basil, potato, garlics"
            price="14.00"
          />
        </div>
      </div>
      <div className='row to-animate'>
        <h2 className='bottom-line'>Desserts</h2>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <MenuItem name="meringue layer cake"
            description="orange almond cream and Cointreau liquer with strawberry mousse"
            price="14.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="homemade cheesecake"
            description="homemade cheesecake with chocolate sauce"
            price="16.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="ice cream"
            description="3 scoops to choose from: vanilla, raspberry, pistachio, grapefruit sorbet"
            price="13.00"
          />
        </div>
        <div className='col-md-6'>
          <MenuItem name="aromatic sour apple pie"
            description="with vanilla sauce"
            price="17.00"
          />
        </div>
      </div>
    </div>

  )
}

export default Menu;
